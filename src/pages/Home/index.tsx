import {
  ChangeEvent, useEffect, useMemo, useState,
} from 'react';
import { AiOutlineClose, AiOutlineSearch } from 'react-icons/ai';
import { GiBeerBottle } from 'react-icons/gi';
import { useDispatch, useSelector } from 'react-redux';
import { selectDrinks } from 'src/redux/slices/drinkSlice';

import { Drink } from '@services/DrinksService/DTO';
import { deleteDrink, listDrinks } from '@services/DrinksService/redux';

import { Modal } from '@components/Modal';
import { PageLayout } from '@components/PageLayout';

import {
  Card, Container, DrinksList, ImageContainer, InputSearchContainer,
} from './styles';

export function Home() {
  const dispatch = useDispatch();
  const drinks: Drink[] = useSelector(selectDrinks);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [itemOnModal, setItemOnModal] = useState<Drink>();

  const filteredDrinks = useMemo(() => {
    if (drinks.length) {
      return (drinks?.filter((drink) => (
        [drink.name.toLowerCase(), drink.description.toLowerCase()]
          .map((searchItem) => searchItem.includes(searchTerm.toLowerCase()))
          .includes(true)
      )));
    }
    return [];
  }, [searchTerm, drinks]);

  useEffect(() => {
    if (!drinks.length) {
      dispatch(listDrinks());
    }
  }, []);

  function handleChangeSearchTerm({ target }: ChangeEvent<HTMLInputElement>) {
    setSearchTerm(target.value);
  }

  function handleClickToDeleteDrink(drink: Drink) {
    return () => {
      setItemOnModal(drink);
      setIsModalOpen(true);
    };
  }

  function handleDeleteDrink(id: number) {
    return () => {
      dispatch(deleteDrink({ id, prevState: drinks }));
    };
  }

  return (
    <PageLayout>
      <InputSearchContainer htmlFor="search">
        <input
          name="search"
          id="search"
          placeholder="Pesquisar"
          onChange={handleChangeSearchTerm}
          value={searchTerm}
        />
        <AiOutlineSearch />
      </InputSearchContainer>

      <Container>
        <DrinksList>
          {filteredDrinks?.map((drink) => (
            <Card key={drink.id}>
              <div onClick={handleClickToDeleteDrink(drink)}>
                <AiOutlineClose />
              </div>

              <ImageContainer>
                {drink.image_url ? (
                  <img src={drink.image_url} alt="" />
                ) : (
                  <GiBeerBottle />
                )}
              </ImageContainer>
              <strong>{drink.name}</strong>
              <p>{drink.description}</p>
            </Card>
          ))}
        </DrinksList>
      </Container>

      {isModalOpen && (
        <Modal
          title={`Deseja excluir a bebida "${itemOnModal?.name}"?`}
          body="Essa ação não podera ser desfeita!"
          onClick={handleDeleteDrink(itemOnModal?.id as number)}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </PageLayout>
  );
}

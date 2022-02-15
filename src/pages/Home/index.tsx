import {
  ChangeEvent, useEffect, useMemo, useState,
} from 'react';
import { AiOutlineClose, AiOutlineSearch } from 'react-icons/ai';
import { GiBeerBottle } from 'react-icons/gi';
import { useDispatch, useSelector } from 'react-redux';
import { selectDrinks } from 'src/redux/slices/drinkSlice';

import { Drink } from '@services/DrinksService/DTO';
import { deleteDrink, listDrinks } from '@services/DrinksService/redux';

import { PageLayout } from '@components/PageLayout';

import {
  Card, DrinksList, ImageContainer, InputSearchContainer,
} from './styles';

export function Home() {
  const dispatch = useDispatch();
  const drinks: Drink[] = useSelector(selectDrinks);
  const [searchTerm, setSearchTerm] = useState<string>('');

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

      <DrinksList>
        {filteredDrinks?.map((drink) => (
          <Card key={drink.id}>
            <div onClick={handleDeleteDrink(drink.id)}>
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
    </PageLayout>
  );
}

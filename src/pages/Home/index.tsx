import {
  ChangeEvent, useEffect, useMemo, useState,
} from 'react';
import { AiOutlineClose, AiOutlineSearch } from 'react-icons/ai';

import DrinksService from '@services/DrinksService';
import { Drink } from '@services/DrinksService/DTO';

import { PageLayout } from '@components/PageLayout';

import { Card, DrinksList, InputSearchContainer } from './styles';

export function Home() {
  const [drinks, setDrinks] = useState<Drink[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');

  const filteredDrinks = useMemo(() => drinks.filter((drink) => (
    [drink.name.toLowerCase(), drink.description.toLowerCase()]
      .map((searchItem) => searchItem.includes(searchTerm.toLowerCase()))
      .includes(true)
  )), [searchTerm, drinks]);

  useEffect(() => {
    (async () => {
      const drinkslist = await DrinksService.listDrinks<Drink[]>();
      setDrinks(drinkslist);
    })();
  }, []);

  function handleChangeSearchTerm({ target }: ChangeEvent<HTMLInputElement>) {
    setSearchTerm(target.value);
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
            <div>
              <AiOutlineClose />
            </div>
            <img src={drink.image_url} alt="" />
            <strong>{drink.name}</strong>
            <p>{drink.description}</p>
          </Card>
        ))}
      </DrinksList>
    </PageLayout>
  );
}

import { useEffect, useState } from 'react';
import { AiOutlineClose, AiOutlineSearch } from 'react-icons/ai';

import DrinksService from '@services/DrinksService';
import { Drink } from '@services/DrinksService/DTO';

import { PageLayout } from '@components/PageLayout';

import { Card, DrinksList, InputSearchContainer } from './styles';

export function Home() {
  const [drinks, setDrinks] = useState<Drink[]>([]);

  useEffect(() => {
    (async () => {
      const drinkslist = await DrinksService.listDrinks<Drink[]>();
      setDrinks(drinkslist);
    })();
  }, []);

  return (
    <PageLayout>
      <InputSearchContainer htmlFor="search">
        <input name="search" id="search" placeholder="Pesquisar" />
        <AiOutlineSearch />
      </InputSearchContainer>

      <DrinksList>
        {drinks?.map((drink) => (
          <Card>
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

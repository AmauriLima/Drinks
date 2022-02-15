import { AiOutlineClose, AiOutlineSearch } from 'react-icons/ai';

import { PageLayout } from '@components/PageLayout';

import { Card, DrinksList, InputSearchContainer } from './styles';

export function Home() {
  return (
    <PageLayout>
      <InputSearchContainer htmlFor="search">
        <input name="search" id="search" placeholder="Pesquisar" />
        <AiOutlineSearch />
      </InputSearchContainer>

      <DrinksList>
        <Card>
          <div>
            <AiOutlineClose />
          </div>
          <img src="" alt="" />
          <strong>Title</strong>
          <p>Description</p>
        </Card>
        <Card>
          <div>
            <AiOutlineClose />
          </div>
          <img src="" alt="" />
          <strong>Title</strong>
          <p>Description</p>
        </Card>
        <Card>
          <div>
            <AiOutlineClose />
          </div>
          <img src="" alt="" />
          <strong>Title</strong>
          <p>Description</p>
        </Card>
      </DrinksList>
    </PageLayout>
  );
}

import { AiOutlineSearch } from 'react-icons/ai';

import { PageLayout } from '@components/PageLayout';

import { InputSearchContainer } from './styles';

export function Home() {
  return (
    <PageLayout>
      <InputSearchContainer htmlFor="search">
        <input name="search" id="search" placeholder="Pesquisar" />
        <AiOutlineSearch />
      </InputSearchContainer>
    </PageLayout>
  );
}

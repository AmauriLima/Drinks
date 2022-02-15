import { ReactNode } from 'react';

import { Header } from '@components/Header';

import { Container, Main } from './styles';

type PageLayoutProps = {
  children: ReactNode;
}

export function PageLayout({ children }: PageLayoutProps) {
  return (
    <Container>
      <Header />
      <Main>
        {children}
      </Main>
    </Container>
  );
}

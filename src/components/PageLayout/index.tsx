import { ReactNode } from 'react';

import { Container, Main } from './styles';

type PageLayoutProps = {
  children: ReactNode;
}

export function PageLayout({ children }: PageLayoutProps) {
  return (
    <Container>
      <Main>
        {children}
      </Main>
    </Container>
  );
}

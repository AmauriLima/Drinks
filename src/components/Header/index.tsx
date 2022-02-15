import { Link } from 'react-router-dom';

import {
  Container, Content, ControlButtons, FakeLogo,
} from './styles';

export function Header() {
  return (
    <Container>
      <Content>
        <FakeLogo />

        <ControlButtons>
          <Link to="/">Listagem</Link>
          <Link to="/createDrink">Cadastro</Link>
        </ControlButtons>
      </Content>
    </Container>
  );
}

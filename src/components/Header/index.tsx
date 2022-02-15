import { GiBeerBottle } from 'react-icons/gi';
import { Link } from 'react-router-dom';

import {
  Container, Content, ControlButtons, Logo,
} from './styles';

export function Header() {
  return (
    <Container>
      <Content>
        <Logo>
          <GiBeerBottle />
        </Logo>

        <ControlButtons>
          <Link to="/">Listagem</Link>
          <Link to="/createDrink">Cadastro</Link>
        </ControlButtons>
      </Content>
    </Container>
  );
}

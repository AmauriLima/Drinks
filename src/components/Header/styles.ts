import styled from 'styled-components';

export const Container = styled.header`
  padding: 12px 24px;
  background-color: ${({ theme }) => theme.colors.gray[1000]};
  position: sticky;
  top: 0;
  width: 100%;
  max-height: 84px;
  height: 100%;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
`;

export const Logo = styled.div`
  svg {
    height: 48px;
    color: ${({ theme }) => theme.colors.primary.main};
    width: 48px;
  }
  padding: 4px;
  border-radius: 50%;
`;

export const ControlButtons = styled.div`
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.gray[500]};
    transition: 0.2s ease-in;

    :hover {
      filter: brightness(.8);
    }
  }

  a + a {
    margin-left: 48px;
  }
`;

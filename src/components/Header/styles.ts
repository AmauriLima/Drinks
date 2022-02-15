import styled from 'styled-components';

export const Container = styled.header`
  padding: 12px 24px;
  background-color: ${({ theme }) => theme.colors.gray[500]};
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
`;

export const FakeLogo = styled.div`
    height: 32px;
    width: 32px;
    background: ${({ theme }) => theme.colors.gray[600]};
    border-radius: 50%;
  `;

export const ControlButtons = styled.div`
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.gray[800]};
  }

  a + a {
    margin-left: 48px;
  }
`;

import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }
  scrollbar-width: 0px;
`;

export const Form = styled.form`
  max-width: 524px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding: 120px 24px 48px;

  label {
    color: ${({ theme }) => theme.colors.gray[300]};
  }

  button {
    margin-top: 16px;
    height: 48px;
    border: 0;
    outline: 0;
    border-radius: 4px;
    max-width: 180px;
    width: 100%;
    font-size: 0.875rem;
    align-self: flex-end;
    background-color: ${({ theme }) => theme.colors.primary.dark};
    color: ${({ theme }) => theme.colors.gray[500]};
    transition: 0.2s ease-in;

    :disabled {
    background-color: ${({ theme }) => theme.colors.gray[800]};
    }

    @media (max-width: 424px) {
      max-width: 100%;
      margin-top: 32px;
    }
  }
`;

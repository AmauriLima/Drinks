import styled from 'styled-components';

export const InputSearchContainer = styled.label`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
  background: ${({ theme }) => theme.colors.gray[500]};
  color: ${({ theme }) => theme.colors.gray[900]};
  border-radius: 4px;
  margin: 0 auto;
  max-width: 524px;
  width: 100%;
  cursor: text;
  border: 2px solid transparent;
  transition: 0.2s ease-in;
  margin: 120px 0 48px;

  &:focus-within {
    border: 2px solid ${({ theme }) => theme.colors.primary.dark};
  }

  input {
    height: 48px;
    width: 100%;
    border: none;
    background: transparent;
    outline: none;
    color: ${({ theme }) => theme.colors.gray[900]};
    font-size: 1rem;

    ::placeholder {
      color: ${({ theme }) => theme.colors.gray[800]};
      font-size: 0.875rem;
    }
  }

  svg {
    width: 1.2rem;
    height: 1.2rem;
  }
`;

export const Container = styled.div`
  width: 100%;
  overflow-y: scroll;
  padding: 0px 24px 48px;
  scrollbar-width: 0px;

  ::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }
`;

export const EmptyListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  svg {
    width: 100px;
    height: 100px;
    color: ${({ theme }) => theme.colors.primary.main};
    margin-top: 16px;
  }

  p {
    text-align: center;
    color: ${({ theme }) => theme.colors.gray[300]};
    margin-top: 8px;

    strong, a {
      color: ${({ theme }) => theme.colors.primary.main};
      font-weight: bold;
    }
  }

  button {
    margin-top: 16px;
    height: 48px;
    border: 0;
    outline: 0;
    border-radius: 4px;
    max-width: 180px;
    width: 100%;
    font-size: 1rem;
    background-color: ${({ theme }) => theme.colors.primary.dark};
    color: ${({ theme }) => theme.colors.gray[500]};
    transition: 0.2s ease-in;
  }
`;

export const DrinksList = styled.div`
  display: flex;
  max-width: 900px;
  width: 100%;
  flex-wrap: wrap;
  margin: 0 auto;
  justify-content: center;
  grid-gap: 12px;
`;

export const Card = styled.div`
  border-radius: 4px;
  min-width: 250px;
  max-width: 250px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.gray[800]};
  padding: 8px;
  text-align: center;

  strong {
    display: block;
    color: ${({ theme }) => theme.colors.gray[300]};
  }

  p {
    padding: 0 8px;
    margin-top: 8px;
    color: ${({ theme }) => theme.colors.gray[500]};
    max-height: 108px;
    overflow-y: scroll;
    scrollbar-width: 0px;

    ::-webkit-scrollbar {
      width: 6px;
      height: 6px;
    }
  }

  & > div:first-child {
    display: flex;
    justify-content: flex-end;

    svg {
      color: ${({ theme }) => theme.colors.gray[300]};
      cursor: pointer;
      width: 1.25rem;
      height: 1.25rem;
    }
  }
`;

export const ImageContainer = styled.div`
  img, svg {
    height: 100px;
    object-fit: contain;
    margin-bottom: 16px;
  }
  svg {
    width: 100px;
  }
`;

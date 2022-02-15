import styled from 'styled-components';

export const InputSearchContainer = styled.label`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
  background: ${({ theme }) => theme.colors.gray[500]};
  border-radius: 4px;
  margin: 0 auto;
  max-width: 624px;
  width: 100%;
  cursor: text;
  border: 2px solid transparent;
  transition: 0.2s ease-in;

  &:focus-within {
    border: 2px solid black;
  }

  input {
    height: 48px;
    width: 100%;
    border: none;
    background: transparent;
    outline: none;
    font-size: 1rem;

    ::placeholder {
      color: black;
      font-size: 0.875rem;
    }
  }

  svg {
    width: 1.2rem;
    height: 1.2rem;
  }
`;

export const DrinksList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  grid-gap: 12px;
  margin-top: 48px;
`;

export const Card = styled.div`
  border-radius: 4px;
  min-width: 300px;
  max-width: 300px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.gray[500]};
  padding: 8px;
  text-align: center;

  img {
    height: 100px;
    object-fit: contain;
  }

  strong {
    display: block;
  }

  p {
    padding: 0 8px;
    margin-top: 8px;

    max-height: 100px;
    overflow-y: scroll;

    ::-webkit-scrollbar {
      width: 6px;
      height: 6px;
    }
  }

  & > div:first-child {
    display: flex;
    justify-content: flex-end;

    svg {
      width: 1.25rem;
      height: 1.25rem;
    }
  }
`;

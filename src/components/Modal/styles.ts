import styled, { keyframes } from 'styled-components';

const appear = keyframes`
  from {
    margin-top: -1000px;
    opacity: 0;
  }

  80% {
    margin-top: 10px;
  }

  to {
    margin-top: 0;
    opacity: 1;
  }
`;

const opacity = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

export const Overlay = styled.div`
  background: rgba(255, 255, 255, .4);
  backdrop-filter: blur(4px);

  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;

  display: flex;
  align-items: center;
  animation: ${opacity} ease-in 0.2s;
  justify-content: center;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 450px;
  background: ${({ theme }) => theme.colors.background};
  border-radius: 4px;
  padding: 24px;
  animation: ${appear} ease-in 0.2s;
  box-shadow: 8px 4px 10px rgba(0, 0, 0, 0.04);

  h1 {
    font-size: 22px;
    color: ${({ theme }) => theme.colors.danger};
  };

  p {
    margin-top: 8px;
    color: ${({ theme }) => theme.colors.gray[500]};
  }
`;

export const Footer = styled.footer`
  margin-top: 32px;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  .cancel-button {
    background: transparent;
    border: none;

    color: ${({ theme }) => theme.colors.gray[300]};

    font-size: 16px;
    margin-right: 8px;
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
    background-color: ${({ theme }) => theme.colors.danger};
    color: ${({ theme }) => theme.colors.gray[500]};
    transition: 0.2s ease-in;

    @media (max-width: 424px) {
      max-width: 100%;
      margin-top: 32px;
    }
  }
`;

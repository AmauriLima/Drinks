import ReactDOM from 'react-dom';

import { Container, Footer, Overlay } from './styles';

type ModalProps = {
  title: string;
  body: string;
  onClick: () => void;
  onClose: () => void;
}

export function Modal({
  title, body, onClick, onClose,
}: ModalProps) {
  return ReactDOM.createPortal(
    <Overlay>
      <Container>
        <h1>{title}</h1>
        <p>
          {body}
        </p>

        <Footer>
          <button type="button" className="cancel-button" onClick={onClose}>
            Cancelar
          </button>

          <button type="button" onClick={() => { onClick(); onClose(); }}>
            Deletar
          </button>
        </Footer>
      </Container>
    </Overlay>,
    document.getElementById('modal-root') as HTMLElement,
  );
}

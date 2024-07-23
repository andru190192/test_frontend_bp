import ReactDOM from 'react-dom';
import { ModalProps } from "./types";
import { ModalContent, ModalOverlay } from './styles';

const Modal = ({ isOpen, children }: ModalProps) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <ModalOverlay>
      <ModalContent>
        {children}
      </ModalContent>
    </ModalOverlay>,
    document.body
  );
};

export default Modal;
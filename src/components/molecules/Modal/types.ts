export interface ModalProps {
  isOpen: boolean;
  children: React.ReactNode;
  onClose?: () => void;
}
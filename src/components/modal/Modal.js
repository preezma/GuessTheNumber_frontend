import { useCallback, useEffect } from "react";
import { ModalContainer, ModalContent, ModalBody } from "./StyledModal";

const Modal = ({ handleClose, show, children, background }) => {
  useEffect(() => {
    if (show) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [show, handleClose]);
  const closeModal = useCallback(
    (e) => {
      if (e.target === e.currentTarget) {
        document.body.style.overflow = "unset";
        handleClose();
      }
    },
    [handleClose]
  );
  return (
    <ModalContainer show={show} onClick={closeModal}>
      <ModalContent background={background}>
        <ModalBody>{children}</ModalBody>
      </ModalContent>
    </ModalContainer>
  );
};

export default Modal;

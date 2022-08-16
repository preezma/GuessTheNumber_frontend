import Modal from "../../../components/modal/Modal";
import WinInfo from "../../../components/winInfo/WinInfo";

const WinModal = ({ open, closeModal, handleRematch }) => {
  const handleCloseModal = () => {
    closeModal();
  };

  return (
    <Modal show={open} handleClose={handleCloseModal} background="#ce93cb">
      <WinInfo handleRematch={handleRematch} />
    </Modal>
  );
};
export default WinModal;

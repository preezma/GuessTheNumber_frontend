import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGameInfo } from "../../../reduxStore/actions";
import { useNavigate } from "react-router-dom";
import Modal from "../../../components/modal/Modal";
import WinInfo from "../../../components/winInfo/WinInfo";
const WinModal = ({ open, closeModal }) => {
  const dispatch = useDispatch();
  const { game } = useSelector((state) => state.game);
  const navigate = useNavigate();
  useEffect(() => {
    if (game._id) {
      navigate(`/game/${game._id}`);
    }
  }, [game._id, navigate]);
  const handleCloseModal = () => {
    closeModal();
  };

  const handleRematchGame = () => {
    getGameInfo()(dispatch);
    closeModal();
  };

  return (
    <Modal show={open} handleClose={handleCloseModal} background="#ce93cb">
      <WinInfo handleRematch={handleRematchGame} />
    </Modal>
  );
};
export default WinModal;

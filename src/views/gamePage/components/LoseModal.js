import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGameInfo } from "../../../reduxStore/actions";
import { useNavigate } from "react-router-dom";
import Modal from "../../../components/modal/Modal";
import { RematchButton } from "../../../components/winInfo/StyledWinInfo";
import loser from "../../../assets/images/loser.svg";
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
    handleCloseModal();
  };

  return (
    <Modal show={open} handleClose={handleCloseModal} background="#cbdfd5">
      <h1>Loooooser! </h1>
      <h3>Cheer up! Try again! You Can!</h3>
      <img src={loser} alt="loser" height={250} />
      <RematchButton onClick={handleRematchGame}>Rematch</RematchButton>
    </Modal>
  );
};
export default WinModal;

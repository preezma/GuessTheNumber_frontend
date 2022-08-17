import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getGameInfo } from "../../reduxStore/actions";
import AnimatedNumbersBackground from "../../components/animatedNumberBackground/AnimatedNumbers";
import AnimatedButton from "../../components/animatedButton/AnimatedButton";
import { InfoContainer, AnimatedText } from "./StyledStartPage";


const StartPage = () => {
  const dispatch = useDispatch();
  const { game } = useSelector((state) => state.game);
  const navigate = useNavigate();
  useEffect(() => {
    if (game._id) {
      navigate(`/game/${game._id}`);
    }
  }, [game._id, navigate]);

  const handleStartGame = () => {
    dispatch(getGameInfo());
  };

  return (
    <>
      <InfoContainer>
        <h1>Do you like Guessing games?</h1>
        <AnimatedText>Аre you gambling? Prove it... Let's play!</AnimatedText>
        <AnimatedButton handleClickButton={handleStartGame} name="Play" />
      </InfoContainer>
      <AnimatedNumbersBackground />
    </>
  );
};

export default StartPage;

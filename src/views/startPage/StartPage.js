import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getGameInfo } from "../../reduxStore/actions";
import AnimatedNumbersBackground from "../../components/animatedNumberBackground/AnimatedNumbers";
import AnimatedButton from "../../components/animatedButton/AnimatedButton";
import { InfoContainer, AnimatedText } from "./StyledStartPage";

const StartPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleStartGame = () => {
    getGameInfo()(dispatch).then((res) => navigate(`/game/${res._id}`));
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

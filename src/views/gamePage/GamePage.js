import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { checkNumber } from "../../api";
import { getGameInfo } from "../../reduxStore/actions";
import Timer from "../../components/timer/Timer";
import AnimatedMatrixBackground from "../../components/animatedMatrixBackground/AnimatedMatrix";
import AnimatedInfoText from "../../components/animatedInfo/AnimatedInfo";
import WinModal from "./components/WinModal";
import {
  FlexContainer,
  GameContainer,
  NumberInput,
  ErrorText,
  CheckButton,
  GameBox,
} from "./StyledGamePage";
const GamePage = () => {
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);
  const [isNotMatched, setNotMatched] = useState(false);
  const [isOpenedWinModal, setOpenedWinModal] = useState(true);
  const dispatch = useDispatch();
  const { game } = useSelector((state) => state.game);
  const navigate = useNavigate();
  const { id } = useParams();
  const handleChangeValue = (e) => {
    const { value } = e.target;
    if (!isNaN(value)) {
      setValue(value);
      setError(false);
    } else {
      setError(true);
    }
  };

  const handleCheckValue = () =>
    checkNumber(id, value).then((res) => {
      setValue("");
      console.log(res);
    });

  const handleRematchGame = () => {
    getGameInfo()(dispatch).then((res) => navigate(`/game/${res._id}`));
  };
  return (
    <FlexContainer>
      <GameContainer>
        <h1>Hey! You have 3 minutes to guess the number! Hurry up !</h1>
        <h3>Enter 4 digits and click Check</h3>
        {/* <Timer durationFull={30} remainingTime={game.endDate} /> */}
        <Timer durationFull={30} remainingTime={30} />
        <GameBox>
          <NumberInput
            value={value}
            onChange={handleChangeValue}
            maxLength="4"
            autoFocus
          />
          <CheckButton onClick={handleCheckValue} disabled={value.length < 4}>
            Check
          </CheckButton>
        </GameBox>
        {error && <ErrorText>Please Add only Digits!</ErrorText>}

        {isNotMatched && <AnimatedInfoText info={`${value} is less`} />}
      </GameContainer>

      <AnimatedMatrixBackground />

      <WinModal
        open={isOpenedWinModal}
        closeModal={() => setOpenedWinModal(false)}
        handleRematch={handleRematchGame}
      />
    </FlexContainer>
  );
};

export default GamePage;

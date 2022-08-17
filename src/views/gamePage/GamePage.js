import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { checkNumber } from "../../api";
import { getGameInfo } from "../../reduxStore/actions";
import { DateTime } from "luxon";
import Timer from "../../components/timer/Timer";
import AnimatedMatrixBackground from "../../components/animatedMatrixBackground/AnimatedMatrix";
import AnimatedInfoText from "../../components/animatedInfo/AnimatedInfo";
import WinModal from "./components/WinModal";
import LoseModal from "./components/LoseModal";
import {
  FlexContainer,
  GameContainer,
  NumberInput,
  ErrorText,
  CheckButton,
  GameBox,
} from "./StyledGamePage";
const REMAINING_TIME = 180;

const GamePage = () => {
  const [value, setValue] = useState("");
  const [prevValue, setPrevValue] = useState("");
  const [currentTime, setCurrentTime] = useState(null);
  const [error, setError] = useState(false);
  const [gameStatus, setGameStatus] = useState("");
  const [isOpenedWinModal, setOpenedWinModal] = useState(false);
  const [isOpenedLoseModal, setOpenedLoseModal] = useState(false);
  const dispatch = useDispatch();
  const { id } = useParams();
  const { game } = useSelector((state) => state.game);
  const startTime = DateTime.fromISO(game.startTime);
  const diff = currentTime?.diff(startTime).as("seconds");
  const remainingTime = REMAINING_TIME - diff;
  useEffect(() => {
    setCurrentTime(DateTime.local());
  }, []);
  useEffect(() => {
    if (id && !game._id) {
      getGameInfo(id)(dispatch);
    }
  }, [dispatch, game._id, id]);

  useEffect(() => {
    if (remainingTime < 0 || gameStatus === "expired") {
      setOpenedLoseModal(true);
    } else if (game.status === "won" || gameStatus === "won") {
      setOpenedWinModal(true);
    }
  }, [game, gameStatus, remainingTime]);

  const handleChangeValue = (e) => {
    const { value } = e.target;
    if (!isNaN(value)) {
      setValue(value);
      setError(false);
    } else {
      setError(true);
    }
  };
  const disabled =
    value.length < 4 ||
    game.status === "expired" ||
    remainingTime === 0 ||
    gameStatus === "expired";
  const handleCheckValue = () =>
    checkNumber(id, { number: Number(value) }).then((res) => {
      setGameStatus(res.data.status);
      setPrevValue(value);
      setValue("");
      if (res.status === "expired") {
        setOpenedLoseModal(true);
      }
    });

  return (
    <FlexContainer>
      <GameContainer>
        <h1>Hey! You have 3 minutes to guess the number! Hurry up !</h1>
        <h3>Enter 4 digits and click Check</h3>
        <Timer
          durationFull={REMAINING_TIME}
          remainingTime={remainingTime}
          onAnimationEnd={() => setOpenedLoseModal(true)}
        />
        <GameBox>
          <NumberInput
            value={value}
            onChange={handleChangeValue}
            maxLength="4"
            autoFocus
            onKeyDown={(e) => {
              if (e.key === "Enter" && !disabled) handleCheckValue();
            }}
          />
          <CheckButton onClick={handleCheckValue} disabled={disabled}>
            Check
          </CheckButton>
        </GameBox>
        {error && <ErrorText>Please Add only Digits!</ErrorText>}

        {gameStatus === "less" && (
          <AnimatedInfoText info={`${prevValue} is greater`} />
        )}
        {gameStatus === "greater" && (
          <AnimatedInfoText info={`${prevValue} is less`} />
        )}
      </GameContainer>

      <AnimatedMatrixBackground />

      <WinModal
        open={isOpenedWinModal}
        closeModal={() => {
          setOpenedWinModal(false);
          setGameStatus("");
        }}
      />
      <LoseModal
        open={isOpenedLoseModal}
        closeModal={() => {
          setOpenedLoseModal(false);
          setGameStatus("");
        }}
      />
    </FlexContainer>
  );
};

export default GamePage;

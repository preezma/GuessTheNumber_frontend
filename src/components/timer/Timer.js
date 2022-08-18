import React, { useState, useEffect, useRef } from "react";
import { TimerContainer, Avatar } from "./StyledTimer";
const TIMER_DASH_ARRAY = 250;
const Timer = ({ durationFull, state, remainingTime, onAnimationEnd }) => {
  const circle = useRef(null);
  const [keyFrame, setKeyframe] = useState("");
  const remainingDurationPercents = (remainingTime / durationFull) * 100;
  const dashOffset = TIMER_DASH_ARRAY * (remainingDurationPercents / 100);
  useEffect(() => {
    setKeyframe(`@keyframes timerProgress {
      from {
        stroke-dashoffset: ${dashOffset}px;
      }
      to {
        stroke-dashoffset: 0;
      }
    };
    .svg-pi-indicator {
      display:none;
      animation-name: timerProgress;
      animation-duration: ${remainingTime}s;
      animation-timing-function: linear;
    }`);
    circle.current.style.animationName = "timerProgress";
    circle.current.style.animationDuration = `${remainingTime}s`;
  }, [dashOffset, durationFull, remainingTime, state]);
  const onAnimationEndHandler = () => {
    if (onAnimationEnd) onAnimationEnd();
  };
  return (
    <div>
      <style>{keyFrame}</style>
      <TimerContainer>
        <Avatar />
        <svg className="svg-pi svg-pi-25">
          <circle className="svg-pi-track" />
          <circle
            ref={circle}
            className="svg-pi-indicator"
            data-testId="timer-circle"
            onAnimationEnd={onAnimationEndHandler}
          />
        </svg>
      </TimerContainer>
    </div>
  );
};

export default Timer;

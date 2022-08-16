import styled from "styled-components";
import img from "../../assets/images/matrix.svg";

export const TimerContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  & svg {
    max-width: 100%;
    vertical-align: middle;
  }
  & .svg-pi {
    width: 100px;
    height: 100px;
    transform: rotate(-90deg); /* Fix the orientation */
  }

  & .svg-pi-track {
    stroke: #ddd;
    background-image: url("https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/800px-Image_created_with_a_mobile_phone.png");
  }

  & .svg-pi-indicator {
    stroke: #255a0c;
    stroke-dasharray: 251px;
    stroke-linecap: round;
  }

  & .svg-pi-track,
  & .svg-pi-indicator {
    cx: 50px;
    cy: 50px;
    r: 40px;
    fill: transparent;
    stroke-width: 10px;
  }
`;

export const Avatar = styled.div`
  background-image: url(${img});
  width: 70px;
  height: 70px;
  background-size: contain;
  position: absolute;
  border-radius: 50px;
`;

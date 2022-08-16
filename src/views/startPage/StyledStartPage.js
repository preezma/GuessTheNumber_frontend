import styled, { keyframes } from "styled-components";

const animateText = keyframes`
  30% {
          text-shadow: -18px 16px 16px #581c6c;
            }



`;
export const InfoContainer = styled.div`
  width: 100%;
  position: absolute;
  top: 40vh;
  margin: 0 auto;
  color: white;
  font-size: 32px;
  font-family: "Trebuchet MS", sans-serif;
  text-align: center;
`;

export const AnimatedText = styled.p`
  font-weight: bold;
  text-shadow: -1px -1px 0px #1f4d02, 3px 3px 0px #1e832b, 6px 6px 0px #002c06;
  animation: ${animateText} 3s infinite;
`;

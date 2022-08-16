import styled, { keyframes } from "styled-components";

const animateButton = keyframes` 
  0% {
    width: 30px;
    height: 30px;
    opacity: 1;
  }
  100% {
    width: 300px;
    height: 300px;
    opacity: 0;
  }
`;

const PlayButton = styled.button`
  min-width: 300px;
  min-height: 60px;
  font-family: "Nunito", sans-serif;
  font-size: 22px;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 1.3px;
  font-weight: 700;
  background: #4fd1c5;
  background: linear-gradient(90deg, rgb(213 47 228) 0%, rgb(115 214 199) 100%);
  border: none;
  border-radius: 1000px;
  box-shadow: 12px 12px 24px rgba(79, 209, 197, 0.64);
  transition: all 0.3s ease-in-out 0s;
  cursor: pointer;
  outline: none;
  position: relative;
  padding: 10px;
  z-index: 1;
  &::before {
    content: "";
    border-radius: 1000px;
    min-width: calc(300px + 12px);
    min-height: calc(60px + 12px);
    border: 6px solid #00ffcb;
    box-shadow: 0 0 60px rgba(0, 255, 203, 0.64);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
    transition: all 0.3s ease-in-out 0s;
  }

  &:hover,
  &:focus {
    color: #313133;
    transform: translateY(-6px);
  }

  &:hover::before,
  button:focus::before {
    opacity: 1;
  }

  &::after {
    content: "";
    width: 30px;
    height: 30px;
    border-radius: 100%;
    border: 6px solid #e2cde7;
    position: absolute;
    // z-index: -1;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    animation: ${animateButton} 1.5s infinite;
  }

  &:hover::after,
  &:focus::after {
    animation: none;
    display: none;
  }
`;

export default PlayButton;

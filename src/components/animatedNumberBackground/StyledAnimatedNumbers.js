import styled, { keyframes } from "styled-components";

const animateNumber = keyframes`

    0%{
        transform: translateY(0) rotate(0deg);
        opacity: 1;
        border-radius: 0;
    }

    100%{
        transform: translateY(-1000px) rotate(720deg);
        opacity: 0;
        border-radius: 50%;
    }

`;
export const SquareContainer = styled.div`
  background: linear-gradient(to left, #103d10, #2dbb2e);
  width: 100%;
  height: 100vh;
  font-family: "Brush Script MT", cursive;
`;

export const Squares = styled.ul`
  position: absolute;
  top: 0;
  left: 0;
  width: 95%;
  height: 98%;
  overflow: hidden;
`;

export const NumberSquare = styled.li`
  position: absolute;
  display: block;
  list-style: none;
  width: 20px;
  height: 20px;
  background: rgba(255, 255, 255, 0.2);
  animation: ${animateNumber} 15s linear infinite;
  bottom: -150px;
  text-align: center;
  font-size: 5vh;
  padding: 10px;
  margin-right: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;

  &:first-child {
    left: 25%;
    width: 80px;
    height: 80px;
    animation-delay: 0s;
  }
  &:nth-child(2) {
    left: 10%;
    width: 20px;
    height: 20px;
    animation-delay: 2s;
    animation-duration: 12s;
  }

  &:nth-child(3) {
    left: 70%;
    width: 20px;
    height: 20px;
    animation-delay: 4s;
  }

  &:nth-child(4) {
    left: 40%;
    width: 60px;
    height: 60px;
    animation-delay: 0s;
    animation-duration: 18s;
  }

  &:nth-child(5) {
    left: 65%;
    width: 20px;
    height: 20px;
    animation-delay: 0s;
  }

  &:nth-child(6) {
    left: 75%;
    width: 110px;
    height: 110px;
    animation-delay: 3s;
  }

  &:nth-child(7) {
    left: 35%;
    width: 150px;
    height: 150px;
    animation-delay: 7s;
  }

  &:nth-child(8) {
    left: 50%;
    width: 35px;
    height: 35px;
    animation-delay: 15s;
    animation-duration: 45s;
  }

  &:nth-child(9) {
    left: 20%;
    width: 15px;
    height: 15px;
    animation-delay: 2s;
    animation-duration: 35s;
  }

  &:last-child {
    left: 85%;
    width: 150px;
    height: 150px;
    animation-delay: 0s;
    animation-duration: 11s;
  }
`;

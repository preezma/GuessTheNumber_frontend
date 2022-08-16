import styled, { keyframes } from "styled-components";

const titleAnimation = keyframes` 
   0% {
      transform: translateY(-50px);
      opacity: 0;
      -webkit-clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 80%);
      clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 80%);
  }
  20% {
      transform: translateY(0);
      opacity: 1;
      -webkit-clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 15%);
      clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 15%);
  }
  80% {
       transform: translateY(0);
       opacity: 1;
      -webkit-clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 15%);
      clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 15%);
  }
  100% {
       transform: translateY(50px);
       opacity: 0;
      -webkit-clip-path: polygon(100% 0, 100% -0%, 0 100%, 0 100%);
      clip-path: polygon(100% 0, 100% -0%, 0 100%, 0 100%);
    
  }

`;

export const TextContainer = styled.div`
  width: 800px;
  height: 220px;
  position: relative;
`;
export const Title = styled.h1`
  font-size: 35px;
  text-transform: uppercase;
  & span {
    width: 100%;
    float: left;
    color: #59675a;
    -webkit-clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 80%);
    clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 80%);
    transform: translateY(-50px);
    opacity: 0;
    animation-name: ${titleAnimation};
    animation-timing-function: ease;
    animation-duration: 3s;
    animation-delay: 0.6s;
    animation-iteration-count: infinite;
    -webkit-animation-fill-mode: forwards;
    &:first-child {
      animation-delay: 0.7s;
    }
    &:last-child {
      color: #ffe221;
      animation-delay: 0.5s;
    }
  }
`;

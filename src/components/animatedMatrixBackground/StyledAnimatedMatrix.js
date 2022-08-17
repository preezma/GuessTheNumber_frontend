import styled, { keyframes } from "styled-components";

const blur = keyframes`
  23% {filter: url(#none);}
  24% {filter: url(#svg-blur-h);}
  25% {filter: url(#none);}
  26% {filter: url(#svg-blur-h);}
  27% {filter: url(#none);}
  28% {filter: url(#svg-blur-h);}
  35% {filter: url(#none);}
  80% {filter: url(#none);}
  81% {filter: url(#svg-blur-v);}
  87% {filter: url(#none);}
  88% {filter: url(#svg-blur-v);}
  89% {filter: url(#none);}
`
const matrix = keyframes`  
100% {
    transform: translatey(100%);
  }
`


export const MatrixContainer = styled.div ` 
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 100vh;
  position: fixed;
  top:0; left:0;
  overflow: hidden;
  animation: ${blur} 11s infinite;
  background: #000;
`

export const LettersBox = styled.pre`
  color: #80FF00;
  text-shadow: 0 0 2px #60F000, 1px -1px 2px #60F000;
  font-weight: 400;
  font-size: 1.5rem;
  text-decoration: none;
  letter-spacing: .3rem;
  word-spacing: 1rem;
  padding: 1rem 0;
  writing-mode: vertical-rl;
  -webkit-text-orientation: upright;
  -moz-text-orientation: upright;
 text-orientation: upright;
  transform: translatey(-100%);
  animation: ${matrix} linear 30s infinite;




&:nth-child(5n+1) {
  animation-delay: 1s;
  animation-duration: 13s;
}
&:nth-child(5n+2) {
  animation-delay: 1.33s;
  animation-duration: 53s;
}
&:nth-child(5n+3) {
  animation-delay: -1s;
  animation-duration: 29s;
}
&:nth-child(4n) {
  animation-delay: -2s;
  animation-duration: 43s;
}

`;

export const HideMatrixSVG = styled.svg `
  position: absolute;
  height: 0; width: 0;
  overflow: 0;
  left: -100%;
`;
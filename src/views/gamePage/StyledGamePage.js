import styled from "styled-components";
export const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Trebuchet MS", sans-serif;
`;

export const GameContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 60%;
  height: 80vh;
  position: absolute;
  top: 7vh;
  border: 3px dashed #54b406;
  background: #fff;
  z-index: 1;
  border-radius: 10px;
`;

export const NumberInput = styled.input`
  border-radius: 16px;
  border: 3px solid #ed6aed;
  width: 210px;
  height: 64px;
  font-size: 75px;
  font-family: "Trebuchet MS", sans-serif;
  padding-left: 20px;
  letter-spacing: 7px;
  background: #000;
  color: #e8a7e8;

  &:focus {
    box-shadow: inset 0 0 0 3px #fff, 0 0 0 4px #fff, 3px -3px 30px #1beabd,
      -3px 3px 30px #10abff;
  }
`;

export const ErrorText = styled.p`
  font-size: 20px;
  color: #ed6aed;
  text-align: center;
`;

export const CheckButton = styled.button`
  border-radius: 14px;
  border: 3px solid #515151;
  margin-left: 39px;
  width: 90px;
  background: #e8a7e8;
  height: 70px;
  font-size: 20px;
  font-family: "Trebuchet MS", sans-serif;
  font-weight: bold;
  color: #515151;
  text-transform: uppercase;
  &:hover:enabled {
    box-shadow: inset -1px 0px 6px 5px #ed6bed;
    cursor: pointer;
  }
  &:disabled {
    background: #e8e8e8;
  }
`;
export const GameBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 30px;
`;

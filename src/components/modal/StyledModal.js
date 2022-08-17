import styled from "styled-components";

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  z-index: 11;
  display: ${(props) => (props.show ? "block" : "none")};
`;
export const ModalContent = styled.div`
  position: fixed;
  background: ${(props) => props.background};
  width: 500px;
  height: auto;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 8px;
`;

export const ModalBody = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px;
`;
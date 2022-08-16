import { WonContainer, RematchButton } from "./StyledWinInfo";

const WinInfo = ({ handleRematch }) => (
  <WonContainer>
    <h1>Congratulations you Won!</h1>
    <RematchButton onClick={handleRematch}>Rematch</RematchButton>
    <div className="before"></div>
    <div className="after"></div>
  </WonContainer>
);

export default WinInfo;

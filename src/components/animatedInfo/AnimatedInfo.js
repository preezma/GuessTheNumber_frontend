import {TextContainer,Title} from "./StyledAnimatedInfo";

const AnimatedInfoText = ({info}) => (
 <TextContainer>
  <Title>
    <span>{info}</span>
    <span>than our number</span>
    <span>TRY AGAIN!</span>
  </Title>
  </TextContainer>
);

export default AnimatedInfoText;

import PlayButton from "./StyledAnimatedButton";

const AnimatedButton = ({name, handleClickButton}) => (
  <PlayButton onClick={handleClickButton}>{name}</PlayButton>
);

export default AnimatedButton;

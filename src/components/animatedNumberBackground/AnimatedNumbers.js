import {
  SquareContainer,
  Squares,
  NumberSquare,
} from "./StyledAnimatedNumbers";

const AnimatedNumbersBackground = () => {
  const numsArr = Array.from(Array(10).keys());
  return (
    <SquareContainer>
      <Squares>
        {numsArr.map((num) => (
          <NumberSquare keys={num}>{num}</NumberSquare>
        ))}
      </Squares>
    </SquareContainer>
  );
};

export default AnimatedNumbersBackground;

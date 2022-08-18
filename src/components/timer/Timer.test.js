import { render, fireEvent, screen, waitFor } from "@testing-library/react";
import { shallow } from "enzyme";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Timer from "./Timer";

configure({ adapter: new Adapter() });

test("should finish the animation after 30s", async () => {
  const logSpy = jest.spyOn(console, "log");
  const wrapper = shallow(
    <Timer
      durationFull={1}
      remainingTime={1}
      onAnimationEnd={() => {
        console.log("animation end");
      }}
    />
  );

  wrapper.find('[data-testId="timer-circle"]').simulate("animationEnd");
  expect(logSpy).toHaveBeenCalledWith("animation end");
});

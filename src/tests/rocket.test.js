import renderer from "react-test-renderer";
import { Provider } from "react-redux";
import store from "../redux/store";
import Rocket from "../components/Rockets/Rocket";

const RocketProvider = () => (
  <Provider store={store}>
    <Rocket />
  </Provider>
);

describe("Rockets component testing", () => {
  it("checks for accurate rendering of all rockets", () => {
    const allRockets = renderer.create(<RocketProvider />).toJSON();
    expect(allRockets).toMatchSnapshot();
  });
});

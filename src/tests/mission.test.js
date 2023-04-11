import { Provider } from "react-redux";
import { render } from "@testing-library/react";
import Missions from "../components/Missions/Missions";
import store from "../redux/store";
import {
  getMissions,
  joinMission,
  leaveMission,
} from "../redux/missions/missionslice";

describe("display the mission in the page", () => {
  it("should display all the missions", () => {
    const { container } = render(
      <Provider store={store}>
        <Missions />
      </Provider>
    );
    expect(container).toMatchSnapshot();
  });
});
describe("Missions reducers", () => {
  it("should fetch missions", async () => {
    await store.dispatch(getMissions());
    expect(store.getState().missions.missions.length).toEqual(10);
  });
  it("should join a mission", () => {
    store.dispatch(joinMission("9D1B7E0"));
    expect(store.getState().missions.missions[0].reserved).toBe(true);
  });
  it("should leave a mission that has been joined", () => {
    store.dispatch(leaveMission("9D1B7E0"));
    expect(store.getState().missions.missions[0].reserved).toEqual(false);
  });
});

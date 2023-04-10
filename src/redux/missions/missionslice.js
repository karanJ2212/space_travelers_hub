import { createSlice } from "@reduxjs/toolkit";
import { get } from "../api";

const missionSlice = createSlice({
  name: "missions",
  initialState: {
    missions: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    setMissions: (state, action) => ({
      ...state,
      missions: action.payload,
      isLoading: false,
    }),
  },
});

export const { setMissions } = missionSlice.actions;

export const fetchMissions = () => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    let response = await get("missions");
    response = response?.data?.map((data) => ({
      id: data.id,
      Missions_name: data.name,
      description: data.description,
      flickr_images: data.flickr_images,
    }));
    dispatch(setMissions(response));
  } catch (error) {
    dispatch(setError(error.message));
  }
};

export default missionSlice.reducer;

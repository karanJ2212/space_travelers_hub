import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const rocketsSlice = createSlice({
  name: 'rockets',
  initialState: {
    rockets: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    setRockets: (state, action) => ({
      ...state,
      rockets: action.payload,
      isLoading: false,
    }),
    setLoading: (state, action) => ({
      ...state,
      isLoading: action.payload,
    }),
    setError: (state, action) => ({
      ...state,
      error: action.payload,
      isLoading: false,
    }),
    reserveRocket: (state, action) => {
      const id = action.payload;
      const updatedRockets = state.rockets.map((rocket) => {
        if (rocket.id !== id) {
          return rocket;
        }
        return { ...rocket, reserved: true };
      });
      return {
        ...state,
        rockets: updatedRockets,
      };
    },
    cancelRocket: (state, action) => {
      const id = action.payload;
      const updatedRockets = state.rockets.map((rocket) => {
        if (rocket.id !== id) {
          return rocket;
        }
        return { ...rocket, reserved: false };
      });
      return {
        ...state,
        rockets: updatedRockets,
      };
    },
  },
});

export const {
  setRockets, setLoading, setError, reserveRocket, cancelRocket,
} = rocketsSlice.actions;

export const fetchRocket = () => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const response = await axios.get('https://api.spacexdata.com/v4/rockets');
    const dataRocket = [];
    response.data.forEach((data) => {
      const rocketdata = {
        id: data.id,
        rocketName: data.name,
        description: data.description,
        flickrImages: data.flickr_images,
        reserved: false,
      };
      dataRocket.push(rocketdata);
    });

    dispatch(setRockets(dataRocket));
  } catch (error) {
    dispatch(setError(error.message));
  }
};

export default rocketsSlice.reducer;

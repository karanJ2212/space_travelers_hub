import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { get } from '../api';

export const getMissions = createAsyncThunk(
  'spacehub/getMissions',
  async (_, thunkAPI) => {
    try {
      let data = await get('/missions');
      data = (data || []).map((mission) => ({
        mission_id: mission.mission_id,
        mission_name: mission.mission_name,
        mission_description: mission.description,
        missionMember: false,
      }));
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue('Something went wrong');
    }
  },
);

const handleMemberships = (state, missionId, missionMember = false) => {
  const missions = state.map((m) => {
    if (m.mission_id === missionId) return { ...m, missionMember };
    return m;
  });
  return missions;
};

const missionSlice = createSlice({
  name: 'missions',
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
    leaveMission: (state, action) => ({
      ...state,
      missions: handleMemberships(state.missions, action.payload),
    }),
    joinMission: (state, action) => ({
      ...state,
      missions: handleMemberships(state.missions, action.payload, true),
    }),
    setError: (state, action) => ({
      ...state,
      error: action.payload,
      isLoading: false,
    }),
  },
  extraReducers: {
    [getMissions.pending]: (state) => ({
      ...state,
      isLoading: true,
    }),
    [getMissions.fulfilled]: (state, action) => ({
      ...state,
      missions: action.payload,
      isLoading: false,
    }),
    [getMissions.rejected]: (state, action) => ({
      ...state,
      error: action.payload,
      isLoading: false,
    }),
  },
});

export const { setMissions, leaveMission, joinMission } = missionSlice.actions;

export default missionSlice.reducer;

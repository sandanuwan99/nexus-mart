import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isInitialized: false,
};

const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    setInitialized: (state, action) => {
      state.isInitialized = action.payload;
    },
  },
});

export const { setInitialized } = globalSlice.actions;
export default globalSlice.reducer;

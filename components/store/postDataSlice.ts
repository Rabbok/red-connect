import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
  name: "data",
  initialState: {
    dataState: {},
  },
  reducers: {
    setDataState: (state, action) => {
      state.dataState = action.payload;
    },
  },
});

export const { setDataState } = dataSlice.actions;

export default dataSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";
import { Filter } from "@/types/types";

const filterSlice = createSlice({
  name: "filter",
  initialState: {
    filterState: 'hot',
  },
  reducers: {
    setFilterState: (state, action) => {
      state.filterState = action.payload;
    },
  },
});

export const { setFilterState } = filterSlice.actions;

export default filterSlice.reducer;
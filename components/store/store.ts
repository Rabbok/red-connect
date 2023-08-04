import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./searchSlice";
import dataReducer from "./postDataSlice"
import filterReducer from "./filterSlice"
const store = configureStore({
  reducer: {
    search: searchReducer,
    data: dataReducer,
    filter: filterReducer,
  },
});

export default store;
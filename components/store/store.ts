import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./searchSlice";
import dataReducer from "./postDataSlice"

const store = configureStore({
  reducer: {
    search: searchReducer,
    data: dataReducer,
  },
});

export default store;
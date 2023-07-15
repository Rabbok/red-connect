import { configureStore } from '@reduxjs/toolkit';

const initialState = {};

interface Action {
  type: string,
  payload: any,
}

const reducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case 'addPosts':
      return { ...state, ...action.payload };
    // Добавьте обработку других действий здесь
    default:
      return state;
  }
};

const store = configureStore({
    reducer: reducer,
    preloadedState: initialState,
});

export default store;
import { createSlice } from "@reduxjs/toolkit";
import getPosts from '@/pages/api/redditPosts';
import { ActionType } from "@/types/types";

const initialState: [] = [];

const getPostsAction = async() => {
    const posts = getPosts('GenshinInpact', 10);

    return {
      type: 'GET_POSTS',
      payload: posts,
    }
}

const postReducer = (state = initialState, action: ActionType) => {
    switch (action.type) {
      case 'GET_POSTS':
        return {
          ...state,
          posts: action.payload,
          error: null,
        };
      case 'SET_ERROR':
        return {
          ...state,
          error: action.payload,
        };
      default:
        return state;
    }
};

const postSlice = createSlice({
  name: 'post',
  initialState: initialState,
  reducers: {
    postReducer,
  }
})

export {getPostsAction};
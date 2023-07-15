import { createSlice } from "@reduxjs/toolkit";
import getPosts from '@/pages/api/redditPosts';

const initialState: [] = [];

interface Payload {
    title: string;
    score: number;
    author: string;
    commentsCount: number;
    content: string;
}
  

interface Action {
    type: string,
    payload: Payload,
}

const getPostsAction = async() => {
    const posts = getPosts('GenshinInpact', 10);

    return {
      type: 'GET_POSTS',
      payload: posts,
    }
}

const postReducer = (state = initialState, action: Action) => {
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
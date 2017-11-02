import {
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILURE,
  NOTHING_NEW,
  REVERT_NEW,
} from '../actions/constants';

import { mapRelativeDate } from '../helpers';

const initialState = {
  pics: [],
  isFetching: false,
  newPosts: true,
  error: false,
};

const posts = (state = initialState, action) => {
  switch (action.type) {
  case FETCH_POSTS_REQUEST:
    return {
      ...state,
      isFetching: true,
      error: false,
    };
  case FETCH_POSTS_SUCCESS:
    return {
      ...state,
      pics: mapRelativeDate(action.response),
      isFetching: false,
      newPosts: true,
    };
  case FETCH_POSTS_FAILURE:
    return {
      ...state,
      pics: [],
      isFetching: false,
      error: true,
    };
  case NOTHING_NEW:
    return {
      ...state,
      isFetching: false,
      newPosts: false,
    };
  case REVERT_NEW:
    return {
      ...state,
      newPosts: true,
    };
  default:
    return state;
  }
};

export default posts;

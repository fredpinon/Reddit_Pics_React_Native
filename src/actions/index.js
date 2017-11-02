import { CALL_API } from '../apiMiddleware';
import {
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILURE,
  NOTHING_NEW,
  REVERT_NEW,
} from './constants';

export const getPosts = endpoint => ({
  [CALL_API]: {
    types: [ FETCH_POSTS_REQUEST, FETCH_POSTS_SUCCESS, FETCH_POSTS_FAILURE, NOTHING_NEW],
    endpoint,
  }
});

export const revertNew = () => ({
  type: REVERT_NEW,
});

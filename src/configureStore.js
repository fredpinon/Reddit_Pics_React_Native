import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import reducer from './reducers';
import apiMiddleware from './apiMiddleware';

const configureStore = () => {
  const store = createStore(
    reducer,
    applyMiddleware(apiMiddleware, logger)
  );
  return store;
};

export default configureStore;

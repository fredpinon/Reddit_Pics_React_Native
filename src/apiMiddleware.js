import { checkIfNewPosts } from './helpers';

const callApi = endpoint => {
  return fetch(`https://api.reddit.com/r/pics/${endpoint}.json`)
    .then(data => new Promise((resolve, reject) => {
      setTimeout(() => resolve(data), 1000);
    }))
    .then(response => response.json());
};

export const CALL_API = 'Call API';

export default store => next => action => {
  const callAPI = action[CALL_API];

  if (typeof callAPI === 'undefined') return next(action);

  const { endpoint, types } = callAPI;

  if (typeof endpoint !== 'string') throw new Error('Specify a string endpoint URL.');

  if (!types.every(type => typeof type === 'string')) throw new Error('Expected action types to be strings.');

  const [ requestType, successType, failureType, nothingNew ] = types;

  next({type: requestType});

  return callApi(endpoint)
    .then(response => {
      const currentPosts = store.getState().posts.pics;
      const newPosts = checkIfNewPosts(currentPosts, response.data.children);
      newPosts
        ? (
          next({
            type: successType,
            response: response.data.children
          })
        ) : (
          next({
            type: nothingNew,
            response: response.data.children
          })
        );
    })
    .catch(error => {
      next({
        type: failureType,
        error
      });
    });
};

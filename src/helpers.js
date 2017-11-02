import moment from 'moment';

export const capitalize = str => `${str[0].toUpperCase()}${str.slice(1)}`;

export const checkIfNewPosts = (currentPosts, newPosts) => {
  if (currentPosts.length === 0) return true;
  return !currentPosts.every((post, i) => post.data.id === newPosts[i].data.id);
};

export const mapRelativeDate = arr => {
  return arr.map(post => {
    return {
      ...post,
      data: {
        ...post.data,
        created_utc: moment(post.data.created_utc*1000).fromNow()
      }
    };
  });
};

export const builRouteParams = str => {
  const arr = str.split('/');
  return [arr[arr.length-3], arr[arr.length-2]];
};

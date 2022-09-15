const routes = (handler) => [
  {
    method: 'GET',
    path: '/threads/{threadId}',
    handler: handler.getThreadHandler,
    options: {
      plugins: {
        'hapi-rate-limit': {
          pathLimit: 3,
        },
      },
    },
  },
  {
    method: 'POST',
    path: '/threads',
    handler: handler.postThreadHandler,
    options: {
      plugins: {
        'hapi-rate-limit': {
          pathLimit: 3,
        },
      },
    },
  },
  {
    method: 'POST',
    path: '/threads/{threadId}/comments',
    handler: handler.postCommentHandler,
    options: {
      plugins: {
        'hapi-rate-limit': {
          pathLimit: 3,
        },
      },
    },
  },
  {
    method: 'DELETE',
    path: '/threads/{threadId}/comments/{commentId}',
    handler: handler.deleteCommentHandler,
    options: {
      plugins: {
        'hapi-rate-limit': {
          pathLimit: 3,
        },
      },
    },
  },
];

module.exports = routes;

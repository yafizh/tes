const routes = (handler) => [
  {
    method: 'POST',
    path: '/users',
    handler: handler.postUserHandler,
  },
  {
    method: 'GET',
    path: '/users',
    handler: async (request, h) => {
      const response = h.response({
        status: 'success',
        data: {
          "A":"B",
        },
      });
      response.code(201);
      return response;
    },
  },
];

module.exports = routes;

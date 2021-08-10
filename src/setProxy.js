const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://www.youtube.com/redirect?event=comments&redir_token=QUFFLUhqbVExMGY0MS0yTGIzSC05US1NVi1sa0VvOFJ6QXxBQ3Jtc0tsN2pQdFJWc2w5TnNjY2RzUFh2ZXpGbnByWWdqZGFSdENZV3hEaUZLUklvVWIyWlFCSjVlLWVlaDZ5eUNIRUNnYldrd1puM05lWmdhQ1RkZHgzQjZSWndLaVI5UV9iUVhFa09LZUF2YUsyQUd4Um9Qaw&q=https%3A%2F%2Fecom-rest-apis.herokuapp.com%2F&stzid=UgyXC6yKkwRk2TxyxjV4AaABAg',
      changeOrigin: true,
    })
  );
};
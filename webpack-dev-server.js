const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');

const config = require('./config/webpack.config.dev');
const port = 8080;

const server = new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  quiet: true,
  stats: { colors: true },
  headers: { 'Access-Control-Allow-Origin': '*' },
  disableHostCheck: true,
  compress: true,
});

server.listen(port, () => {
  console.log(`Webpack server running at ${port}`);
});

const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');

const config = require('./config/webpack.config.dev');
const { webpack: { port } } = require('./config/config.default');

const server = new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  quiet: true,
  stats: { colors: true },
  headers: { 'Access-Control-Allow-Origin': '*' },
  disableHostCheck: true, // That solved it
  compress: true,
});

server.listen(port, () => {
  console.log(`Webpack server running at ${port}`);
});

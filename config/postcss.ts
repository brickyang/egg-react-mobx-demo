const autoprefixer = require('autoprefixer');
const nested = require('postcss-nested');

module.exports = {
  ident: 'postcss',
  plugins: () => [require('postcss-flexbugs-fixes'), autoprefixer(), nested()],
};

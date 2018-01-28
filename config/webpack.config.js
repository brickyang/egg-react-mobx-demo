const assetsPlugin = require('assets-webpack-plugin')
const autoprefixer = require('autoprefixer')
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin')
const extractTextPlugin = require('extract-text-webpack-plugin')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const webpack = require('webpack')

const paths = require('./paths')

module.exports = {
    bail: true,
    context: paths.appSrc,
    entry: './index',
    output: {
        filename: 'bundle.[hash].js',
        hashDigestLength: 7,
        path: paths.appBuild,
        publicPath: '/public/',
    },
    resolve: {
        extensions: [ '.js', '.jsx', 'css' ],
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                loader: extractTextPlugin.extract({
                    use: [
                        'style-loader',
                        { loader: 'css-loader', options: { importLoaders: 1 } },
                        {
                            loader: 'postcss-loader',
                            options: {
                                ident: 'postcss',
                                plugins: () => [
                                    require('postcss-flexbugs-fixes'),
                                    autoprefixer({
                                        browsers: [
                                            '>1%',
                                            'last 4 versions',
                                            'Firefox ESR',
                                            'not ie < 9',
                                        ],
                                        flexbox: 'no-2009',
                                    }),
                                ],
                            },
                        },
                    ],
                }),
                include: paths.appSrc,
            },
        ],
    },
    plugins: [
        new assetsPlugin({ filename: 'assets.json', path: 'app/public' }),
        new extractTextPlugin({
            filename: 'bundle.[hash].css',
            ignoreOrder: true,
        }),
        new webpack.DefinePlugin({
            'process.env': { NODE_ENV: JSON.stringify('production') },
        }),
        new CaseSensitivePathsPlugin(),
        new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
        new UglifyJSPlugin({
            test: /(\.jsx|\.js)$/,
        }),
    ],
    node: {
        dgram: 'empty',
        fs: 'empty',
        net: 'empty',
        tls: 'empty',
        child_process: 'empty',
    },
}

const {
  addPlugins, performance, defineConstants, createConfig, entryPoint, env, setOutput, sourceMaps, webpack
} = require('@webpack-blocks/webpack2')

const babel = require('@webpack-blocks/babel6')
const devServer = require('@webpack-blocks/dev-server2')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const basePlugins = [
  new HtmlWebpackPlugin({
    inject: true,
    template: './index.html'
  })
]

const productionPlugins = [
  new webpack.optimize.OccurrenceOrderPlugin(),
  new webpack.LoaderOptionsPlugin({
    minimize: true,
    debug: false
  }),
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false
    },
    output: {
      comments: false
    },
    screwIe8: true,
    sourceMap: false
  })
]

module.exports = createConfig([
  entryPoint('./src/index.js'),
  setOutput('./build/bundle.js'),
  babel(),
  defineConstants({
    'process.env.NODE_ENV': process.env.NODE_ENV || 'development'
  }),
  addPlugins(basePlugins),
  env('development', [
    entryPoint('./src/index.dev.js'),
    sourceMaps('eval'),
    devServer(),
    devServer.proxy({
      '/api/*': { target: 'http://localhost:8080' }
    }),
    performance({
      maxAssetSize: 3000000,
      maxEntrypointSize: 3000000
    })
  ]),
  env('production', [
    entryPoint('./src/index.js'),
    addPlugins(productionPlugins)
  ])
])

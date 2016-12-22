const {
  addPlugins, createConfig, entryPoint, env, setOutput, sourceMaps, webpack
} = require('@webpack-blocks/webpack2')

const babel = require('@webpack-blocks/babel6')
const cssModules = require('@webpack-blocks/css-modules')
const devServer = require('@webpack-blocks/dev-server2')
const extractText = require('@webpack-blocks/extract-text2')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const basePlugins = [
  new HtmlWebpackPlugin({
    inject: true,
    template: './index.html'
  }),
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development')
    }
  })
]

const productionPlugins = [
  new webpack.optimize.OccurrenceOrderPlugin(),
  new webpack.optimize.UglifyJsPlugin({
    compress: { warnings: true },
    screwIe8: true
  })
]

module.exports = createConfig([
  entryPoint('./src/index.js'),
  setOutput('./build/bundle.js'),
  babel(),
  cssModules(),
  addPlugins(basePlugins),
  env('development', [
    sourceMaps('eval'),
    devServer(),
    devServer.proxy({
      '/api/*': { target: 'http://localhost:8080' }
    })
  ]),
  env('production', [
    extractText(),
    addPlugins(productionPlugins)
  ])
])
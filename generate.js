const { resolve, relative, dirname, basename, extname } = require('path')
const { generateEntry } = require('webpacker-entry')
const webpack = require('webpack')
const ManifestPlugin = require('webpack-manifest-plugin')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

module.exports = function generate(options = {}) {
  const baseDir = options.baseDir || resolve('./app/javascript/packs')
  const extensions = options.extensions || ['.js', '.jsx']
  const rules = options.rules || [
    {
      test: /.jsx?$/,
      exclude: /node_modules/,
      use: ['babel-loader']
    }
  ]

  return {
    mode: 'development',
    devtool: 'cheap-module-source-map',
    entry: generateEntry(baseDir, extensions),
    output: {
      filename: '[name]-[chunkhash].js',
      chunkFilename: '[name]-[chunkhash].chunk.js',
      hotUpdateChunkFilename: '[id]-[hash].hot-update.js',
      path: resolve('./public/packs'),
      publicPath: '/packs/'
    },
    module: {
      strictExportPresence: true,
      rules
    },
    plugins: [
      new ManifestPlugin({ publicPath: '/packs/', writeToFileEmit: true })
    ],
    optimization: {
      minimizer: [new UglifyJSPlugin()]
    },
    resolve: {
      extensions
    },
    resolveLoader: {
      modules: ['node_modules']
    }
  }
}

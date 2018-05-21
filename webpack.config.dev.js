const generate = require('./generate')

const host = 'localhost'
const port = '3035'

const devServer = webpackConfig => ({
  clientLogLevel: 'none',
  compress: true,
  disableHostCheck: true,
  contentBase: webpackConfig.output.path,
  inline: true,
  host,
  port,
  public: `${host}:${port}`,
  publicPath: webpackConfig.output.publicPath,
  historyApiFallback: {
    disableDotRule: true
  },
  headers: { 'Access-Control-Allow-Origin': '*' },
  overlay: true,
  stats: {
    errorDetails: true
  },
  watchOptions: { ignored: '/node_modules/' }
})

module.exports = (webpackConfig = generate()) => ({
  ...webpackConfig,
  output: {
    ...webpackConfig.output,
    pathinfo: true
  },
  cache: true,
  devServer: devServer(webpackConfig)
})

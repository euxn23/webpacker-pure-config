const generate = require('./generate')

module.exports = (webpackConfig = generate()) => ({
  ...webpackConfig,
  mode: 'production',
  stats: 'normal',
  bail: true,
  devtool: 'nosources-source-map'
})

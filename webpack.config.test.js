const generateProd = require('./webpack.config.prod')
const { resolve } = require('path')

module.exports = (webpackConfig = generateProd()) => {
  const webpackConfigProd = generateProd(webpackConfig)
  return {
    ...webpackConfigProd,
    output: {
      ...webpackConfigProd.output,
      path: resolve('./public/packs-test'),
      publicPath: '/packs-test/'
    }
  }
}

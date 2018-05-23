const generate = require('./generate')

module.exports = generate()
module.exports.dev = require('./webpack.config.dev')
module.exports.test = require('./webpack.config.test')
module.exports.prod = require('./webpack.config.prod')
module.exports.generate = generate

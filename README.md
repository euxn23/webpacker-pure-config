# webpacker-pure-config

Pure webpack way config for webpacker and rails.

Providing `webpack.config` is conpatible with webpacker.rb gem, without any config.

## Usage

### Default Usage

#### Simple

```js
module.exports = require('webpacker-pure-config')
```

#### Specify env

`dev`/`test`/`prod` env is available.

These append environment specific parameters. (inspired by `@rails/webpacker`)

If argument is not given, return default config.

```js
const { dev } = require('webpacker-pure-config')
module.exports = dev()
```

### With Options Usage

arg `options` default value is below.

* baseDir: string = `'app/javascript/packs'`
* extensions: string[] = `['.js', '.jsx']`
* rules: rule[] = `{ test: /.jsx?$/, exclude: /node_modules/, use: ['babel-loader'] }`

webpack.config.js

```js
const { generate } = require('webpack-pure-config')
module.exports = generate({
  extensions: ['.ts', '.tsx']
  rules: [
    {
      test: /.tsx?$/,
      exclude: /node_modules/,
      use: ['ts-loader']
    }
  ]
})
```

config/webpack/development.js

```js
const { dev } = require('webpack-pure-config')
const webpackConfig = require('../../webpack.config')
module.exports = dev(webpackConfig)
```

### Custom Usage

webpack.config.js

```js
const { generate } = require('webpack-pure-config')

const baseConfig = generate({
  extensions: ['.ts', '.tsx']
  rules: [
    {
      test: /.tsx?$/,
      exclude: /node_modules/,
      use: ['ts-loader']
    }
  ]
})

module.exports = {
  ...baseConfig,
  plugins: [
    ...baseConfig.plugins,
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
  ]
}
```

config/webpack/development.js

```js
const { dev } = require('webpack-pure-config')
const webpackConfig = require('../../webpack.config')
module.exports = dev(webpackConfig)
```

## Notes

* supports Node.js 8.x+

## Licence

MIT

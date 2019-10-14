const { buildWebpackConfig } = require('webpack-preset-accurapp')
const typescript = require('webpack-blocks-ts')
const { setOutput } = require('@webpack-blocks/webpack')

const workerLoader = () => {
  return (_, { addLoader }) =>
    addLoader({
      test: /\.worker\.ts$/,
      options: { inline: true },
      loader: 'worker-loader',
    })
}

module.exports = buildWebpackConfig([
  typescript({ silent: true }),
  workerLoader(),
  setOutput({ globalObject: 'this' }),
])

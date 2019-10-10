const { buildWebpackConfig } = require('webpack-preset-accurapp')
const typescript = require('webpack-blocks-ts')

const workerLoader = () => {
  return (_, { addLoader }) =>
    addLoader({
      test: /\.worker\.[jt]s$/,
      options: { inline: true },
      loader: 'worker-loader',
    })
}

module.exports = buildWebpackConfig([typescript({ silent: true }), workerLoader()])

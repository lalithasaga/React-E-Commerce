const webpack = require('webpack');

module.exports = {
  resolve: {
    fallback: {
      http: require.resolve('stream-http'),
      https: require.resolve('https-browserify'),
      util: require.resolve('util/'),
      zlib: require.resolve('browserify-zlib'),
      stream: require.resolve('stream-browserify'),
      url: require.resolve('url/'),
      assert: require.resolve('assert/'),
      http2: require.resolve('http-browserify')
    }
  },
  plugins: [
    new webpack.ProvidePlugin({
      process: 'process/browser'
    })
  ]
};

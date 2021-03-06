path = require('path');

module.exports = {
  entry: './src/index',
  output: {
    filename: './dist/index.js',
    library: 'SyncyFrame',
    libraryTarget: 'umd',
    libraryExport: 'default',
  },

  externals: ['react', 'react-dom', 'prop-types'],

  module: {
    loaders: [{
      test: /\.jsx?$/,
      include: [
        path.resolve(__dirname, 'src/')
      ],
      loader: 'babel-loader'
    }]
  },

  resolve: {
    extensions: ['.js', '.jsx']
  }
};

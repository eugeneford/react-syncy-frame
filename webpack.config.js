path = require('path');

module.exports = {
  entry: './src/react-syncy-frame',
  output: {
    filename: './dist/react-syncy-frame.js',
    library: 'SyncyFrame',
    libraryTarget: 'umd',
    libraryExport: 'default',
  },

  externals: ['react', 'react-dom'],

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

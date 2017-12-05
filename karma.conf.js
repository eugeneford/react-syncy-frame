var path = require('path');

var reporters = ['progress', 'coverage-istanbul'];
var browsers = process.env.TRAVIS ? ['Chrome_travis_ci'] : ['Chrome'];

module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      'test/index.spec.js'
    ],
    preprocessors: {
      'test/index.spec.js': 'webpack'
    },
    webpack: {
      devtool: 'inline-source-map',
      module: {
        loaders: [{
            test: /\.jsx?$/,
            include: [
              path.resolve(__dirname, 'src/'),
              path.resolve(__dirname, 'test/')
            ],
            loader: 'babel-loader'
          },
          {
            test: /\.jsx?$/,
            use: {
              loader: 'istanbul-instrumenter-loader',
              options: { esModules: true }
            },
            enforce: 'post',
            exclude: /node_modules|\.spec\.jsx?$/,
          }
        ]
      },
      resolve: {
        extensions: ['.js', '.jsx']
      }
    },
    reporters: reporters,
    coverageIstanbulReporter: {
      reports: ['html', 'lcov'],
      dir: path.join(__dirname, 'coverage')
    },
    port: 9876,
    customLaunchers: {
      Chrome_travis_ci: {
        base: 'Chrome',
        flags: ['--no-sandbox']
      }
    },
    browsers: browsers,
    captureTimeout: 4 * 60 * 1000
  })
};

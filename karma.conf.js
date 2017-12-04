var path = require('path');

var reporters = process.env.TRAVIS ? ['progress', 'coverage', 'coveralls'] : ['progress', 'coverage'];
var browsers = process.env.TRAVIS ? ['Chrome_travis_ci'] : ['Chrome'];

module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      'test/react-syncy-frame-specs.js'
    ],
    preprocessors: {
      'test/react-syncy-frame-specs.js': 'webpack'
    },
    webpack: {
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
            exclude: /node_modules|-specs\.js$/,
          }
        ]
      }
    },
    reporters: reporters,
    coverageReporter: {
      type: 'lcov', dir: 'coverage/'
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

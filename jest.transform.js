var babelConfig = require('./config/babel.dev.js')

module.exports = require('babel-jest').createTransformer(babelConfig);

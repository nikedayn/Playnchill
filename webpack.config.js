const path = require('path');

module.exports = {
  mode: 'development',
  entry: './assets/main_page/js/script.js',
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'full.js',
  },
};
const path = require('path');

module.exports = {
  entry: './src/index.js',
  mode: "none", // "production", "development", "none"
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'mylibtmsn',
    libraryTarget: 'umd',
    globalObject: 'this'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.html$/,
        use: ['html-loader']
      }
    ]
  },
  externals: {
    // Define external libraries if needed
  }
};

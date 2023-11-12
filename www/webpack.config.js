const CopyWebpackPlugin = require("copy-webpack-plugin");
const path = require('path');

module.exports = {
  entry: "./bootstrap.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bootstrap.js",
  },
  mode: "development",
  plugins: [
    new CopyWebpackPlugin(
      {
        patterns: [
          'index.html'
        ]
      }
    )
  ],
  experiments: {
    asyncWebAssembly: true,
  },
  module: {
    rules: [
      {
        test: /\.mp3/,
        //test: /\.(mp3|wav|ogg)$/,
        type: 'asset/resource',
        generator: {
          filename: 'assets/audio/[name][ext]'
        }
      },
    ],
  },
};

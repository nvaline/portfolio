var path = require('path');
var SRC_DIR = path.join(__dirname, '/client/src');
var DIST_DIR = path.join(__dirname, '/client/dist');

module.exports = {
  entry: `${SRC_DIR}/index.js`,
  output: {
    filename: 'bundle.js',
    path: DIST_DIR,
  },
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif)$/i, use: 'url-loader',
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(js|jsx)?/,
        exclude: /(node_modules|browser_components)/,
        loader: 'babel-loader',
        options: {
          presets: [
            '@babel/preset-env',
            '@babel/preset-react'
          ],
          plugins: [
            ['@babel/plugin-transform-runtime',
              {
                'regenerator': true
              }
            ]
          ]
        }
      }
    ]
  },
  resolve: {extensions: ["*", ".js", ".jsx"]},
  plugins: [new webpack.HotModuleReplacementPlugin()]
};
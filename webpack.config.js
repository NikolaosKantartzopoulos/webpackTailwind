 const path = require('path');

 module.exports = {
   mode: 'development',
   entry: './src/index.js',
   output: {
     filename: 'bundle.js',
     path: path.resolve(__dirname, 'dist'),
   },
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    open: true,
    compress: true,
    port: 9000,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        include: path.resolve(__dirname, 'src'),
        //include: path.resolve(__dirname, 'src'), why
        use: ['style-loader', 'css-loader', 'post-css'],
      },
    ],
  },
 };

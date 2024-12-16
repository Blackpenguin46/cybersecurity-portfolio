const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // For generating index.html

module.exports = {
  entry: './src/index.tsx', // Entry point of your application
  output: {
    path: path.resolve(__dirname, 'dist'), // Path to output the bundled files
    filename: 'bundle.js', // Name of the output file
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'], // Resolving file extensions for imports
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/, // Handling TypeScript files
        use: 'ts-loader', // Or 'babel-loader' with TypeScript presets
        exclude: /node_modules/,
      },
      {
        test: /\.css$/, // Handling CSS files
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  devtool: 'source-map', // For easier debugging
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'), // Directory where built files are located
    },
    port: 3000, // Port for the dev server
    historyApiFallback: true, // Ensures React Router works correctly
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html', // Path to your HTML template
    }),
  ],
};



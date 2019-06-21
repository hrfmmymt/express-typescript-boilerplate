const path = require('path');
const nodeExternals = require('webpack-node-externals');

const config = {
  entry: './src/index.ts',
  target: 'node',
  externals: [nodeExternals()],
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
          configFile: 'tsconfig.json'
        }
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  plugins: []
};

module.exports = (env, argv) => {
  if (argv.mode !== 'production') {
    console.log('this is development mode.');
  }

  return config;
};

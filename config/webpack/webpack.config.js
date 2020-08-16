const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    // webpack will take the files from ./src/index
    entry: {
        'pop_up': path.resolve(process.cwd(), 'src', 'index.tsx'),
        'content_script': path.resolve(process.cwd(), 'src', 'content_script', 'index.ts')
    },
    mode: 'development',
    // and output it into /dist as bundle.js
    output: {
        path: path.join(process.cwd(), '/dist'),
        filename: '[name].js'
    },
    // adding .ts and .tsx to resolve.extensions will help babel look for .ts and .tsx files to transpile
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    devtool: 'eval-source-map',
    watch: true,
    module: {
        rules: [
            // we use babel-loader to load our jsx and tsx files
            {
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                },
            },
            // css-loader to bundle all the css files into one file and style-loader to add all the styles  inside the style tag of the document
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|jpg|jpeg|gif|ico)$/,
                exclude: /node_modules/,
                use: ['file-loader?name=[name].[ext]'] // ?name=[name].[ext] is only necessary to preserve the original file name
            },
            {
                test: /\.svg$/,
                use: [
                  {
                    loader: "babel-loader"
                  },
                  {
                    loader: "react-svg-loader",
                    options: {
                      jsx: true // true outputs JSX tags
                    }
                  }
                ]
              }
        ]
    },
    plugins: [
        new CopyPlugin({
            patterns: [
              { from: path.resolve(process.cwd(), 'extension'), to: path.resolve(process.cwd(), 'dist') }
            ],
          })
    ]
};
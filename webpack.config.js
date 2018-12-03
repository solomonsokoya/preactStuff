module.exports = {
    devtool: 'source-map',
    entry: ['./src/app'],
    output: {
        path: __dirname + '/dist',
        filename: 'app.js'
    },
    resolve: {
        extensions: ['.js', '.ts', '.tsx'],
        alias: {
          "react": "preact",
          "react-dom": "preact"
        }
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                loaders: ['ts-loader'],
            },
            {
                test: /\.(css|less)$/,
                use: [{
                  loader: 'style-loader' // creates style nodes from JS strings
                }, {
                  loader: 'css-loader' // translates CSS into CommonJS
                }, {
                  loader: 'less-loader' // compiles Less to CSS
                }]
                  // compiles Less to CSS
              }
        ]
    }
};

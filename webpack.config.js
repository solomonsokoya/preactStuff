module.exports = {
    devtool: 'source-map',
    entry: ['./src/app'],
    output: {
        path: __dirname + '/dist',
        filename: 'app.js'
    },
    resolve: {
        extensions: ['.js', '.ts', '.tsx']
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                loaders: ['ts-loader']
            }
        ]
    }
};

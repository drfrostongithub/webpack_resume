const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    // Where files should be sent once they are bundled
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'index.js'
    },
    // webpack 5 comes with devserver whic loads in dev mode
    devServer: {
        port: 3000,
        watchContentBase: true
    },
    // Rules of how webpack will take our files, complie & bundle them for the browser 
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /nodeModules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.(css|s[ac]ss)$/i,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            }
        ]
    },
    plugins: [new HtmlWebpackPlugin({
        template: './src/index.html'
    })],
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.jsx'],
    }
}
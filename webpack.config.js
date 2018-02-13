const path = require('path');

module.exports = {
    devtool: 'ceap-module-source-map',
    entry: './src/App.jsx',
    output: { 
        path: path.resolve(__dirname, 'public/'),
        filename : 'js/bundle.js'
    },
    module: {
        rules: [
            {test: /\.jsx$/, use: 'babel-loader'},
            {test: /(\.scss|\.css)$/, use: [{loader: 'style-loader'}, {loader: 'css-loader'}, {loader: 'sass-loader'}]}
        ]
    },
    devServer: {
        inline: true,
        contentBase: './public',
        port: 3000
    },
    watch: true
};

const path = require('path');
module.exports = {
    entry: {
        index: './index.js'
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve('./'),
    },
    module: {
        rules: [{
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            },
            test: /\.js$/
        }]
    }
};
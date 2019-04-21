## Webpack 打包Javascript與將ES6編譯成ES5範例
相關參考可以點此 [教學連結](https://medium.com/@tcssh611503/%E5%9C%A8webpack%E8%A8%AD%E5%AE%9Aloader%E4%BE%86%E5%B0%87es6%E7%B7%A8%E8%AD%AF%E6%88%90es5%E7%9A%84%E8%AA%9E%E6%B3%95-99618b85d72a)

- 開發環境
    - Nodejs:  https://nodejs.org/en/
    - VSCode: https://code.visualstudio.com/#alt-downloads
---
webpack.config.js
```javascript
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

```
package.json
```json
{
  {
  "name": "hellow_webpack_test",
  "version": "1.0.0",
  "description": "webpack test project",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "york",
  "license": "ISC",
  "devDependencies": {
    "@babel/core": "^7.4.3",
    "@babel/preset-env": "^7.4.3",
    "babel-core": "^6.26.3",
    "babel-loader": "^8.0.5",
    "babel-preset-env": "^1.7.0",
    "webpack": "^4.30.0"
  },
  "dependencies": {
    "webpack-cli": "^3.3.0"
  }
}
```

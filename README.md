## 依赖

```shell
# 开发
npm i antd react-router react-router-dom redux react-redux redux-promise -S

# 构建
npm i react-app-rewired customize-cra eslint-plugin-prettier babel-plugin-import node-sass less less-loader -D

```

## 配置复写

```js
const path = require('path')
const {
  override,
  useBabelRc,
  useEslintRc,
  addDecoratorsLegacy,
  addWebpackAlias,
  addLessLoader,
} = require('customize-cra')
const config = override(
  addDecoratorsLegacy(),
  useBabelRc(),
  useEslintRc(),
  addLessLoader({ javascriptEnabled: true }),
  addWebpackAlias({
    ['@']: path.resolve(__dirname, 'src/'),
  }),
)

module.exports = config

```

## script 复写

```js
"scripts": {
  "fix": "eslint --fix --ext .js,.jsx src/",
  "start": "react-app-rewired start",
  "build": "react-app-rewired build",
  "test": "react-app-rewired test",
  "eject": "react-scripts eject"
},

```

## 环境注入

```shell
PUBLIC_URL=http://cdn.com npm run build
```

const path = require('path')
const {
  override,
  useBabelRc,
  useEslintRc,
  addDecoratorsLegacy,
  addWebpackAlias,
  addLessLoader,
  fixBabelImports,
} = require('customize-cra')
const config = override(
  addDecoratorsLegacy(),
  useBabelRc(),
  useEslintRc(),
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: 'css',
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: { '@primary-color': '#1DA57A' },
  }),
  addWebpackAlias({
    ['@']: path.resolve(__dirname, 'src/'),
  }),
)

module.exports = config

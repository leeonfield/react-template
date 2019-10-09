const path = require('path')
const {
  override,
  useBabelRc,
  useEslintRc,
  addDecoratorsLegacy,
  addWebpackAlias,
} = require('customize-cra')
const config = override(
  addDecoratorsLegacy(),
  useBabelRc(),
  useEslintRc(),
  addWebpackAlias({
    ['@']: path.resolve(__dirname, 'src/'),
  }),
)

module.exports = config

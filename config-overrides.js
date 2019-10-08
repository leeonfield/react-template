const {
  override,
  useBabelRc,
  useEslintRc,
  addDecoratorsLegacy
} = require('customize-cra')
const config = override(addDecoratorsLegacy(), useBabelRc(), useEslintRc())

module.exports = config
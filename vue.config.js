const { defineConfig } = require('@vue/cli-service')
const config = require('@vue/cli-service/webpack.config.js')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false
})
config.devServer = {
  disableHostCheck: true
}
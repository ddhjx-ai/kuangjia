const path = require('path')
module.exports = {
  lintOnSave: false,
  css: {
    loaderOptions: {
      sass: {
        // 向所有 Sass 样式传入共享的全局变量
        prependData: '@import "@/assets/styles/_vars.scss"; @import "~element-ui/packages/theme-chalk/src/common/var";'
      }
    }
  },
  // 别名
  chainWebpack: config => {
    config.resolve.alias
      .set('service', path.resolve(__dirname, './src/service'))
      // .set('utils', path.resolve(__dirname, './src/utils'))
  },
  devServer: {
    port: 3303,
    open: true/* ,
    proxy: {
      // detail: https://cli.vuejs.org/config/#devserver-proxy
      [process.env.VUE_APP_BASE_API]: {
        target: 'http://jsonplaceholder.typicode.com',
        changeOrigin: true,
        pathRewrite: {
          ['^' + process.env.VUE_APP_BASE_API]: ''
        }
      }
    } */
  }
}

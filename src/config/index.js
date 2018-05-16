// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')

module.exports = {
  build: {
    env: require('./prod.env'),
    index: path.resolve(__dirname, '../index.html'),
    assetsRoot: path.resolve(__dirname, '../'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '',
    productionSourceMap: true,
    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css']
  },
  dev: {
    env: require('./dev.env'),
    port: 8085,
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    // 地址映射表，可以通过设置将复杂的url简化，还可以解决跨域问题
    proxyTable: {
        '/admin': {
            target: 'http://duanhui.qianchengwl.cn',
            changeOrigin: true,
            pathRewrite: {
                '^/admin': '/'
            } 
        }
    },
    // CSS Sourcemaps off by default because relative paths are "buggy"
    // with this option, according to the CSS-Loader README
    // (https://github.com/webpack/css-loader#sourcemaps)
    // In our experience, they generally work as expected,
    // just be aware of this issue when enabling this option.
    cssSourceMap: false
  }
}
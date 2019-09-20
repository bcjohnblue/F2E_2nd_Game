const webpack = require('webpack');
const path = require('path');

function resolve(dir) {
  return path.join(__dirname, '.', dir);
}

// const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  css: {
    loaderOptions: {
      // pass options to sass-loader
      sass: {
        // @/ is an alias to src/
        // so this assumes you have a file named `src/variables.scss`
        // data: `@import "styles/index.sass";`
      }
    }
  },
  configureWebpack: {
    plugins: [
      // new UglifyJsPlugin({
      //   uglifyOptions: {
      //     compress: {
      //       drop_console: true
      //     }
      //   }
      // })

      // phaser 3 載入 .svg 設定
      new webpack.DefinePlugin({
        CANVAS_RENDERER: JSON.stringify(true),
        WEBGL_RENDERER: JSON.stringify(true)
      })
    ]
  },
  chainWebpack: config => {
    // config.module.rules.delete('svg'); // 重点:删除默认配置中处理svg,
    // config.module
    //   .rule('svg-sprite-loader')
    //   .test(/\.svg$/)
    //   .include.add(resolve('src/icons/svg')) // 处理svg目录
    //   .end()
    //   .use('svg-sprite-loader')
    //   .loader('svg-sprite-loader')
    //   .options({
    //     symbolId: 'icon-[name]'
    //   });
  }
};

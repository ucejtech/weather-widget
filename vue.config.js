module.exports = {
  css: {
    loaderOptions: {
      scss: {
        prependData: `@import "~@/styles/global.scss";`
      }
    }
  },
  chainWebpack: config => {
    config.module.rules.delete("svg");
  },
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.svg$/,
          loader: "vue-svg-loader",
          options: {
            svgo: false
          }
        }
      ]
    }
  }
};

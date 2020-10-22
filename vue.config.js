const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  configureWebpack: (config) => {
    config.resolve = {
      extensions: ['.js', '.json', '.vue'],
      alias: {
        '@': path.resolve(__dirname, 'src'),
        'components': path.resolve(__dirname, 'src/components'),
        'assets': path.resolve(__dirname, 'src/assets'),
        'views': path.resolve(__dirname, 'src/views'),
      }
    }
  }
}
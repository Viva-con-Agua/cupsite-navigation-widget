module.exports = {
    runtimeCompiler: true,
    css: {
        extract: false,
    },
    productionSourceMap: false,
    configureWebpack: {
        optimization: {
            splitChunks: false
        },
        output: {
            filename: 'navigation-widget.js'
        }
    },
    publicPath: process.env.NODE_ENV === 'production'
        ? '/widget/cupsite-navigation-widget/default'
        : '/'
}

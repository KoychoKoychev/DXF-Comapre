const path = require('path')

module.exports =  {
    mode: 'development',
    devtool: 'eval-source-map',
    devServer: {
        static: {
            directory: path.join(__dirname, ''),
        },
        hot: true,
    },
}
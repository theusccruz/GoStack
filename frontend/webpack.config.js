const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, 'src', 'index.js'), // arquivo de entrada
    output: {
        path: path.resolve(__dirname, 'public'), // arquivo convertido
        filename: 'bundle.js'
    },
    devServer: {
        // passa pro webpack o caminho dos arquivos públicos da aplicação
        // assim o webpack server vai monitorar modificações
        contentBase: path.resolve(__dirname, 'public'),
    },
    module: { // tratando os loaders
        rules: [
            { // usando o babel-loader para arquivos js
                test: /\.js$/,
                exclude: /node_modules/, // arquivos que vieram pelo node_modules não passam pelo webpack
                use: {
                    loader: 'babel-loader'
                },
                test: /\.css$/,    
            }
        ]
    }
}
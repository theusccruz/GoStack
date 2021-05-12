module.exports = {
    presets: [
        '@babel/preset-env',// converte funcionalidades de acordo com o ambiente
        '@babel/preset-react'// converte funcionalidades do react
    ],
    plugins: [
        // permite que o babel entenda recursos mais novos como async e await
        '@babel/plugin-transform-runtime'
    ]
};
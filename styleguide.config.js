const { createConfig, babel, postcss } = require('webpack-blocks')

module.exports = {
    sections: [
        {
            name: 'Introduction',
            content: 'styleguidist/introduction.md'
        },
        {
            name: 'Documentation',
            sections: [
                {
                    name: 'Installation',
                    content: 'styleguidist/installation.md',
                    description: 'The description for the installation section'
                },
                {
                    name: 'Configuration',
                    content: 'styleguidist/configuration.md'
                }
            ]
        },
        {
            name: 'UI Components',
            content: 'styleguidist/ui.md',
            components: 'src/components/**/*.js',
            exampleMode: 'collapse', // 'hide' | 'collapse' | 'expand'
            usageMode: 'expand' // 'hide' | 'collapse' | 'expand'
        }
    ],
    webpackConfig: createConfig([babel(), postcss()]),
    styleguideDir:"docs"
}
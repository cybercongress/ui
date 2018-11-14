module.exports = {
    plugins: [
        // your custom plugins
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    { loader: 'style-loader' },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            localIdentName: '[name]_[local]',
                        },
                    },
                ],
            },
        ],
    },
};

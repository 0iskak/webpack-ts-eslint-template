const path = require("path");
const HTMLPlugin = require('html-webpack-plugin');

module.exports = ({ mode }) => {
    const src = path.resolve(__dirname, 'src');

    return {
        entry: path.resolve(src, 'index.ts'),
        mode: mode ?? 'development',
        devtool: "inline-source-map",
        output: {
            clean: true
        },
        resolve: {
            extensions: [".js", ".ts"]
        },
        plugins: [
            new HTMLPlugin({
                template: path.resolve(src, 'index.html')
            })
        ],
        module: {
            rules: [
                {
                    test: /\.css$/,
                    use: [
                        "style-loader",
                        "css-loader"
                    ]
                },
                {
                    test: /\.s[ac]ss$/,
                    use: [
                        "style-loader",
                        "css-loader",
                        "sass-loader"
                    ]
                },
                {
                    test: /\.ts$/,
                    loader: "ts-loader"
                },
            ]
        }
    }
}
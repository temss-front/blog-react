import ReactRefreshTypeScript from "react-refresh-typescript";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export const getTypescriptLoader = (isDevelopment: boolean) => ({
    test: /\.[jt]sx?$/,
    use: [
        {
            loader: 'ts-loader',
            options: {
                getCustomTransformers: () => ({
                    before: [isDevelopment && ReactRefreshTypeScript()].filter(Boolean),
                }),
                transpileOnly: isDevelopment,
            },
        },
    ],
    exclude: /node_modules/,
});

 export const babelLoader = {
    test: /\.(js|jsx|tsx)$/,
    exclude: /node_modules/,
    use: {
        loader: 'babel-loader',
        options: {
            presets: ['@babel/preset-env'],
        },
    },
};

export const svgLoader = {
    test: /\.svg$/,
    use: ['@svgr/webpack'],
};

export const fileLoader = {
    test: /\.(png|jpe?g|gif|woff2|woff)$/i,
    use: [
        {
            loader: 'file-loader',
        },
    ],
};

export const getStyleLoader = (isDevelopment: boolean) => ({
    test: /\.s[ac]ss$/i,
    use: [
        isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
        // Translates CSS into CommonJS
        {
            loader: 'css-loader',
            options: {
                modules: {
                    auto: /\w+\.module\.s[ac]ss/,
                    localIdentName: isDevelopment
                        ? '[name]__[local]--[hash:base64:5]'
                        : '[hash:base64:8]',
                },

            },

        },
        // Compiles Sass to CSS
        'sass-loader',
    ],
})
import webpack from "webpack";
import {BuildOptions} from "./types/config";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import ReactRefreshTypeScript from 'react-refresh-typescript';

export function buildLoaders({isDevelopment}: BuildOptions): webpack.RuleSetRule[] {

    const typescriptLoader = {
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
            }
        ],
        exclude: /node_modules/,
    }

    const babelLoader = {
        test: /\.(js|jsx|tsx)$/,
        exclude: /node_modules/,
        use: {
            loader: "babel-loader",
            options: {
                presets: ['@babel/preset-env'],
                plugins: [
                    [
                        'i18next-extract',
                        {
                            locales: ['ru', 'en'],
                            keyAsDefaultValue: true,
                            outputPath: 'public/locales/{{locale}}/translation.json',
                        }
                    ]
                ]
            }
        }
    }

    const svgLoader = {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    }

    const fileLoader = {
        test: /\.(png|jpe?g|gif|woff2|woff)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    }

    const styleLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            isDevelopment ? "style-loader" : MiniCssExtractPlugin.loader,
            // Translates CSS into CommonJS
            {
                loader: "css-loader",
                options: {
                    modules: {
                        auto: /\w+\.module\.s[ac]ss/,
                        localIdentName: isDevelopment
                            ? '[name]__[local]--[hash:base64:5]'
                            : '[hash:base64:8]'
                    },

                }

            },
            // Compiles Sass to CSS
            "sass-loader",
        ],
    }

    return [
        fileLoader,
        svgLoader,
        babelLoader,
        typescriptLoader,
        styleLoader
    ]
}
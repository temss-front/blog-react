import webpack from "webpack";
import {BuildOptions} from "./types/config";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {

    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }

    const styleLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            options.isDevelopment ? "style-loader" : MiniCssExtractPlugin.loader,
            // Translates CSS into CommonJS
            {
                loader: "css-loader",
                options: {
                    modules: {
                        auto: /\w+\.module\.s[ac]ss/,
                        localIdentName: options.isDevelopment
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
        typescriptLoader, styleLoader
    ]
}
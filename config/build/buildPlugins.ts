import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import {BuildOptions} from "./types/config";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import ReactRefreshPlugin from "@pmmmwh/react-refresh-webpack-plugin";

export function buildPlugins({paths, isDevelopment}: BuildOptions): webpack.WebpackPluginInstance[] {

    const plugins:webpack.WebpackPluginInstance[] = [
        new webpack.ProgressPlugin(),
        new HtmlWebpackPlugin({template: paths.html}),
        new MiniCssExtractPlugin({filename: 'css/[name].[contenthash:8].css'}),
        new webpack.DefinePlugin({
            __IS_DEV__: JSON.stringify(isDevelopment),
        })
    ]

    if(isDevelopment) {
        plugins.push(new webpack.HotModuleReplacementPlugin())
        plugins.push(new ReactRefreshPlugin)
    }

    return plugins
}
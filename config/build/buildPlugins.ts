import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import ReactRefreshPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import { BuildOptions } from './types/config';

export function buildPlugins(
    { paths, isDevelopment }: BuildOptions,
): webpack.WebpackPluginInstance[] {
    const plugins:webpack.WebpackPluginInstance[] = [
        new webpack.ProgressPlugin(),
        new HtmlWebpackPlugin({ template: paths.html }),
        new MiniCssExtractPlugin({ filename: 'css/[name].[contenthash:8].css' }),
        new webpack.DefinePlugin({
            __IS_DEV__: JSON.stringify(isDevelopment),
        }),
        new BundleAnalyzerPlugin({openAnalyzer: false}),
    ];

    if (isDevelopment) {
        plugins.push(new webpack.HotModuleReplacementPlugin());
        plugins.push(new ReactRefreshPlugin());
    }

    return plugins;
}

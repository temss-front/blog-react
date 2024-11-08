import webpack from 'webpack';
import {BuildOptions} from './types/config';
import {babelLoader, fileLoader, getStyleLoader, getTypescriptLoader, svgLoader} from "../loaders";

export function buildLoaders({ isDevelopment }: BuildOptions): webpack.RuleSetRule[] {


    return [
        fileLoader,
        svgLoader,
        babelLoader,
        getTypescriptLoader(isDevelopment),
        getStyleLoader(isDevelopment),
    ];
}

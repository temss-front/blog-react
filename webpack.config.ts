import path from "path";
import webpack from 'webpack';

import {buildWebpackConfig} from "./config/build/buildWebpackConfig";
import {BuildEnv, BuildPaths} from "./config/build/types/config";


export default (env: BuildEnv) => {
    const {mode = 'development', port} = env

    const paths: BuildPaths = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        build: path.resolve(__dirname, 'dist'),
        html: path.resolve(__dirname, 'public', 'index.html')
    }

    const config: webpack.Configuration = buildWebpackConfig({
        mode: mode,
        paths,
        isDevelopment: mode === 'development',
        port: port || 3000
    });

    return config
}
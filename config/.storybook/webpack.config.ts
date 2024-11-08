import webpack from "webpack";
import path from "path";
import {getStyleLoader} from "../loaders";

export default ({ config }: { config: webpack.Configuration }) => {

    config.resolve.modules.push(path.resolve(__dirname, "..", '..', 'src'));
    config.resolve.alias = {
        ...config.resolve.alias,
        "@": path.resolve(__dirname, "..", "..", "src")
    }
    config.resolve.extensions.push(".ts", ".tsx", ".js");
    config.module.rules.push(getStyleLoader(true))

    return config
}
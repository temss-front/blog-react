export type Mode = 'development' | 'production'

export interface BuildPaths {
    entry: string;
    build: string;
    html: string;
}

export interface BuildOptions {
    port: number;
    mode: Mode;
    paths: BuildPaths;
    isDevelopment: boolean;
}

export interface BuildEnv {
    mode: Mode;
    port: number;
}
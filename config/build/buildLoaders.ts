import webpack from "webpack";
import { BuildOptions } from "./types/config";
import {buildCssLoader} from './loaders/buildCssLoader';


export function buildLoaders({ isDev }: BuildOptions): webpack.RuleSetRule[] {
    const svgLoader = {
        test: /\.svg$/,
        use: ["@svgr/webpack"],
    };

    const babelLoader = {
        test: /\.(js|jsx|tsx)$/, 
        exclude: /node_nodules/, 
        use: { 
            loader: "babel-loader", 
            options: {
                presets: ['@babel/preset-env', '@babel/preset-typescript'],
                plugins: [
                    [ "i18next-extract", {
                        locales: ['de', 'en'],
                        keyAsDefaultValue: true,
                    }]
                ]
            }
        }};


    const fileLoader = {
        test: /\.(png|jpe?g|gif|woff2|woff)$/i,
        use: [
            {
                loader: "file-loader",
            },
        ],
    };

    const cssLoader = buildCssLoader(isDev);

    const typescriptLoader = {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
    };

    return [babelLoader,typescriptLoader, cssLoader, svgLoader, fileLoader];
}

import { BuildOptions } from "../types/config";

export function buildBabelLoader({isDev}: BuildOptions) {

    return {
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
                    }],
                    isDev && require.resolve('react-refresh/babel'),
                ].filter(Boolean),
            }
        }};

}
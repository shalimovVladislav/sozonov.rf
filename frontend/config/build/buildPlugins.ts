import webpack, { Configuration, /*DefinePlugin*/ } from "webpack";
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
//import CopyPlugin from 'copy-webpack-plugin';
import path from "path";
import { BuildOptions } from './types/types';


export function buildPlugins({ mode, paths, analyzer }: BuildOptions): Configuration['plugins'] {
    const isDev =  mode === 'development';
    const isProd = mode === 'production';

    const plugins: Configuration['plugins'] = [
        new HtmlWebpackPlugin( { title: 'МСНАБ', template: paths.html, favicon: path.resolve(paths.public, 'favicon.png'), meta: { viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no' } }),
        //new DefinePlugin({}),
        //new CopyPlugin({}),
    ];

    if(isDev) {
        plugins.push(new webpack.ProgressPlugin());
        plugins.push(new ForkTsCheckerWebpackPlugin());
        plugins.push(new ReactRefreshWebpackPlugin());
    }

    if(isProd) {
        plugins.push(
            new MiniCssExtractPlugin({
                filename: 'css/[name].[contenthash:8].css',
                chunkFilename: 'css/[name].[contenthash:8].css',
            })
        );
    }

    if(analyzer) {
        plugins.push(new BundleAnalyzerPlugin());
    }

    return plugins;       
}
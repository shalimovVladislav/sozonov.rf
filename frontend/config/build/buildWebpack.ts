import webpack from 'webpack';
import { buildPlugins } from './buildPlugins';
import { buildLoaders } from './buildLoaders';
import { buildResolvers } from './buildResolvers';
import { buildDevServer } from './buildDevServer';
import { BuildOptions } from './types/types';

export function buildWebpack(options: BuildOptions): webpack.Configuration {
    const {mode, paths} = options;
    const isDev =  mode === 'development';

    return {
        mode: options.mode,
        entry: paths.entry,
        output: {
          path: paths.output,
          filename: '[name].[contenthash].js',
          clean: true,
        },
        plugins: buildPlugins(options),
        module: {
          rules: buildLoaders(options),
        },
        resolve: buildResolvers(options),
        devtool: isDev && 'inline-source-map',
        devServer: isDev ? buildDevServer(options) : undefined,
    };
}
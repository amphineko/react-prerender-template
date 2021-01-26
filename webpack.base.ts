import { CleanWebpackPlugin } from 'clean-webpack-plugin'
import path from 'path'
import { Configuration } from 'webpack'

export default function (env: any, argv: { mode: string }): Configuration {
    return {
        cache: {
            cacheDirectory: path.resolve(__dirname, 'cache'),
            type: 'filesystem'
        },

        context: path.resolve(__dirname, 'src'),

        module: {
            rules: [
                {
                    test: /.tsx?$/,
                    use: [
                        {
                            loader: 'babel-loader',
                            options: {
                                presets: [
                                    '@babel/preset-react'
                                ]
                            }
                        }, {
                            loader: 'ts-loader',
                            options: {
                                configFile: path.resolve(__dirname, 'tsconfig.json')
                            }
                        }
                    ]
                }
            ]
        },

        plugins: [
            new CleanWebpackPlugin()
        ],

        resolve: {
            extensions: ['.js', '.jsx', '.ts', '.tsx']
        }
    }
}

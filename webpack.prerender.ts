import HtmlWebpackPlugin from 'html-webpack-plugin'
import path from 'path'
import { Configuration } from 'webpack'
import merge from 'webpack-merge'

import createBaseConfig from './webpack.base'

export default function (env: any, argv: { mode: string }): Configuration {
    const base = createBaseConfig(env, argv)
    return merge(base, {
        entry: {
            hydrate: './hydrate.tsx'
        },

        output: {
            path: path.resolve(__dirname, 'publish')
        },

        plugins: [
            new HtmlWebpackPlugin({
                inject: true,
                meta: {
                    charset: 'utf-8'
                },
                templateContent: () => {
                    // eslint-disable-next-line @typescript-eslint/no-var-requires
                    const prerender = require('./prerender-stage/prerender.js')
                    const body = prerender.render() as string
                    return `<html><body>${body}</body></html>`
                }
            })
        ]
    })
}

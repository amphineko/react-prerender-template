import path from 'path'
import { Configuration } from 'webpack'
import merge from 'webpack-merge'

import createBaseConfig from './webpack.base'

export default function (env: any, argv: { mode: string }): Configuration {
    const base = createBaseConfig(env, argv)
    return merge(base, {
        cache: {
            name: 'prerender-stage',
            type: 'filesystem'
        },

        entry: {
            prerender: {
                filename: 'prerender.js',
                import: './prerender.tsx'
            }
        },

        output: {
            libraryTarget: 'commonjs2',
            path: path.resolve(__dirname, 'prerender-stage')
        },

        target: 'node'
    })
}

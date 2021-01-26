import React from 'react'
import { renderToString } from 'react-dom/server'

import { Application } from './app'

export function render(): string {
    return renderToString(<Application />)
}

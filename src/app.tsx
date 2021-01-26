import React, { useEffect, useState } from 'react'

export function DynamicLabel(props: {
    initial: string
    update: string
}): JSX.Element {
    const { initial, update } = props

    const [content, setContent] = useState(initial)

    useEffect(() => setContent(update), [update])

    return <div>{content}</div>
}

export function Application(): JSX.Element {
    return <div>
        <DynamicLabel initial="Initial value" update="Updated value" />
    </div>
}

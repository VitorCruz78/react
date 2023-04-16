import { useState } from "react"

export default function ConditionalRender() {
    const [x] = useState(true)

    return (
        <div>
            <h1>Isso é exibido?</h1>
            {x ? <p>Se x for true, sim!</p> : <p>x é falso</p>}
        </div>
    )
}
import React, { useState } from "react";

export default function ListRender() {
    const [list] = useState(["Vitor", "Picolo"])
    const [users] = useState([
        { id: 1295847, name: "Vitor", age: 16 },
        { id: 817936, name: "Luiz", age: 64 },
        { id: 8771553, name: "Picolo", age: 27 }
    ])

    const [showId, setShowId] = useState(false)

    return (
        <div>
            <ul>
                {list.map((item, id) => {
                    return <li key={id}>{item}</li>
                })}
            </ul>
            <ul>
                {users.map((items) => {
                    return <div>
                        <li key={items.id}>{items.name} - {items.age}</li>
                        {
                            showId &&
                            <li>{items.id}</li>
                        }
                    </div>
                })}
                {
                    showId ?
                        <button onClick={() => setShowId(false)}>Voltar</button>
                        :
                        <button onClick={() => setShowId(true)}>Cancelar</button>
                }
            </ul>
        </div>
    )
}
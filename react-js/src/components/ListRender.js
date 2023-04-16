import React, { useState } from "react";

export default function ListRender() {
    const [list] = useState(["Vitor", "Picolo"])
    const [users, setUsers] = useState([
        { id: 1, name: "Vitor", age: 16 },
        { id: 2, name: "Luiz", age: 64 },
        { id: 3, name: "Picolo", age: 27 }
    ])

    const [showId, setShowId] = useState(false)

    const deleteRandom = () => {
        const randomNumber = Math.floor(Math.random() * 4);
        //Math. floor(x) retorna o menor número inteiro dentre o número "x"
        // Math.random = método estático retorna um número pseudoaleatório de ponto flutuante que é maior ou igual a 0 e menor que 1

        setUsers((prevUsers) => {
            return prevUsers.filter((user) => randomNumber !== user.id)
        })
    };

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
                        <button onClick={() => setShowId(true)}>Ver id's</button>
                }
            </ul>
            <button onClick={deleteRandom}>Delete random user</button>
        </div>
    )
}
import React from "react";

export default function ExecuteFunction({ myFunction }) {
    return (
        <div>
            <button onClick={myFunction}>Clique aqui</button>
            {/*A função deve ser executada aonde o componente pai está sendo importado*/}
        </div>
    )
}
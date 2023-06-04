import React, { useState } from 'react';
import './MyForm.css'

function MyForm() {

    // 3 - gerenciamento de dados
    const [name, setName] = useState()
    const [email, setEmail] = useState()

    const handleName = (e) => {
        setName(e.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log("Enviando o formulário")
        console.log(name, email)
    }

    return (
        <div>
            {/* 5 - envio de form */}
            {/* 1 - criação de form */}
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Nome:</label>
                    <input type="text" name="name" placeholder="Digite o seu nome" onChange={(handleName)}></input>
                </div>
                {/* 2 - label envolvendo o input */}
                <label>
                    <span>E-mail</span>
                    {/* 4 - simplificação de manipulação de state */}
                    <input type="email" name="email" placeholder="Digite o seu e-mail" onChange={(e) => setEmail(e.target.value)}></input>
                </label>
                <input type="submit" value="Enviar"></input>
            </form>
        </div>
    );
}

export default MyForm;
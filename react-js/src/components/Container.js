import React from "react";

export default function Container({ children, value }) {
    return (
        <div>
            <h2>Este é o título do container</h2>
            {children}
            <p>O valor é {value}</p>
        </div>
    )
}
import React from "react";

export default function CarDetails({ brand, km, color }) {
    return (
        <div>
            <h2>Detalhes do carro:</h2>
            <ul>
                <li>Marca do carro: {brand}</li>
                <li>Km: {km}</li>
                <li>Cor do carro: {color}</li>
            </ul>
        </div>
    )
}
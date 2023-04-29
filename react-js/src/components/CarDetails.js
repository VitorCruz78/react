import React from "react";

export default function CarDetails({ brand, km, color, newCar }) {
    return (
        <div>
            <h2>Detalhes do carro:</h2>
            <ul>
                {
                    newCar ? <li>Este produto é novo!</li> : <li>Este produto é velho!</li>
                }
                <li>Marca do carro: {brand}</li>
                <li>Km: {km}</li>
                <li>Cor do carro: {color}</li>
            </ul>
        </div>
    )
}
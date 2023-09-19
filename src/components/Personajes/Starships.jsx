import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import "../../css/Detalles.css";

export const Starships = ({url}) => {
    const [ data4, setData4 ] = useState([]);

    useEffect(() => {
        fetch(url).then(res => res.json()).then(data4 => setData4(data4))
    }, [url])

    return (
        <div className="DetallesContainer">
            <Card style={{ width: '21rem', height: '11rem' }}>
                <Card.Body>
                    <Card.Text>
                        Nombre: <span>{data4.name}</span>
                    </Card.Text>
                    <Card.Text>
                        Modelo: <span>{data4.model}</span>
                    </Card.Text>
                    <Card.Text>
                        Fabricante: <span>{data4.manufacturer}</span>
                    </Card.Text>
                    <Card.Text>
                        Costo en Créditos: <span>{data4.cost_in_credits}</span>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}
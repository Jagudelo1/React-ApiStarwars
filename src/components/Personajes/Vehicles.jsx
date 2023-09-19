import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import "../../css/Detalles.css";

export const Vehicles = ({url}) => {
    const [ data3, setData3 ] = useState([]);

    useEffect(() => {
        fetch(url).then(res => res.json()).then(data3 => setData3(data3))
    }, [url])

    return(
        <div className="DetallesContainer">
            <Card style={{ width: '21rem'}}>
                <Card.Body>
                    <Card.Text>
                        Nombre: <span>{data3.name}</span>
                    </Card.Text>
                    <Card.Text>
                        Modelo: <span>{data3.model}</span>
                    </Card.Text>
                    <Card.Text>
                        Pasajeros: <span>{data3.passengers}</span>
                    </Card.Text>
                    <Card.Text>
                        Capacidad Máxima: <span>{data3.cargo_capacity}</span>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}
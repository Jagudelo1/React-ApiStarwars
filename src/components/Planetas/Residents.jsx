import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import "../../css/Detalles.css";

export const Residents = ({url}) => {
    const [ data1, setData1 ] = useState([]);

    useEffect(() => {
        fetch(url).then(res => res.json()).then(data1 => setData1(data1))
    },[url]);

    return(
        <div className="DetallesContainer">
            <Card style={{ width: '21rem'}}>
                <Card.Body>
                    <Card.Text>
                        Nombre: <span>{data1.name}</span>
                    </Card.Text>
                    <Card.Text>
                        Altura: <span>{data1.height}</span>
                    </Card.Text>
                    <Card.Text>
                        Masa: <span>{data1.mass}</span>
                    </Card.Text>
                    <Card.Text>
                        Color de Cabello: <span>{data1.hair_color}</span>
                    </Card.Text>
                    <Card.Text>
                        Color de Piel: <span>{data1.skin_color}</span>
                    </Card.Text>
                    <Card.Text>
                        Color de Ojos: <span>{data1.eye_color}</span>
                    </Card.Text>
                    <Card.Text>
                        Cumpleaños: <span>{data1.birth_year}</span>
                    </Card.Text>
                    <Card.Text>
                        Genero: <span>{data1.gender}</span>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}
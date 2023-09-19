import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import "../../css/Detalles.css";

export const Species = ({url}) => {
    const [ data2, setData2 ] = useState([])

    useEffect(() => {
        fetch(url).then(res => res.json()).then(data2 => setData2(data2))
    }, [url])
    
    return(
        <div className="DetallesContainer">
            <Card style={{ width: '21rem'}}>
                <Card.Body>
                    <Card.Text>
                        Nombre: <span>{data2.name}</span>
                    </Card.Text>
                    <Card.Text>
                        Clasificación: <span>{data2.classification}</span>
                    </Card.Text>
                    <Card.Text>
                        Designación: <span>{data2.designation}</span>
                    </Card.Text>
                    <Card.Text>
                        Altura Media: <span>{data2.average_height}</span>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

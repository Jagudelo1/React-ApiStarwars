import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import "../../css/Detalles.css";

export const Films = ({url}) => {
    const [ data1, setData1 ] =  useState([]);

    useEffect(() => {
        fetch(url).then(res => res.json()).then(data1 => setData1(data1))
    },[url]);

    return(
        <div className="DetallesContainer">
            <Card style={{ width: '21rem'}}>
                <Card.Body>
                    <Card.Text>
                        Creado: <span>{data1.created}</span>
                    </Card.Text>
                    <Card.Text>
                        Director: <span>{data1.director}</span>
                    </Card.Text>
                    <Card.Text>
                        Editado: <span>{data1.edited}</span>
                    </Card.Text>
                    <Card.Text>
                        Episodio: <span>{data1.episode_id}</span>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}
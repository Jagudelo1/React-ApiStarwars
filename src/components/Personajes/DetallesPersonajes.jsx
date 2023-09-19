import React, { useEffect, useState } from "react";
import { NavbarApp } from "../NavbarApp/NavbarApp";
import { FooterApp } from "../FooterApp/FooterApp";
import { FaReply } from 'react-icons/fa';
import { Link, useParams } from 'react-router-dom';
import { idPerson } from "../Hooks/FuncionPerson";
import Card from 'react-bootstrap/Card';
import Personaje from "../../Img/Img1.jpg"
import "../../css/Detalles.css";
import { Films } from "./Films";

export function DetallesPersonaje () {
    const [ detalleP, setDetalleP ] = useState([]);
    
    const idParamsPerson = useParams();
    const person = idPerson(idParamsPerson.name);

    useEffect(() => {
        person.then(res => setDetalleP(res))
    }, [person]);

    return(
        <>
            <NavbarApp/>
            <div className="Button_Atras">
                <Link to="/Personajes">
                    <FaReply size={30}></FaReply>
                </Link>
            </div>
            <div className="DetallesP">
                <Card style={{ width: '20rem' }}>
                    <Card.Img variant="top" src={Personaje} />
                    <Card.Title>{detalleP.name}</Card.Title>
                    <Card.Body className="Content_Text">
                        <Card.Text>Nombre: <span>{detalleP.name}</span></Card.Text>
                        <Card.Text>Altura: <span>{detalleP.height}</span></Card.Text>
                        <Card.Text>Masa: <span>{detalleP.mass}</span></Card.Text>
                        <Card.Text>Color de Pelo: <span>{detalleP.hair_color}</span></Card.Text>
                        <Card.Text>Color de Piel: <span>{detalleP.skin_color}</span></Card.Text>
                        <Card.Text>Color de Ojos: <span>{detalleP.eye_color}</span></Card.Text>
                        <Card.Text>Cumpleaños:  <span>{detalleP.birth_year}</span></Card.Text>
                        <Card.Text>Genero: <span>{detalleP.gender}</span></Card.Text>
                    </Card.Body>
                </Card>
            </div>
            <div className="Informacion_Detalles">
                <h4>Peliculas <hr/></h4>
                <div className="InfoDetalle">
                    {
                        detalleP?.films?.map((item1, index1) => {
                            return <Films url={item1} key={index1}/>
                        })
                    }
                </div>

                <h4>Naves <hr/></h4>
                <div className="InfoDetalle">
                    {
                        detalleP?.films?.map((item1, index1) => {
                            return <Films url={item1} key={index1}/>
                        })
                    }
                </div>
            </div>
            <FooterApp/>
        </>
    )
}
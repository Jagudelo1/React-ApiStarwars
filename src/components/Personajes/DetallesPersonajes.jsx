import React, { useEffect, useState } from "react";
import { NavbarApp } from "../NavbarApp/NavbarApp";
import { FooterApp } from "../FooterApp/FooterApp";
import { FaReply } from 'react-icons/fa';
import { Link, useParams } from 'react-router-dom';
import { idPerson } from "../Hooks/FuncionPerson";
import Card from 'react-bootstrap/Card';
import { Films } from "./Films";
import { Species } from "./Species";
import { Starships } from "./Starships";
import Personaje from "../../Img/Img1.jpg";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import "../../css/Detalles.css";

export function DetallesPersonaje () {
    const [ detalleP, setDetalleP ] = useState([]);
    
    const idParamsPerson = useParams();
    const person = idPerson(idParamsPerson.name);

    useEffect(() => {
        person.then(res => setDetalleP(res))
    }, [person]);

    //Script para el botón desplazar arriba
    const [showButton, setShowButton] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 100) {
        setShowButton(true);
        } else {
        setShowButton(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
        window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
        top: 0,
        behavior: "smooth",
        });
    };

    return(
        <>
            <NavbarApp/>
            <div className="Button_Atras">
                <Link to="/Personajes">
                    <FaReply size={30}></FaReply>
                </Link>
            </div>
            <div className="DetallesP">
                <h2>Detalles de <span className="Span_">{detalleP.name}</span></h2>
                <Card style={{ width: '20rem' }}>
                    <Card.Img variant="top" src={Personaje} />
                    <Card.Title>{detalleP.name}</Card.Title>
                    <Card.Body className="Content_Text">
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
                <div>
                    {detalleP?.films?.length > 0 && (
                        <h4>Películas <hr/></h4>
                    )}
                    <div className="InfoDetalle">
                        {
                            detalleP?.films?.map((item1, index1) => {
                                return <Films url={item1} key={index1} />
                            })
                        }
                    </div>
                </div>

                <div>
                    {detalleP?.species?.length > 0 && (
                        <h4>Especies <hr/></h4>
                    )}
                    <div className="InfoDetalle">
                        {
                            detalleP?.species?.map((item2, index2) => {
                                return <Species url={item2} key={index2} />
                            })
                        }
                    </div>
                </div>
                
                <div>
                    {detalleP?.starships?.length > 0 && (
                        <h4>Naves Estelares <hr/></h4>
                    )}
                    <div className="InfoDetalle">
                        {  
                            detalleP?.starships?.map((item4, index4) => {
                            return <Starships url={item4} key={index4} />
                            })
                        }
                    </div>
                </div>
            </div>
            <div className="ContentButtonTop">
                {showButton && (
                <button className="scroll-to-top" onClick={scrollToTop}>
                    <BsFillArrowUpCircleFill size={35} className="IconArrow"/>
                </button>
                )}
            </div>
            <FooterApp/>
        </>
    )
}
import React, { useEffect, useState } from "react";
import { NavbarApp } from "../NavbarApp/NavbarApp";
import { FooterApp } from "../FooterApp/FooterApp";
import { Link, useParams } from "react-router-dom";
import { FaReply } from "react-icons/fa";
import { idPlanet } from "../Hooks/FuncionPlanets";
import Card from 'react-bootstrap/Card';
import Planeta from "../../Img/Planetas/Planets.jpg";
import "../../css/Detalles.css";
import "../../css/Detalles.css";
import { Residents } from "./Residents";
import { Films } from "../Personajes/Films";
import { BsFillArrowUpCircleFill } from "react-icons/bs";

export function DetallesPlanetas () {
    const [ detallePl, setDetallePl ] = useState([]);

    const idParamsPlanet = useParams();
    const planet = idPlanet(idParamsPlanet.name);

    useEffect(() => {
        planet.then(res => setDetallePl(res))
    }, [planet]);

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
        <div>
            <NavbarApp/>
            <div className="Button_Atras">
                <Link to='/Planetas'>
                    <FaReply size={30}></FaReply>
                </Link>
            </div>
            <div className="DetallesP">
                <h2>Detalles del Planeta <span className="Span_">{detallePl.name}</span></h2>
                <Card style={{ width: '20rem' }}>
                    <Card.Img variant="top" src={Planeta}/>
                    <Card.Title>{detallePl.name}</Card.Title>
                    <Card.Body className="Content_Text">
                        <Card.Text>Periodo de Rotación: <span>{detallePl.rotation_period}</span></Card.Text>
                        <Card.Text>Periodo Orbital: <span>{detallePl.orbital_period}</span></Card.Text>
                        <Card.Text>Diámetro: <span>{detallePl.diameter}</span></Card.Text>
                        <Card.Text>Clima: <span>{detallePl.climate}</span></Card.Text>
                        <Card.Text>Gravedad: <span>{detallePl.gravity}</span></Card.Text>
                        <Card.Text>Terreno: <span>{detallePl.terrain}</span></Card.Text>
                        <Card.Text>Superficie: <span>{detallePl.surface_water}</span></Card.Text>
                        <Card.Text>Población: <span>{detallePl.population}</span></Card.Text>
                    </Card.Body>
                </Card>
            </div>
            <div  className="Informacion_Detalles">
                <div>
                    {detallePl?.residents?.length > 0 && (
                        <h4>Residentes <hr/></h4>
                    )}
                    <div className="InfoDetalle">
                        {
                            detallePl?.residents?.map((item1, index1) => {
                                return <Residents url={item1} key={index1} />
                            })
                        }
                    </div>
                </div>
                <div>
                    {detallePl?.films?.length > 0 && (
                        <h4>Peliculas <hr/></h4>
                    )}
                    <div className="InfoDetalle">
                        {
                            detallePl?.films?.map((item2, index2) => {
                                return <Films url={item2} key={index2} />
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
        </div>
    )
}
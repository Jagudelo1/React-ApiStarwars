import React, { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import StarWars from '../../Img/Img2.jpg'; 
import { Link } from "react-router-dom";
import { AiFillStar } from 'react-icons/ai'
import { allPlanet } from "../Hooks/FuncionPlanets";
import { CounterPlanet } from "../Hooks/CounterPlanet";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import '../../css/Cards.css';
import "../../css/Detalles.css";

export function CardsPlanet () {
    //Personajes//
    useEffect(() => {
        allPlanet(setPlanet);
    });

    const { allPages, planet, setPlanet, counter, dismin, aumen} = CounterPlanet()
    useState(null)
    //Contador//
    useEffect(() => {
        allPages(counter)
    }, [planet, counter, allPages]);

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
            <div className="ContentPerson">
                {planet !== null
                    ? planet.map((planet) => (
                        <div key={setPlanet} className="ContentP">
                            <Card style={{ width: '18rem' }}>
                                <Card.Img  variant="top" src={StarWars} />
                                <Card.Title>
                                    {planet.name}
                                </Card.Title>
                                <Card.Body className="TextCard">
                                    <Card.Text>
                                        <p><AiFillStar/>Periodo de Rotación: <span>{planet.rotation_period}</span> </p> 
                                    </Card.Text>
                                    <Card.Text>
                                        <p><AiFillStar/>Periodo Orbital: <span>{planet.orbital_period}</span></p> 
                                    </Card.Text>
                                    <Card.Text>
                                        <p><AiFillStar/>Diámetro: <span>{planet.diameter}</span></p> 
                                    </Card.Text>
                                    <Card.Text>
                                        <p><AiFillStar/>Clima: <span>{planet.climate}</span></p> 
                                    </Card.Text>
                                    <Card.Text>
                                        <p><AiFillStar/>Gravedad: <span>{planet.gravity}</span></p> 
                                    </Card.Text>
                                    <Card.Text>
                                        <p><AiFillStar/>Terreno: <span>{planet.terrain}</span></p> 
                                    </Card.Text>
                                    <Card.Text>
                                        <p><AiFillStar/>Superficie: <span>{planet.surface_water}</span></p> 
                                    </Card.Text>
                                    <Card.Text>
                                        <p><AiFillStar/>Población: <span>{planet.population}</span></p> 
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    ))
                    : 'Cargando...'
                };
            </div>
            <div className="ButtonPage">
                <button onClick={dismin}>
                    Retroceder
                </button>
                <b>{counter}</b>
                <button onClick={aumen}>
                    Siguiente
                </button>
            </div>
            <div className="ContentButtonTop">
                {showButton && (
                <button className="scroll-to-top" onClick={scrollToTop}>
                    <BsFillArrowUpCircleFill size={35} className="IconArrow"/>
                </button>
                )}
            </div>
        </>
    )
}
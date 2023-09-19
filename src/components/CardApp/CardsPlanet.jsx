import React, { useEffect, useState } from "react";
import '../../css/Cards.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import StarWars from '../../Img/Img2.jpg'; 
import { Link } from "react-router-dom";
import { AiFillStar } from 'react-icons/ai'
import { allPlanet } from "../Hooks/FuncionPlanets";
import { CounterPlanet } from "../Hooks/CounterPlanet";

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
                                <div className="ContainerButton">
                                    <Link to={`/Planetas/${planet.url.split('/')[5]}`}>
                                        <Button className="ButtonDetails">
                                            Más Detalles
                                        </Button>
                                    </Link>
                                </div>
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
        </>
    )
}
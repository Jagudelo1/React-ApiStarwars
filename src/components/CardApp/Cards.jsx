import React, { useEffect, useState } from "react";
import { CounterPerson } from "../Hooks/CounterPerson";
import { allPerson } from "../Hooks/FuncionPerson";
import '../../css/Cards.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import StarWars from '../../Img/Img2.jpg'; 
import { Link } from "react-router-dom";

export function Cards () {
    //Personajes//
    useEffect(() => {
        allPerson(setPerson);
    });

    const { allPage, person, setPerson, counter, dismin, aumen} = CounterPerson()
    useState(null)
    //Contador//
    useEffect(() => {
        allPage(counter)
    }, [person, counter, allPage]);

    

    return(
        <>
            <div className="ContentPerson">
                {person !== null
                    ? person.map((person) => (
                        <div key={setPerson} className="ContentP">
                            <Card style={{ width: '18rem' }}>
                                <Card.Img 
                                    variant="top" 
                                    src={StarWars} />
                                <Card.Title>
                                    {person.name}
                                </Card.Title>
                                <Card.Body className="TextCard">
                                        <Card.Text>
                                            <span>Altura:</span> {person.height}
                                        </Card.Text>
                                    <Card.Text>
                                        <span>Masa:</span> {person.mass}
                                    </Card.Text>
                                    <Card.Text>
                                        <span>Color de Cabello:</span> {person.hair_color}
                                    </Card.Text>
                                    <Card.Text>
                                        <span>Color de Piel:</span> {person.skin_color}
                                    </Card.Text>
                                    <Card.Text>
                                        <span>Color de Ojos:</span> {person.eye_color}
                                    </Card.Text>
                                    <Card.Text>
                                        <span>Cumpleaños:</span> {person.birth_year}
                                    </Card.Text>
                                    <Card.Text>
                                        <span>Genero: </span> {person.gender}
                                    </Card.Text>
                                </Card.Body>
                                <Button
                                    key={person.name}
                                    className="ButtonDetails"
                                >
                                    <Link to={`/Personaje/${person.url.split('/')[5]}`}>
                                        Más Detalles
                                    </Link>
                                </Button>
                            </Card>
                        </div>
                    ))
                    : 'Cargando...'
                };
            </div>
            <div className="ButtonPage">
                <button onClick={dismin}>
                    Atrás
                </button>
                <b>{counter}</b>
                <button onClick={aumen}>
                    Siguiente
                </button>
            </div>
        </>
    )
}
import React, { useEffect, useState } from "react";
import { CounterPerson } from "../Hooks/CounterPerson";
import { allPerson } from "../Hooks/FuncionPerson";
import { Link } from "react-router-dom";
import { AiFillStar } from 'react-icons/ai'
import { Personajes } from "../Personajes/Personajes";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import StarWars from '../../Img/Img2.jpg'; 
import '../../css/Cards.css';
import "../../css/Detalles.css";

export function CardsPeople () {
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
                {person !== null
                    ? person.map((person) => (
                        <div key={setPerson} className="ContentP">
                            <Card style={{ width: '18rem' }}>
                                <Card.Img  variant="top" src={StarWars} />
                                <Card.Title>
                                    {person.name}
                                </Card.Title>
                                <Card.Body className="TextCard">
                                    <Card.Text>
                                        <p><AiFillStar/>Altura: <span>{person.height}</span> </p> 
                                    </Card.Text>
                                    <Card.Text>
                                        <p><AiFillStar/>Masa: <span>{person.mass}</span></p> 
                                    </Card.Text>
                                    <Card.Text>
                                        <p><AiFillStar/>Color de Cabello: <span>{person.hair_color}</span></p> 
                                    </Card.Text>
                                    <Card.Text>
                                        <p><AiFillStar/>Color de Piel: <span>{person.skin_color}</span></p> 
                                    </Card.Text>
                                    <Card.Text>
                                        <p><AiFillStar/>Color de Ojos: <span>{person.eye_color}</span></p> 
                                    </Card.Text>
                                    <Card.Text>
                                        <p><AiFillStar/>Cumpleaños: <span>{person.birth_year}</span></p> 
                                    </Card.Text>
                                    <Card.Text>
                                        <p><AiFillStar/>Genero: <span>{person.gender}</span></p> 
                                    </Card.Text>
                                </Card.Body>
                                <div className="ContainerButton">
                                    <Link to={`/Personaje/${person.url.split('/')[5]}`}>
                                        <Button className="ButtonDetails" key={Personajes.name}>
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
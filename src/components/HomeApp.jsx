import React from "react";
import { NavbarApp } from "./NavbarApp/NavbarApp";
import { SliderApp } from "./SliderApp/SliderApp";
import '../css/HomeApp.css';
import { CardApp } from "./CardApp/CardApp";
import Vader from '../Img/Personajes/Darth_Vader.jpg';
import Luke from '../Img/Personajes/Luke_Skywalker.png';
import Obi from '../Img/Personajes/Obi_Wan_Kenobi.jpg';
import { Link } from "react-router-dom";
import { FooterApp } from "./FooterApp/FooterApp";

export function HomeApp(){
    return(
        <div>
            <NavbarApp/>
            <SliderApp/>
            <h1 className='h1_text'>Los más Poderosos</h1>
            <div className='Cards_Api'>
                <CardApp
                    src={Vader}
                    title="Darth Vader"
                    text="Anakin era uno de los Jedi más 
                    poderosos, era audaz y poseía una gran 
                    habilidad con el sable láser."
                />
                <CardApp
                    src={Luke}
                    title="Luke Skywalker"
                    text="Hijo del Jedi Anakin Skywalker y la 
                    senadora Pádme Amidala de Naboo, Fue el 
                    último Jedi de la Antigua Orden y el 
                    primero de la Nueva Orden Jedi."
                />
                <CardApp
                    src={Obi}
                    title="Obi Wan Kenobi"
                    text="Fue un Maestro Jedi conocido también 
                    como Ben Kenobi, Obi-Wan Kenobi tuvo un 
                    papel muy importante en el destino de la 
                    Galaxia."
                />
            </div>
            <div className="ButtonPersonajes">
                <Link to='/Personajes'>
                    <button>
                        Ver Más
                    </button>
                </Link>
            </div>
            <FooterApp/>
        </div>
    )
}
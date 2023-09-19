import React from "react";
import { NavbarApp } from "../NavbarApp/NavbarApp";
import { CardsPlanet } from "../CardApp/CardsPlanet";
import { FooterApp } from "../FooterApp/FooterApp";
import '../../css/Personajes.css';

export function Planetas(){
    return(
        <div className="ContentPersonajes">
            <NavbarApp/>
            <h1 className="TitlePerson">Planetas</h1>
            <hr/>
            <CardsPlanet/>
            <FooterApp/>
        </div>
    )
}
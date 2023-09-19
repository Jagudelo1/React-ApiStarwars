import React from "react";
import '../../css/FooterApp.css';
import { Link } from "react-router-dom";

export function FooterApp(){
    return(
        <>
            <footer className="FooterApp">
                <div className="InfoFooter">
                    <p>Hola, bienvenido al sitio web 
                       StarWars, aqui podras encontrar 
                       todo los referente a los personajes 
                       y planetas que tiene esta gran 
                       franquicia.
                    </p>
                </div>
                <div className="Title_Footer">
                    <Link to='/'>Api_StarWars</Link>
                </div>
                <div className="SubtitleFooter">
                    <h4>Autor</h4>
                    <h5>Juan David Agudelo</h5>
                </div>
            </footer>
            <div className="CopyRight">
                <p>@CopyRight ©2023 - Blog</p>
            </div>
        </>
    )
}
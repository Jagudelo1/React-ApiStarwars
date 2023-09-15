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
                    <h4>Blog</h4>
                </div>
            </footer>
        </>
    )
}
import { NavbarApp } from "../NavbarApp/NavbarApp";
import '../../css/Personajes.css';
import { CardsPeople } from "../CardApp/CardsPeople";
import { FooterApp } from "../FooterApp/FooterApp";

export function Personajes(){
    return(
        <div className="ContentPersonajes">
            <NavbarApp/>
            <h1 className="TitlePerson">Personajes</h1>
            <hr/>
            <CardsPeople/>
            <FooterApp/>
        </div>
    )
}
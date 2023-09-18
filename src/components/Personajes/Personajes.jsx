import { NavbarApp } from "../NavbarApp/NavbarApp";
import '../../css/Personajes.css';
import { Cards } from "../CardApp/Cards";

export function Personajes(){
   

    return(
        <div className="ContentPersonajes">
            <NavbarApp/>
            <h1 className="TitlePerson">Personajes</h1>
            <hr/>
            <Cards/>
        </div>
    )
}
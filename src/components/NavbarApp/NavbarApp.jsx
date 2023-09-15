import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom'
import "../../css/NavbarApp.css";
import { AiFillHome } from 'react-icons/ai';
import { BiSolidUser, BiSolidPlanet } from 'react-icons/bi';

export function NavbarApp() {
    return(
        <>
        <Navbar expand="sm" className="ContentNavbar">
            <Container>
                <Navbar.Brand>
                    <Link to="/" className="TitleApi">Api_StarWars</Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto MenuApi">
                        <Nav.Link>
                           <Link to="/">
                                <AiFillHome size={20}/> Inicio
                            </Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to="/Personajes">
                                <BiSolidUser size={20}/> Personajes
                            </Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to="/Planetas">
                                <BiSolidPlanet size={20}/> Planetas
                            </Link>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </>
    )
}
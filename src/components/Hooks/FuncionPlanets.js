import axios from "axios";

const allPlanet = async (state) => {
    const peticion = await axios.get(`https://swapi.dev/api/planets`);
    state(peticion.data.results);
}

const idPlanet = async (id) => {
    const peticion = await fetch(`https://swapi.dev/api/planets/${id}`);
    const data = peticion.json();
    return data
}

export {
    allPlanet,
    idPlanet
}
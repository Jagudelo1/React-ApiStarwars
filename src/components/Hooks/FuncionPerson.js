import axios from "axios";

const allPerson = async (state) => {
    const peticion = await axios.get(`https://swapi.dev/api/people`);
    state(peticion.data.results);
}

const idPerson = async (id) => {
    const peticion = await fetch(`https://swapi.dev/api/people/${id}/`);
    const data = peticion.json();
    return data
}

export {
    allPerson,
    idPerson
}
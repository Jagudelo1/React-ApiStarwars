import axios from "axios";

const allPerson = async (state) => {
    const peticion = await axios.get(`https://swapi.dev/api/people`);
    state(peticion.data.results);
}

export {
    allPerson
}
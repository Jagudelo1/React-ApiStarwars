import axios from "axios";

const allPlanet = async (state) => {
    const peticion = await axios.get(`https://swapi.dev/api/planets`);
    state(peticion.data.results);
}

export {
    allPlanet
}
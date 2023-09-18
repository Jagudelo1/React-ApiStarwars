import { useState } from "react";

export const CounterPerson = () => {
    const [person, setPerson] = useState([]);
    const [counter, setCounter] = useState(1);

    const dismin = () => {
        if (counter <= 1){
            setCounter(1);
        }else {
            setCounter(counter - 1);
        }
    };

    const aumen = () => {
        if(counter < 9) {
            setCounter(counter + 1);
        }else {
            setCounter(9);
        }
    };

    const allPage = async (numberPage) => {
        try {
            var requestOptions = {
                method : "GET",
                redirect: "follow",
            };
            await fetch(
                `https://swapi.dev/api/people/?page=${numberPage}`,
                requestOptions
            )
            .then((response) => response.json())
            .then((result) => setPerson(result.results))
            .catch((error) => console.log("error", error));
        } catch (error) {
            console.log(error);
        }
    };

    return {
        person,
        counter,
        aumen,
        dismin,
        allPage
    };
};
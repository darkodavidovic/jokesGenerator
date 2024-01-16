import axios from "axios";
import { renderJoke } from "./render.service";

const jokesURL = "https://icanhazdadjoke.com/"

export async function getRandomJoke() {
    let config = {
        headers: {
            Accept: "application/json",
        },
    };
    axios.get(jokesURL, config)
        .then(res => renderJoke(res.data.joke))
        .catch(error => console.log(error));
}
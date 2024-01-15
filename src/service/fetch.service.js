import axios from "axios";
import { renderService } from "..";

class FetchService {

    constructor() {
        this.jokesURL = "https://icanhazdadjoke.com/"
    }
    
    async getRandomJoke() {
        let config = {
            headers: {
                Accept: "application/json",
            },
        };
        axios.get(this.jokesURL, config)
            .then(res => renderService.renderJoke(res.data.joke))
            .catch(error => console.log(error));
    }
}

export default FetchService;
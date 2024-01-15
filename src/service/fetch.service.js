import axios from "axios";
import RenderService from "./render.service";

const renderService = new RenderService();

class FetchService {
    constructor() {
        this.serverURL = "http://softinz20233-001-site1.gtempurl.com/api/users";
        this.jokesURL = "https://icanhazdadjoke.com/"
    }

    login(username, password) {
        axios.get(this.serverURL)
            .then(res => {
                if (res.status == 200 && res.data != null) {
                    const users = res.data;
                    const check = users.filter(u => u.username ==
                        username && u.password == password);
                    if (check.length > 0) {
                        alert("Ulogovani ste");
                        localStorage.setItem('ulogovan', true);
                    }
                    else {
                        alert("Neispravni podaci za logovanje");
                    }
                }
                else {
                    console.log("Desila se greska");
                }
            })
            .catch(error => console.log(error));
    }

    getRandomJoke() {
        axios.get(this.jokesURL)
            .then(res => {
                if (res.status == 200) {
                    renderService.renderJoke(res.data);
                }
                else {
                    console.log("Desila se greska");
                }
            })
            .catch(error => console.log(error));
    }
}

export default FetchService;
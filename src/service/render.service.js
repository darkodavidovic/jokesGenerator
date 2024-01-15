
import { authService } from "..";
import { appScreen, jokeContainer, loginScreen } from "../selectors";

class RenderService {

    constructor() {
        this.serverURL = "http://softinz20233-001-site1.gtempurl.com/api/users";
        this.jokesURL = "https://icanhazdadjoke.com/"
    }

    renderScreens() {
        if (authService.isAuthenticated()) {
            loginScreen.style.display = "none";
            appScreen.style.display = "block";
            return
        }
        loginScreen.style.display = "block";
        appScreen.style.display = "none";
    }

    renderJoke(joke) {
        if (authService.isAuthenticated()) {
            jokeContainer.innerHTML = `<p>${joke}</p>`
        }
    }
}

export default RenderService;
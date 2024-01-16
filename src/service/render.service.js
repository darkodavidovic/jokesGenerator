
import { authService } from "..";
import { appScreen, jokeContainer, loginScreen } from "../selectors";

class RenderService {

    constructor() {
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
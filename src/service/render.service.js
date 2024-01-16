
import { appScreen, jokeContainer, loginScreen } from "../selectors";
import { isAuthenticated } from "./auth.service";

export function renderScreens() {
    if (isAuthenticated()) {
        loginScreen.style.display = "none";
        appScreen.style.display = "block";
        return
    }
    loginScreen.style.display = "block";
    appScreen.style.display = "none";
}

export function renderJoke(joke) {
    if (isAuthenticated()) {
        jokeContainer.innerHTML = `<p>${joke}</p>`
    }
}
import { getJokeButton, loginButton, logoutButton } from "./selectors";
import AuthService from "./service/auth.service";
import RenderService from "./service/render.service";
import FetchService from "./service/fetch.service";

import "./stilovi.scss";

export const authService = new AuthService()
export const fetchService = new FetchService()
export const renderService = new RenderService();

// login logika
loginButton.addEventListener('click', (event) => {
    const username = document.getElementById('username');
    const password = document.getElementById('password');
    authService.login(username.value, password.value);
})

// logout logika
logoutButton.addEventListener('click', () => {
    localStorage.clear();
    renderService.renderScreens();
});

// get joke logika
getJokeButton.addEventListener('click', () => {
    fetchService.getRandomJoke();
});

// prilikom pokretanja aplikacije, proveravaju se localStorage podaci i renderuju se skrinovi (login ili app)
(() => {
    renderService.renderScreens()
})()

import { getJokeButton, loginButton, logoutButton } from "./selectors";
import { getRandomJoke } from "./service/fetch.service";
import { login } from "./service/auth.service";
import { renderScreens } from "./service/render.service";
import "./stilovi.scss";

// prilikom pokretanja aplikacije, postavljaju se eventivi, proveravaju se localStorage podaci i renderuju se skrinovi (login ili app)
window.onload = (() => {
    renderScreens()

    // login logika
    loginButton.addEventListener('click', (event) => {
        const username = document.getElementById('username');
        const password = document.getElementById('password');
        login(username.value, password.value);
    })

    // logout logika
    logoutButton.addEventListener('click', () => {
        localStorage.clear();
        renderScreens();
    });

    // get joke logika
    getJokeButton.addEventListener('click', () => {
        getRandomJoke();
    });

})()

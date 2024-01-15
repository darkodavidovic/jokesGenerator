import "./stilovi.scss";

import FetchService from "./service/fetch.service";

const fetchService = new FetchService();

// selektori
const loginButton = document.getElementById('loginButton');
const logoutButton = document.getElementById('logoutButton');

// login logika
loginButton.addEventListener('click', (event) => {
    const username = document.getElementById('username');
    const password = document.getElementById('password');
    fetchService.login(username.value, password.value);
})

// logout logika
logoutButton.addEventListener('click', () => {
    localStorage.clear();
});

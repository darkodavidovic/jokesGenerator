import axios from "axios";
import { renderService } from "..";

class AuthService {
    constructor() {
        this.serverURL = "http://softinz20233-001-site1.gtempurl.com/api/users";
    }

    login(username, password) {
        axios.get(this.serverURL)
            .then(res => {
                if (res.status == 200 && res.data != null) {
                    const users = res.data;
                    const check = users.filter(u => u.username == username && u.password == password);
                    if (check.length > 0) {
                        localStorage.setItem('ulogovan', true);
                        alert("Ulogovani ste.");
                    }
                    else {
                        localStorage.setItem('ulogovan', false);
                        alert("Neispravni podaci za logovanje!");
                    }
                    renderService.renderScreens();
                }
                else {
                    console.log("Desila se greska!");
                }
            })
            .catch(error => console.log(error));
    }

    isAuthenticated() {
        const ulogovan = localStorage.getItem('ulogovan');
        if (ulogovan && ulogovan == 'true') return true;
        return false
    }
}

export default AuthService
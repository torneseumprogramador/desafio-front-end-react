import api from "../ambiente/api";
import Login from "../models/login";

const KEY_LOGIN:string = "desafio-login";

class LoginServico {
    static async login(email:string, senha:string) : Promise<Login> {
        const response = await api.post('/login', {
            email: email,
            senha: senha
        });
        return await response.data;
    }

    static setLocalStorage(token:string) {
        const minutosExpiracao = 22*60; // token expira em 22 horas
        const now = new Date();
        const item = {
            value: token,
            expiry: now.getTime() + minutosExpiracao * 60000, // Convert minutes to milliseconds
        };
        localStorage.setItem(KEY_LOGIN, JSON.stringify(item));
    }

    static getToken(): string {
        const itemStr = localStorage.getItem(KEY_LOGIN);
        if (!itemStr) {
            return "";
        }

        const item = JSON.parse(itemStr);
        const now = new Date();

        if (now.getTime() > item.expiry) {
            localStorage.removeItem(KEY_LOGIN);
            return "";
        }

        return item.value;
    }

    static clearLocalStorage() {
        localStorage.removeItem(KEY_LOGIN);
    }

    static tokenValido(): boolean {
        const token: string = LoginServico.getToken();
        return token ? true : false;
    }
}

export default LoginServico;
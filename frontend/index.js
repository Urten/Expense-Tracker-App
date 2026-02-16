// to connect dom.js and api.js
import { loginBtn, signupBtn } from "./dom";
import { Auth } from "./api";

// login and signup

loginBtn.addEventListener("click", () => {
    Auth.login()
})
import {chat} from "./app";
import {loadChatHistory, updateUserInfo} from "./history";
import {sendMessage} from "./messages";

export default function logIn() {
    const mainBlock = {
        loginForm: document.body.querySelector('#loginForm'),
        chatBlock: document.body.querySelector('#chatContainer')
    }
    if (localStorage.getItem("username")) {
        mainBlock.chatBlock.classList.remove('hidden');
        loadChatHistory();
    } else {
        mainBlock.loginForm.addEventListener('submit', (e) => getLogin(e, mainBlock));
        mainBlock.loginForm.classList.remove('hidden');
    }
    document.body.querySelector('#messageForm').addEventListener('submit', sendMessage);
    document.body.querySelector('#btnLogout').addEventListener('click', logOut);
}

function getLogin(e, mainBlock) {
    e.preventDefault();
    mainBlock.loginForm.inputName.addEventListener('focus', (e) => e.target.classList.remove('error'));
    const nameInput = mainBlock.loginForm.inputName.value;
    if (!!nameInput.trim()) {
        mainBlock.chatBlock.classList.remove('hidden');
        mainBlock.loginForm.classList.add('hidden');
        updateUserInfo(nameInput);
    } else {
        mainBlock.loginForm.reset();
        mainBlock.loginForm.inputName.classList.add('error');
    }
}

function logOut() {
    localStorage.clear();
    chat.closeConnection();
    window.location.reload();
}
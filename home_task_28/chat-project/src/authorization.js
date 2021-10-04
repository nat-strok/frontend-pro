import {myName, chat} from "./app";
import {loadChatHistory, updateUserInfo} from "./history";
import {sendMessage} from "./messages";

export default function logIn(loginForm, chatBlock) {
    if (myName) {
        chatBlock.classList.remove('hidden');
        loadChatHistory();
    } else {
        loginForm.addEventListener('submit', (e) => getLogin(e, loginForm, chatBlock));
        loginForm.classList.remove('hidden');
    }
    document.body.querySelector('#messageForm').addEventListener('submit', sendMessage);
    document.body.querySelector('#btnLogout').addEventListener('click', logOut);
}

function getLogin(e, loginForm, chatBlock) {
    e.preventDefault();
    loginForm.inputName.addEventListener('focus', (e) => e.target.classList.remove('error'));
    const nameInput = loginForm.inputName.value;
    if (!!nameInput.trim()) {
        chatBlock.classList.remove('hidden');
        loginForm.classList.add('hidden');
        myName = nameInput;
        updateUserInfo(nameInput);
    } else {
        loginForm.reset();
        loginForm.inputName.classList.add('error');
    }
}

function logOut() {
    localStorage.clear();
    chat.closeConnection();
    window.location.reload();
}
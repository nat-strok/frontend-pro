import './styles.css';

import Chat from "./chat";
import {loadChatHistory, updateUserInfo} from "./history";


const chat = new Chat;
let myName = localStorage.getItem("username");

window.addEventListener("load", logIn);

function logIn() {
    const mainBlock = {
        loginForm: document.body.querySelector('#loginForm'),
        chatBlock: document.body.querySelector('#chatContainer')
    }
    if (myName) {
        mainBlock.chatBlock.classList.remove('hidden');
        loadChatHistory();
    } else {
        mainBlock.loginForm.addEventListener('submit', (e) => getLogin(e, mainBlock));
        mainBlock.loginForm.classList.remove('hidden');
    }
    document.body.querySelector('#messageForm').addEventListener('submit', sendMessage);
    document.body.querySelector('#btnLogout').addEventListener('click', logOut);

    chat.start();
}

function getLogin(e, mainBlock) {
    e.preventDefault();
    mainBlock.loginForm.inputName.addEventListener('focus', (e) => e.target.classList.remove('error'));
    const nameInput = mainBlock.loginForm.inputName.value;
    if (!!nameInput.trim()) {
        mainBlock.chatBlock.classList.remove('hidden');
        mainBlock.loginForm.classList.add('hidden');
        updateUserInfo(nameInput);
        myName = nameInput;
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

export class ChatMessage {
    constructor(name, message) {
        this.parentBlock = document.body.querySelector('#chatHistory');
        this.name = name;
        this.message = message;
        this.mine = this.name === myName;
        this.userClass = 'user-name';
    }

    createMessage() {
        if (this.mine) this.userClass = 'user-name my-name';
        this.parentBlock.insertAdjacentHTML('beforeend', `<p><span class="${this.userClass}">${this.name}:</span> ${this.message}</p>`);
        this.parentBlock.querySelector('p:last-child').scrollIntoView({behavior: 'smooth', block: 'end'})
    }
}

function sendMessage(e) {
    e.preventDefault();
    const message = e.target.inputMessage.value;
    if (message.trim()) {
        chat.outgoingMessage('message', myName, message);
        new ChatMessage(myName, message).createMessage();
    }
    e.target.reset();
}
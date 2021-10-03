import './styles.css';

import {sendMessage, logIn, logOut} from './dom-el-fns';
import {Chat} from './chat';

document.addEventListener("DOMContentLoaded", startChat);

export let myName = localStorage.getItem("username"),
    loginForm,
    chatBlock,
    chat;

function startChat() {
    loginForm = document.body.querySelector('#loginForm');
    chatBlock = document.body.querySelector('#chatContainer');
    chat = new Chat;
    chat.start();
    logIn();
    document.body.querySelector('#messageForm').addEventListener('submit', sendMessage);
    document.body.querySelector('#btnLogout').addEventListener('click', logOut);
}
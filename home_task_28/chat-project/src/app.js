import './styles.css';

import logIn from './authorization';
import Chat from './chat';

window.onload = function() {startChat('#loginForm', '#chatContainer')};

export let chat = new Chat;

function startChat(loginFormId, chatBlockId) {
    const loginForm = document.body.querySelector(loginFormId);
    const chatBlock = document.body.querySelector(chatBlockId);
    logIn(loginForm, chatBlock);
    chat.start();
}
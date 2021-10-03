import {myName, chatBlock, loginForm, chat} from "./app";
import {loadChatHistory, updateUserInfo} from "./storage";
export {logIn, logOut, getLogin, updateUserBlock, sendMessage};

function logIn() {
    if (myName) {
        chatBlock.classList.remove('hidden');
        loadChatHistory();
    } else {
        loginForm.addEventListener('submit', getLogin);
        loginForm.classList.remove('hidden');
    }
}

function getLogin(e) {
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

class ChatMessage {
    constructor(name, message) {
        this.parentBlock = document.body.querySelector('#chatHistory');
        this.name = name;
        this.message = message;
        this.mine = this.name === myName;
        this.userClass = 'user-name';
    }

    createMessage() {
        if (this.mine) this.userClass = 'user-name my-name';
        this.parentBlock.insertAdjacentHTML('afterbegin', `<p><span class="${this.userClass}">${this.name}:</span> ${this.message}</p>`);
        this.parentBlock.scrollTop = 0;
    }
}

function updateUserBlock(date) {
    document.body.querySelector('.users-block').append(date);
}

function sendMessage(e) {
    e.preventDefault();
    const message = e.target.inputMessage.value;
    if (message.trim()) {
        chat.sendMessage('message', myName, message);
        new ChatMessage(myName, message).createMessage();
    }
    e.target.reset();
}
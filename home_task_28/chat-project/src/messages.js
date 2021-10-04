import {chat} from "./app";
import {myName} from "./authorization";

export default class ChatMessage {
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

export function sendMessage(e) {
    e.preventDefault();
    const message = e.target.inputMessage.value;
    if (message.trim()) {
        chat.outgoingMessage('message', myName, message);
        new ChatMessage(myName, message).createMessage();
    }
    e.target.reset();
}
import {myName} from './app';

export class ChatMessage {
    constructor(name, message) {
        this.parentBlock = document.body.querySelector('#chatHistory');
        this.name = name;
        this.message = message;
        this.userClass = 'user-name';
    }

    createMessage() {
        if (this.name === myName) this.userClass = 'user-name my-name';
        this.parentBlock.insertAdjacentHTML('afterbegin', `<p><span class="${this.userClass}">${this.name}:</span> ${this.message}</p>`);
    }
}

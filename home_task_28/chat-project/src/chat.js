import {myName} from './app';
import {updateChatHistory, updateUserBlock} from './history';
import ChatMessage from './messages';

export default class Chat {
    constructor() {
        this.url = 'wss://fep-app.herokuapp.com/';
        this.reconnect = document.body.querySelector('#reconnect');
    }

    start() {
        this.wsChat = new WebSocket(this.url);
        this.wsChat.onopen = this.onOpen.bind(this);
        this.wsChat.onerror = this.onError.bind(this);
        this.wsChat.onclose = this.onClose.bind(this);
        this.wsChat.addEventListener('message', (e) => this.incomingMessageHandler(e));
    }

    onOpen() {
        console.log('Socket is open.');
        this.outgoingMessage('system message', 'Server', 'New user connected');
    }

    onError() {
        console.log('Error.');
        this.wsChat.close();
    }

    onClose() {
        if (this.reconnect.checked) {
            console.log('Reconnection...');
            setTimeout(() => this.start(), 5000);
        } else {
            console.log('Socket is closed.');
        }
    }

    closeConnection() {
        this.reconnect.removeAttribute('checked');
        this.wsChat.close();
    }

    incomingMessageHandler(e) {
        try {
            const incoming = JSON.parse(e.data);
            if (this.isRequiredMessage(incoming)) {
                new ChatMessage(incoming.payload.username, incoming.payload.message).createMessage();
                updateChatHistory(incoming, "chatHistory");
                if (this.isUniqUser(incoming)) {
                    updateChatHistory(incoming.payload.username, "usersList");
                    updateUserBlock(`, ${incoming.payload.username}`);
                }
            }
        } catch (error) {
            console.log('Service message: ' + e.data);
        }
    }

    outgoingMessage(type, name, message) {
        const newMessage = {type: type, payload: {username: name, message: message}};
        this.wsChat.send(JSON.stringify(newMessage));
        if (type === 'message') {
            updateChatHistory(newMessage, "chatHistory");
        }
    }

    isRequiredMessage(data) {
        if (data.payload.username === myName) {
            return false;
        } else if (data.type !== 'message') {
            return false;
        } else {
            return true;
        }
    }

    isUniqUser(data) {
        let arr = JSON.parse(localStorage.getItem("usersList"));
        if (arr.includes(data.payload.username)) {
            return false;
        } else {
            return true;
        }
    }
}
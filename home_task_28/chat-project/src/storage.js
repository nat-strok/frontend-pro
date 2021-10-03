import {updateUserBlock} from './dom-el-fns';
import {ChatMessage} from './chat-msg-tpl';
export {loadChatHistory, updateUserInfo, updateChatHistory};

function loadChatHistory() {
    if (localStorage.chatHistory) {
        const chatMessagesHistory = JSON.parse(localStorage.chatHistory);
        chatMessagesHistory.forEach(el => new ChatMessage(el.payload.username, el.payload.message).createMessage());
    }
    const usersListHistory = JSON.parse(localStorage.usersList).join(', ');
    updateUserBlock(usersListHistory);
}

function updateUserInfo(userName) {
    localStorage.setItem("username", userName);
    localStorage.setItem("usersList", JSON.stringify([userName + ' (you)']));
    updateUserBlock(userName + ' (you)');
}

function updateChatHistory(newEntry, dataKey) {
    let historyArray = JSON.parse(localStorage.getItem(dataKey)) || [];
    historyArray.push(newEntry);
    localStorage.setItem(dataKey, JSON.stringify(historyArray));
}
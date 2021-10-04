import ChatMessage from './messages';

export function loadChatHistory() {
    if (localStorage.chatHistory) {
        const chatMessagesHistory = JSON.parse(localStorage.chatHistory);
        chatMessagesHistory.forEach(el => new ChatMessage(el.payload.username, el.payload.message).createMessage());
    }
    const usersListHistory = JSON.parse(localStorage.usersList).join(', ');
    updateUserBlock(usersListHistory);
}

export function updateUserInfo(userName) {
    localStorage.setItem("username", userName);
    localStorage.setItem("usersList", JSON.stringify([userName + ' (you)']));
    updateUserBlock(userName + ' (you)');
}

export function updateChatHistory(newEntry, dataKey) {
    let historyArray = JSON.parse(localStorage.getItem(dataKey)) || [];
    historyArray.push(newEntry);
    localStorage.setItem(dataKey, JSON.stringify(historyArray));
}

export function updateUserBlock(user) {
    document.body.querySelector('.users-block').append(user);
}
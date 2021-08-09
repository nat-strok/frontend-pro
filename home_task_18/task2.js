document.addEventListener("DOMContentLoaded", checkLogin);

function checkLogin() {
    const dataNameKey = 'userName';
    const dataNameValue = localStorage.getItem(dataNameKey);
    const loginForm = document.querySelector('#loginForm');
    const welcomeMessage = document.querySelector('#welcomeMessage');

    if (dataNameValue) {
        welcomeMessage.textContent = `Welcome, ${dataNameValue}!`;
        welcomeMessage.classList.remove('hidden');
    } else {
        document.querySelector('#btnLogin').addEventListener('click', setName);
        loginForm.classList.remove('hidden');
    }

    function setName(e) {
        e.preventDefault();
        let nameValue = document.querySelector('#textInput').value;
        if (!nameValue) {
            alert('Error. You have to enter your name');
        } else {
            welcomeMessage.textContent = `Welcome, ${nameValue}!`;
            localStorage.setItem(dataNameKey, nameValue);
            loginForm.classList.add('hidden');
            welcomeMessage.classList.remove('hidden');
        }
    }
}
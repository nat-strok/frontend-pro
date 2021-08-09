document.addEventListener("DOMContentLoaded", checkLogin);

function checkLogin() {
    const cookieNameKey = 'userName';
    const loginForm = document.querySelector('#loginForm');
    const welcomeMessage = document.querySelector('#welcomeMessage');

    if (document.cookie.match(cookieNameKey)) {
        welcomeMessage.textContent = `Welcome, ${getCookie(cookieNameKey)}!`;
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
            document.cookie = encodeURIComponent(cookieNameKey) + '=' + encodeURIComponent(nameValue);
            loginForm.classList.add('hidden');
            welcomeMessage.classList.remove('hidden');
        }
    }
}

function getCookie(cookieKey) {
    let cookieArr = document.cookie.split('; ');
    let cookieObj = {};
    cookieArr.forEach(el => {
        let values = el.split("=");
        cookieObj[values[0]] = values[1];
    })
    return decodeURIComponent(cookieObj[cookieKey]);
}
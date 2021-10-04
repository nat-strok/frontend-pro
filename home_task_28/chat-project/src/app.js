import './styles.css';

import logIn from './authorization';
import Chat from './chat';

export const chat = new Chat;

window.onload = function () {
    logIn();
    chat.start();
};

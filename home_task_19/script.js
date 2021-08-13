const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

function getWeekNumber(d) {
    const startYear = new Date(d.getFullYear(), 0, 1);
    const firstWeekPrevDays = startYear.getDay();
    const daysDiff = (d.getTime() - startYear.getTime()) / (1000 * 60 * 60 * 24);
    return Math.ceil((daysDiff + firstWeekPrevDays) / 7);
}

function printTime() {
    const date = new Date();
    document.body.querySelector('[data-id="hours"]').textContent = (date.getHours() < 10) ? `0${date.getHours()}` : date.getHours();
    document.body.querySelector('[data-id="min"]').textContent = ('0' + date.getMinutes()).slice(-2);
    document.body.querySelector('[data-id="sec"]').textContent = ('0' + date.getSeconds()).slice(-2);
    document.body.querySelector('[data-id="date"]').textContent = `${days[date.getDay()]}, ${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
    document.body.querySelector('[data-id="week"]').textContent = `The ${getWeekNumber(date)}th week`;
}

function updateClock() {
    setInterval(printTime, 1000);
    printTime();
}

document.addEventListener("DOMContentLoaded", updateClock);
document.addEventListener('DOMContentLoaded', () => {
    const cityName = document.querySelector('#cityName');
    const getWeatherForm = document.querySelector('#getWeatherForm');
    const resultTemplate = document.querySelector('#resultTemplate').innerHTML;
    getWeatherForm.addEventListener("submit", onGetWeather);

    function onGetWeather(e) {
        e.preventDefault();
        removePreviousBlock();
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName.value}&appid=e21112e76750a170352ebe5709d21828&lang=ru`)
            .then((res) => res.json())
            .then((data) => handleWeather(data))
            .catch((error) => alert('Произошла ошибка, попробуйте ввести другой город'))
            .finally(() => resetForm());
    }

    function handleWeather(data) {
        let html = resultTemplate.replace('{{cityName}}', data.name)
            .replace('{{date}}', formatDateRu(data.dt))
            .replace('{{icon}}', data.weather[0].icon)
            .replace('{{weatherDescription}}', data.weather[0].description)
            .replace('{{temp}}', convertToCelsius(data.main.temp))
            .replace('{{deg}}', convertToDirection(data.wind.deg))
            .replace('{{speed}}', Math.round(data.wind.speed));
        getWeatherForm.insertAdjacentHTML('afterend', html);
    }

    function formatDateRu(num) {
        num *= 1000;
        const options = {
            weekday: 'long',
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        };
        return new Date(num).toLocaleDateString('ru-RU', options);
    }

    function convertToCelsius(num) {
        return Math.round(num -= 273.15);
    }

    function convertToDirection(num) {
        let directions = ['северный', 'северо-восточный', 'восточный', 'юго-восточный', 'южный', 'юго-западный', 'западный', 'северо-западный'];
        num = Math.round(num / 45);
        num = (num + 8) % 8;
        return directions[num];
    }

    function removePreviousBlock() {
        const oldBlock = document.querySelector('#result');
        if (oldBlock) oldBlock.remove();
    }

    function resetForm() {
        getWeatherForm.reset();
    }

});
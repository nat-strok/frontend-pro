document.addEventListener('DOMContentLoaded', () => {
    const cityName = document.querySelector('#cityName');
    const getWeatherForm = document.querySelector('#getWeatherForm');
    const resultTemplate = document.querySelector('#resultTemplate').innerHTML;
    getWeatherForm.addEventListener("submit", onGetWeather);

    function onGetWeather(e) {
        e.preventDefault();
        removeOldWeatherBlock(document.querySelector('#result'));
        console.log(cityName);
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName.value}&appid=e21112e76750a170352ebe5709d21828&lang=ru`)
            .then((res) => res.json())
            .then((data) => handleWeather(data))
            .catch((error) => console.log(error.message))
            .finally(() => resetForm());
    }

    function handleWeather(data) {
        let html = resultTemplate.replace('{{cityName}}', cityName.value)
            .replace('{{icon}}', data.weather[0].icon)
            .replace('{{weatherDescription}}', data.weather[0].description)
            .replace('{{temp}}', convertToCelsius(+data.main.temp))
            .replace('{{deg}}', degreesToDirection(+data.wind.deg))
            .replace('{{speed}}', +data.wind.speed)
            .replace('{{sunrise}}', new Date(+data.sys.sunrise * 1000).toLocaleTimeString())
            .replace('{{sunset}}', new Date(+data.sys.sunset * 1000).toLocaleTimeString());
        getWeatherForm.insertAdjacentHTML('afterend', html);

    }

    function convertToCelsius(num) {
        return Math.round(num -= 273.15);
    }

    function degreesToDirection(num) {
        let directions = ['северный', 'северо-восточный', 'восточный', 'юго-восточный', 'южный', 'юго-западный', 'западный', 'северо-западный'];
        num = num / 45;
        num = Math.round(num);
        return directions[num];
    }

    function removeOldWeatherBlock(oldBlock) {
        if (oldBlock) oldBlock.remove();
    }

    function resetForm() {
        getWeatherForm.reset();
    }

});
//Seleções de eventos e variaveis

const apiKey ="c8cb6b05f51dd63e37d0d17f0ab6768a";
const apiCountryURL = "https://flagsapi.com/"

const cityInput = document.querySelector("#city-input");
const searchBtn = document.querySelector("#search");

const cityElement = document.querySelector("#city");
const tempElement = document.querySelector("#temperature span");
const descElement = document.querySelector("#description");
const weatherIconElement = document.querySelector("#weather-icon");
const countryElement = document.querySelector("#country-flag");
const moistElement = document.querySelector("#moist span");
const windElement = document.querySelector("#wind span");

const weatherContainer = document.querySelector("#weather-data");


//Funções
const getWeatherData = async (city) => {
    const apiWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt-br`

    const res = await fetch(apiWeatherURL);
    const data = await res.json();

    // Atualizar os elementos HTML com as informações do clima
    cityElement.textContent = data.name;
    tempElement.textContent = data.main.temp;
    descElement.textContent = data.weather[0].description;
    weatherIconElement.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
    moistElement.textContent = data.main.humidity;
    windElement.textContent = data.wind.speed;

    const apiCountryFlagURL = `${apiCountryURL}${data.sys.country}/flat/64.png`;
    countryElement.src = apiCountryFlagURL;

    weatherContainer.classList.remove("hide");
}

const showWeatherData = (city) =>{
    getWeatherData(city);
}

//Eventos
searchBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const city = cityInput.value;
    showWeatherData(city);
});


console.log(countryElement)
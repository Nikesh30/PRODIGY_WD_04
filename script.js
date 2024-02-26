const apikey = "da860dfb888172f73b3818c33c15dafa";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weatherimg");

async function checkWeather(city_name){
    const response = await fetch(apiUrl + city_name + `&appid=${apikey}`);

    var data = await response.json();

    document.querySelector(".city_name").innerHTML = data.name;
    document.querySelector(".temperature").innerHTML = data.main.temp + "°C";
    document.querySelector(".humidity-details").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind-details").innerHTML = data.wind.speed + "km/hr";

    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "cloudy1.jpg";
    }    
    else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "sunny.jpg";
    } 
    else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "rainy.jpg";
    } 
    else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "rainy.jpg";
    } 
    else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "mist.jpg";
    } 
};

searchBtn.addEventListener("click", () =>{
    checkWeather(searchBox.value);
});






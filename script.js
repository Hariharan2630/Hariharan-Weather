document.querySelector("button").addEventListener("click", getweather);

async function getweather() {
    const city = document.getElementById("cityinput").value;
    const apikey = "48f9fc26f4d1e8ecd89381a05721a5bb";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`; 

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("City was not found");
        }
        const data = await response.json();
        displayweather(data);
    } catch (error) {
        console.error(error);
        alert(error.message); 
    }
}

function displayweather(data) {
    const weatherContainer = document.getElementById("wetherresult");
    weatherContainer.innerHTML = `
        <h2>${data.name}, ${data.sys.country}</h2>
        <p>Temperature: ${data.main.temp}°C</p>
        <p>Weather: ${data.weather[0].description}</p>
        <p>Humidity: ${data.main.humidity}%</p>
        <p>Wind Speed: ${data.wind.speed} m/s</p>
    `;
}

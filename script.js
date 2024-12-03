const apiKey = "561b69d1d757ad8c1e2e38623a317808";
const form = document.getElementById("weatherForm");
const weatherDisplay = document.getElementById("weatherDisplay");

form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const city = document.getElementById("city").value;

    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        );
        if (!response.ok) throw new Error("City not found");

        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        weatherDisplay.innerHTML = `<p class="error">${error.message}</p>`;
    }
});

function displayWeather(data) {
    weatherDisplay.innerHTML = `
        <h2>${data.name}, ${data.sys.country}</h2>
        <p>Temperature: ${data.main.temp}°C</p>
        <p>Weather: ${data.weather[0].description}</p>
        <p>Humidity: ${data.main.humidity}%</p>
        <p>Wind Speed: ${data.wind.speed} m/s</p>
    `;
}

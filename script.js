const apiKey = "YOUR_API_KEY";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=London&appid=" + apiKey;

fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        document.getElementById("data-display").innerHTML = `
            <p>Location: ${data.name}</p>
            <p>Temperature: ${data.main.temp}°C</p>
        `;
    })
    .catch(error => console.error("Error fetching data:", error));

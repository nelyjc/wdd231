const apiKey = 'YOUR_API_KEY';
const city = 'Provo';
const weatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`;
const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=imperial&appid=${apiKey}`;

async function fetchWeather() {
  const weatherRes = await fetch(weatherURL);
  const weatherData = await weatherRes.json();

  document.querySelector(".weather p:nth-child(2)").innerHTML = weatherData.weather[0].description;
  document.querySelector(".weather p:nth-child(1)").innerHTML = `<strong>${Math.round(weatherData.main.temp)}°F</strong>`;
}

async function fetchForecast() {
  const forecastRes = await fetch(forecastURL);
  const forecastData = await forecastRes.json();

  // Get forecasts at 12:00 PM daily
  const daily = forecastData.list.filter(item => item.dt_txt.includes("12:00:00"));
  
  const forecastSection = document.querySelector(".forecast");
  forecastSection.innerHTML = `<h3>3-Day Forecast</h3>`;

  daily.slice(0, 3).forEach((day, index) => {
    const date = new Date(day.dt_txt);
    const dayName = date.toLocaleDateString('en-US', { weekday: 'long' });
    const temp = Math.round(day.main.temp);
    forecastSection.innerHTML += `<p>${dayName}: <strong>${temp}°F</strong></p>`;
  });
}

fetchWeather();
fetchForecast();

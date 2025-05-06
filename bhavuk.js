let current = 0;
const images = document.querySelectorAll('#slider img');

function showNextImage() {
  images[current].classList.remove('active');
  current = (current + 1) % images.length;
  images[current].classList.add('active');
}
setInterval(showNextImage, 3000); // Change every 3 seconds

// Weather Fetcher (OpenWeatherMap API - requires your API key)
async function fetchWeather() {
  const apiKey = 'YOUR_API_KEY';
  const city = 'Srinagar';
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

  try {
    const res = await fetch(url);
    const data = await res.json();
    document.getElementById('weather').innerText =
      `Current Weather in Srinagar: ${data.main.temp}°C, ${data.weather[0].description}`;
  } catch (err) {
    document.getElementById('weather').innerText = 'Failed to load weather.';
  }

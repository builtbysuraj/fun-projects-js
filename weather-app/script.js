const weatherData = document.getElementsByClassName("result")
const cityInput = document.getElementsByClassName("city-input")

const formEle = document.querySelector("form")

formEle.addEventListener("submit", (e) => {
  e.preventDefault();
  const cityData = cityInput[0].value;
  fetchData(cityData)
})

async function fetchData(cityData) {
  try {
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityData}&units=metric&appid=042e71ee377d977cc9b928e4c75dedb3`)
    if (!res.ok) console.log("Responce is not OK!")
    const data = await res.json()

    const { weather: [{ description, icon }], main: { temp, feels_like, humidity }, wind: { speed } } = data

    const details = [
      `Feels like: ${Math.round(feels_like)}°C`,
      `Humidity: ${humidity}%`,
      `Wind Speed: ${speed}m/s`
    ]

    weatherData[0].querySelector(".icon").innerHTML = `<img src="http://openweathermap.org/img/wn/${icon}.png" alt="weather icon">`

    weatherData[0].querySelector(".temp").textContent = `${temp}°C
    `
    weatherData[0].querySelector(".desc").textContent = `${description}`

    weatherData[0].querySelector(".extra-details").innerHTML = details.map((detail) => `<div>${detail}</div>`).join("")

  } catch (error) {
    weatherData[0].innerHTML = "<h1>Please enter valid city name!</h1>"
  }
}

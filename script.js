let weather = {
  apiKey: "a00a2dc952e36dcd3368586deaae6858",
  fetchWeather: function (city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&appid=" +
        this.apiKey
    )
      .then((response) => response.json())
      .then((data) => this.displayWeather(data));
  },
  displayWeather : function(data) {
    const { name } = data;
    const { icon, description } = data.weather;
    const { temp, humidity } = data.main;
    const { speed } = data.wind;
    console.log(name,icon,description,temp,humidity,speed)
  }
};

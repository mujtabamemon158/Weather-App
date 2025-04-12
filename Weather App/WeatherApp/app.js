function weatherApp() {
    const API_KEY = "191cfefc3be3825fdefe76536ac2813f";
  
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`)
      .then(function(response) {
        const temp = response.data.main.temp;
        const humidity = response.data.main.humidity;
        const windSpeed = response.data.wind.speed;
        const windSpeedKmH = Math.floor(windSpeed * 3.6);
        const weatherMain = response.data.weather[0].main;k
        const fetchedCityName = response.data.name;
  
        let weatherIcon = "";
  
        if (weatherMain.toLowerCase() === "clear") {
          weatherIcon = "./clear.png";
        } else if (weatherMain.toLowerCase() === "clouds") {
          weatherIcon = "./clouds.png";
        } else if (weatherMain.toLowerCase() === "rain") {
          weatherIcon = "./rain.png";
        } else if (weatherMain.toLowerCase() === "snow") {
          weatherIcon = "./snow.png";
        } else {
          weatherIcon = "./humid.png";
        }
  
        document.querySelector("#result").innerHTML = `
        <div class="weather-info">
          <img src="${weatherIcon}" alt="Weather" class="weather-img"/>
          <p style="font-size:47px; font-family:sans-serif; margin-bottom:5px;"><b>${temp}</b>°C</p>
          <p style="font-size: 27px; font-family: sans-serif; margin-bottom: 13px; color: white;">${fetchedCityName}</p>
          <div style="display: flex; align-items: center; margin-top:18px; gap: 20px; ">
            <div style="display: flex; align-items: center;  gap: 64px;">
              <div style="text-align: center;">
                <i class='bx bx-droplet icon' style="font-size:30px; display: inline-block; position:relative; bottom:8px; margin-right:7px;"></i>
                <span style="font-size:23px;">${humidity}%</span>
                <p style=" font-weight:300; font-size:17px; position: relative; right:-29px;">Humidity</p>
              </div>
      
              <div style="text-align: center;">
                <i class='bx bx-wind icon' style="font-size:30px; display: inline-block; position:relative; bottom:8px; margin-right:7px;"></i>
                <span style="font-size:23px;">${windSpeedKmH} km/h</span>
                <p style="margin-left:46px; font-weight:300; font-size:17px;">Wind Speed</p>
              </div>
            </div>
          </div>
        </div>
      </div>`;
    })
      .catch(function(error) {
        document.querySelector("#result").innerHTML = `
          <div class="not-found" style="margin-bottom:50px;">
          <i class='bx bxs-error' style="font-size: 180px; color:rgb(217, 255, 0); margin-bottom: 20px;"></i>
          <div class="txt" style="text-align: center; position: relative; bottom: 16px;">
          <h2 style=" font-size: 53px; font-family:sans-serif;">404</h2>
          <p style="font-size: 28px;">Location not found!</p>
          </div>
          </div>
          `;
      });
  
  }
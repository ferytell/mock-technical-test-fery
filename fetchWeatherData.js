/*
kita ambil data dari https://openweathermap.org
kita pilih yg https://openweathermap.org/forecast5 (Call 5 day / 3 hour forecast data)
API ini mengupdate data tiap 3 jam sekali, untuk 5 hari kedepan,
sehingga dalam 5 hari diambil sebanyak 40 Titik, 
disini kita hanya membutuhkan 5 titik, sehingga data temperatur akan kita ambil rata-rata perharinya.
dari API kita membutuhkan data 
"dt" (dateTime) and "temp" ("temperature didalam array main")

{
  cod: '200',
  message: 0,
  cnt: 40,
  list: [
    {
      dt: 1692370800,
      main: [Object],
      weather: [Array],
      clouds: [Object],
      wind: [Object],
      visibility: 10000,
      pop: 0.03,
      sys: [Object],
      dt_txt: '2023-08-18 15:00:00'
    },
    {
      dt: 1692381600,
      main: [Object],
      weather: [Array],
      clouds: [Object],
      wind: [Object],
      visibility: 10000,
      pop: 0,
      sys: [Object],
      dt_txt: '2023-08-18 18:00:00'
    },
    ....

    {
      dt: 1692792000,
      main: [Object],
      weather: [Array],
      clouds: [Object],
      wind: [Object],
      visibility: 10000,
      pop: 0,
      sys: [Object],
      dt_txt: '2023-08-23 12:00:00'
    }
  ],
  city: {
    id: 1642911,
    name: 'Jakarta',
    country: 'ID',
    population: 8540121,
    timezone: 25200,
    sunrise: 1692313155,
    sunset: 1692356059
  }
}

*/

async function fetchWeatherData(city) {
    const apiKey = '16df5bedd15cb3472a6e04a2c3e8e40d';  // harusnya key kayak gini disecure ke ENV var, tapi gpp lah biar cepet, gratis ini kok T..T
    const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`;
  
    try {
        const response = await fetch(apiUrl);
        return await response.json();
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}
  
function displayWeatherForecast(weatherList) {
    const dateFormatter = new Intl.DateTimeFormat('en-GB', {
      weekday: 'short',
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    });

    const forecastData = []; // Array untuk menyimpan data prediksi cuaca
    
    // variable untuk menyimpan data tanggal ygdipakai, dan temperatur 
    let currentDate = null;
    let currentTempSum = 0;
    let currentTempCount = 0;

    for (const weather of weatherList) {
      const timestamp = weather.dt * 1000;
      const date = new Date(timestamp);
      const formattedDate = dateFormatter.format(date);
      
      const temperature = weather.main.temp;
  
      // check kesamaan tanggal
      if (formattedDate !== currentDate) {
        if (currentDate !== null) {
          const meanTemperature = currentTempSum / currentTempCount;
          const convertedTemperature = meanTemperature - 273.15; // Convert dari Kelvin(default) ke Celsius
          forecastData.push(`${currentDate}: ${convertedTemperature.toFixed(2)}°C`); // Push ke array
        }
  
        // Reset variable
        currentDate = formattedDate;
        currentTempSum = temperature;
        currentTempCount = 1;
      } else {
        // jika harinya beda, kita jumlahkan temperatur (untuk dicari rata-rata)
        currentTempSum += temperature;
        currentTempCount++;
      }
    }
    
    // Push temperatur mean kalo harinya habis di loop
    if (currentDate !== null) {
      const meanTemperature = currentTempSum / currentTempCount;
      forecastData.push(`${currentDate}: ${meanTemperature.toFixed(2)}°C`); // Push ke array
    }

    console.log("Weather Forecast:");
    forecastData.forEach(data => {
      console.log(data);
    });
  }


  
fetchWeatherData('Jakarta')
    .then(data => {
      const weatherList = data.list;
      displayWeatherForecast(weatherList);
 });

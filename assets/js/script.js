/* 
    Use the current weather API (https://openweathermap.org/current)
     to display the current weather and other info of the city entered
      by the user in the input after the user presses enter on the input.
*/
// look up how to add different things about the city and so on 
// how to use latitude and longitude
// FOR HOME WORK: current weather and forecast

var API_KEY="5f548afedc6a68bc83c6221ef67beab8"; 
var city="cityNameInput"
var weatherForecast = {
    "async": true,
    "crossDomain": true,
    "url": "https://openweathermap.org/forecast/daily?q=cityNameInput"
}
// ADD CURRENT WIND SPEED AND UV INDEX 
document.getElementById("cityForm").addEventListener("submit",function(event) {
    event.preventDefault();
    var cityName=document.getElementById("cityNameInput").value;
    if(!cityName) {
        alert("Please enter the name of a city.");
    } else {
        document.getElementById("cityName").innerText=cityName;

        var requestUrl="http://api.openweathermap.org/data/2.5/weather?q="+cityName+"&appid="+API_KEY;

        fetch(requestUrl).then(function(response) {
            if(!response.ok) {
                alert("No information found for "+cityName);
            } 
            return response.json();
            
        }).then(function(data) {
            console.log(data);

            document.getElementById("currentTemperature").innerText= Math.round(data.main.temp-273.15);
            document.getElementById("currentHumidity").innerText=data.main.humidity;
        })
    }

})

// api.openweathermap.org/data/2.5/forecast?q={city name}&appid={5f548afedc6a68bc83c6221ef67beab8}
//https://openweathermap.org/forecast5#parameter
/*
function getWeatherForecast(cityName) {               
    $get("https://api.openweathermap.org/data/2.5/forecast")+cityName&API_KEY
    //.openweathermap.org/data/2.5/weather?q=cityName&appid:{API_KEY="5f548afedc6a68bc83c6221ef67beab8"}
var getForcast
{
    "coord"; {
      "lon"; -0.13,
      "lat"; 51.51
    }

    "weather"; [
      {
        "id": 300,
        "main": "Drizzle",
        "description": "light intensity drizzle",
        "icon": "09d"
      }
    ],
    "base"; "stations",
    "main"; {
      "temp"; 280.32,
      "pressure"; 1012,
      "humidity"; 81,
      "temp_min"; 279.15,
      "temp_max"; 281.15
    }
    "visibility"; 10000,
    "wind"; {
      "speed"; 4.1,
      "deg"; 80
    }
    "clouds"; {
      "all"; 90
    }
    "dt"; 1485789600,
    "sys"; {
      "type"; 1,
      "id"; 5091,
      "message"; 0.0103,
      "country"; "GB",
      "sunrise"; 1485762037,
      "sunset"; 1485794875
    }
    "id"; 2643743,
    "name"; "London",
    "cod"; 200
  }
                          
}
    */                  

/* 

var key = "YOUR KEY";
var city = "YOUR CITY"; // My test case was "London"
var url = "https://api.openweathermap.org/data/2.5/forecast";

$.ajax({
  url: url, //API Call
  dataType: "json",
  type: "GET",
  data: {
    q: city,
    appid: key,
    units: "metric",
    cnt: "10"
  },
  success: function(data) {
    console.log('Received data:', data) // For testing
    var wf = "";
    wf += "<h2>" + data.city.name + "</h2>"; // City (displays once)
    $.each(data.list, function(index, val) {
      wf += "<p>" // Opening paragraph tag
      wf += "<b>Day " + index + "</b>: " // Day
      wf += val.main.temp + "&degC" // Temperature
      wf += "<span> | " + val.weather[0].description + "</span>"; // Description
      wf += "<img src='https://openweathermap.org/img/w/" + val.weather[0].icon + ".png'>" // Icon
      wf += "</p>" // Closing paragraph tag
    });
    $("#showWeatherForcast").html(wf);
  }
});

*/
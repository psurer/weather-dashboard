/*
//function to get current date
$(document).ready(function(){
    $("#hello2").text(moment().format("L"));
});

//function to convert temperature to Fahrenheit
function temperatureConverter(valNum) {
    valNum = parseFloat(valNum);
    document.getElementById("outputFahrenheit").innerHTML=((valNum-273.15)*1.8)+32;
    
  }

//function to get current weather
document.getElementById("cityForm").addEventListener("submit",function(event) {
    event.preventDefault();
    var cityName=document.getElementById("cityNameInput").value;
    
    if(!cityName) {
        alert("Please enter the name of a city.");
    } else {
        document.getElementById("cityName").innerText=cityName;

        var requestUrl="http://api.openweathermap.org/data/2.5/weather?q="+cityName+"&appid=befebd5c21afa73e074ce366b9c1c094";
        var fiveDayRequestUrl="http://api.openweathermap.org/geo/1.0/direct?q="+cityName+"&limit=5&appid=befebd5c21afa73e074ce366b9c1c094";
        

        fetch(requestUrl).then(function(response) {
            if(!response.ok) {
                alert("No information found for "+cityName);
            } 
            return response.json();
          
        }).then(function(data) {
            console.log(data);

            document.getElementById("currentTemperature").innerText=temperatureConverter(data.main.temp);
            document.getElementById("currentHumidity").innerText=data.main.humidity;
            document.getElementById("currentWind").innerText=data.wind.speed;
           // document.getElementById("currentIndex").innerText=data.main.uvi;

        })
        
       //function to get five day forecast     
        fetch(fiveDayRequestUrl).then(function(response) {
            return response.json();
            }).then(function(data) {
            console.log(data);
   
        var latitude=data[0].lat;
        var longitude=data[0].lon;

        var forecastRequestUrl="https://api.openweathermap.org/data/2.5/onecall?lat="+latitude+"&lon="+longitude+"&appid=befebd5c21afa73e074ce366b9c1c094";
  
        fetch(forecastRequestUrl).then(function(response) {
            return response.json();
            }).then(function(data) {
    
            console.log(data.daily);

            var forecast = ["0","1","2","3","4"];
            console.log(forecast.length);

            for(var i=0; i<data.daily.length; i++) {

                console.log("Temp:"+data.daily[i]);

            document.getElementById("forecastWeather1").innerText=data.daily.temp;
            document.getElementById("forecastWeather2").innerText=data.daily.temp;
            document.getElementById("forecastWeather3").innerText=data.daily.temp;
            document.getElementById("forecastWeather4").innerText=data.daily.temp;
            document.getElementById("forecastWeather5").innerText=data.daily.temp;
            
          
                
            }

    })
})
    }
});


//getting dates for five day forecast
$(document).ready(function(){
    $("#hello3").text(moment().add( 1, "days").calender());
});

$(document).ready(function(){
    $("#hello4").text(moment().format("L"));
});

$(document).ready(function(){
    $("#hello5").text(moment().format("L"));
});

$(document).ready(function(){
    $("#hello6").text(moment().format("L"));
});

$(document).ready(function(){
    $("#hello7").text(moment().format("L"));
});



*/
/* 
    Use the current weather API (https://openweathermap.org/current)
     to display the current weather and other info of the city entered
      by the user in the input after the user presses enter on the input.
*/
// look up how to add different things about the city and so on 
// how to use latitude and longitude
// FOR HOME WORK: current weather and forecast

//function to get current date
$(document).ready(function(){
  $("#hello2").text(moment().format("L"));
});


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
            //converts kelvin to celsius with formula of -273
            document.getElementById("currentTemperature").innerText= Math.round(data.main.temp-273.15);
            document.getElementById("currentHumidity").innerText=data.main.humidity;
            document.getElementById("currentWindSpeed").innerText=data.wind.speed;
            document.getElementById("uvIndex").innerText=data.main.uvi;
        })
    }
})

fetch(fiveDayRequestUrl).then(function(response) {
  return response.json();
  }).then(function(data) {
  console.log(data);

var latitude=data[0].lat;
var longitude=data[0].lon;

var forecastRequestUrl="https://api.openweathermap.org/data/2.5/onecall?lat="+latitude+"&lon="+longitude+"&appid=befebd5c21afa73e074ce366b9c1c094";

fetch(forecastRequestUrl).then(function(response) {
  return response.json();
  }).then(function(data) {

  console.log(data.daily);

  var forecast = ["0","1","2","3","4"];
  console.log(forecast.length);

  for(var i=0; i<data.daily.length; i++) {

      console.log("Temp:"+data.daily[i]);

  document.getElementById("forecastWeather1").innerText=data.daily.temp;
  document.getElementById("forecastWeather2").innerText=data.daily.temp;
  document.getElementById("forecastWeather3").innerText=data.daily.temp;
  document.getElementById("forecastWeather4").innerText=data.daily.temp;
  document.getElementById("forecastWeather5").innerText=data.daily.temp;
  }
})
})

//getting dates for five day forecast
$(document).ready(function(){
$("#hello3").text(moment().add( 1, "days").calender());
});

$(document).ready(function(){
$("#hello4").text(moment().format("L"));
});

$(document).ready(function(){
$("#hello5").text(moment().format("L"));
});

$(document).ready(function(){
$("#hello6").text(moment().format("L"));
});

$(document).ready(function(){
$("#hello7").text(moment().format("L"));
});



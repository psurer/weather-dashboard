//SETS CURRENT DATE
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


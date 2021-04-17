/* 
    Use the current weather API (https://openweathermap.org/current)
     to display the current weather and other info of the city entered
      by the user in the input after the user presses enter on the input.
*/
// look up how to add different things about the city and so on 
// how to use latitude and longitude
// FOR HOME WORK: current weather and forecast
var API_KEY="5f548afedc6a68bc83c6221ef67beab8"; 
var weatherForecast = {
    "async": true,
    "crossDomain": true,
    "url": "https://openweathermap.org/forecast/daily?q=cityNameInput"
}
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

// A base example: http://api.openweathermap.org/data/2.5/weather?q=San%20Francisco&mode=json&units=imperial&appid=93b03ba103c6cabec96f47a6f650769e
//here's the Hack Reactor key: appid=93b03ba103c6cabec96f47a6f650769e

let formData = "Honolulu" //will break if string includes spaces ('New York' must be 'New%20York'): need to fix or ignore
let createURL = "http://api.openweathermap.org/data/2.5/weather?q=" + formData + "&mode=json&units=imperial&APPID=93b03ba103c6cabec96f47a6f650769e"

$.getJSON(createURL, function(data){

    //log full data set for dev reference
    console.log("All data returned: ", data)

    //icon code for .png image
    let currWeatherImg = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png"
    let dataOut = {
      temp: data.main.temp, //should be Fahrenheit if all goes well above at 'createURL'
      humidity: data.main.humidity, //percentage
      precip: data.rain, //amt in mm; doesn't exist for all locations
      clouds: data.clouds.all //percentage
    }
    console.log("Our data points for algorithm, etc.", dataOut) //to be sent to algorithm

    // Display weather info to page
    $('body').append("Weather for " + formData + " looks like:<br>")
    $('body').append("<img src='"+ currWeatherImg + "'>")
    $('body').append("<br>Temperature currently sits at " + data.main.temp + " degrees<br>")
    $('body').append("<br>Current humidity is " + data.main.humidity + "%<br>")
    $('body').append("<br>Amount of precipitation " + data.rain + " mm")
    $('body').append("<br>With current cloud cover at " + data.clouds.all + "%")
  }
)

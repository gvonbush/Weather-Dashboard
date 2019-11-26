function citySearch(userInput){
    $.ajax ({
        type: "GET", 
        url:"http://api.openweathermap.org/data/2.5/weather?q=" + userInput + "&appid=80a59971625ee308a377e571248f4613",
        dataType:"JSON",
        success: function(data){
            console.log(data)
            var display = $(".card")
            var dt = new Date(data.dt)
            var date = $("<h3>").text(Date(data.dt))
            var city = $("<h3>").text("City: " + data.name)
            
            var temperature = $("<h3>").text("Temperature: " + Math.floor(data.main.temp) + " °F")
            var humidity = $("<h3>").text("Humidity: " + data.main.humidity + "%")
            var wind = $("<h3>").text("Wind Speed: " + data.wind.speed + " mph")
            display.append(date)
            display.append(city)
            display.append(temperature)
            display.append(humidity)
            display.append(wind)


        }
    })


}
function fiveDay(userInput){


$.ajax ({
    type: "GET",
    url:"http://api.openweathermap.org/data/2.5/forecast?q=" + userInput + "&appid=80a59971625ee308a377e571248f4613",
    dataType:"JSON",
    success: function(data){
        console.log(data)
        var display = $("#5day")
        for (i=0; i<5; i++){
            var results = data.list[i]
            console.log(results)
            var dt = new Date(results.dt)
            var date = $("<h3>").text(Date(results.dt))
            var city = $("<h3>").text("City: " + results.name)
            var temperature = $("<h3>").text("Temperature: " + Math.floor(results.main.temp) + " °F")
            var humidity = $("<h3>").text("Humidity: " + results.main.humidity + "%")
            console.log(date)
            var col = $("<div>").addClass(".col-md-2");
            var card = $("<div>").addClass(".card");
            var cardBody = $("<div>").addClass(".card-body");
            var cardTitle = $("<div>").addClass(".card-title");
            var cardText = $("<div>").addClass(".card-text");
            col.append(card.append(cardBody.append(cardTitle)))
            
        }

    }
})
}
$("#button-addon2").click(function(event){
    var city_search = $("#citySearch").val()
    citySearch(city_search + "&units=imperial")
})
citySearch("Baltimore&units=imperial")
fiveDay("Baltimore")


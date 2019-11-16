function weather (coordinates) {
    var request = new XMLHttpRequest();
    request.open('GET', 'api.openweathermap.org/data/2.5/weather?lat=35&lon=139', true);
    request.onload = function() {
        var data = JSON.parse(this.response);
    }
}


// Client ID
// rPVqkJgPmps

// Client secret
// 2iADvq4vIO98TmyWmS0T4HLn1eQdEmgSbao46HbprnN1HtucHY7R6A


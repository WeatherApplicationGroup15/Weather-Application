/**  geo weather 
*Function that changes the homeloc div.
*If the it is able to get the cordinates of the user then it will send it to the temp and summary div
*Else it will say an error message if an error occurs
*/
function geo() {
    /**
     * used to get home location
     * @type {String}
     */
    var home = document.getElementById("homeloc");

    /**
     * Stores API key
     * @type {String}
     */
    var apiKey = "7727724c91d385de32cc9af5b98f52fd";

    /**
     * Used in conjunction with API Key for weather
     * @type {String}
     */
    var url = 'https://api.forecast.io/forecast/';

    navigator.geolocation.getCurrentPosition(success, error);
    /** success functions that returns the temp and summary from the forecast */
    function success(position) {
        /**
         * Used to store latitude
         * @type {String}
         */
        var latitude = position.coords.latitude;

        /**
         * Used to store longitude
         * @type {String}
         */
        var longitude = position.coords.longitude;

        home.innerHTML = "Current location";

        $.getJSON(url + apiKey + "/" + latitude + "," + longitude + "?callback=?", function(data) {
        $('#temp').html(Math.round((data.currently.temperature-32) * 5 / 9) + '° C');
        $('#summary').html(data.currently.summary);
      });
    }
    /** 
     * error message
     */
    function error() {
        home.innerHTML = "Unable to retrieve your location. Please turn on location.";
    }
}

geo();

/** Map Window 
*Just a Map that changes with the lng and lat
*/
function theMap() {
    var map = new google.maps.Map(document.getElementById('mapbox'), {
        center: {
            lat: parseInt(document.getElementById("lat").innerHTML),
            lng: parseInt(document.getElementById("lng").innerHTML)
        },
        zoom: 7,
        draggable: false,
        fullscreenControl: false,
        streetViewControl: false,
        mapTypeControl: false,
        zoomControl: false
    });
}

/** 
 * refreshs the map
 */
google.maps.event.addDomListener(window, 'load', theMap);

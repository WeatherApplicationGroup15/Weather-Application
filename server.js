const express = require('express');
const request = require('request')
const hbs = require('hbs');
const bodyParser = require('body-parser');
const fs = require('fs');

/**
 * Used for the express() module.
 * @type {Object}
 */
var app = express();


/**
 * builds a dictionary to be used for locations
 * @type {Object}
 */
var dict = {};

/**
 * Build a list to save searched location
 * @type {Array}
 */
var history = [];

/**
 * String used to log text.
 * @type {String}
 */
var log_text = "";


app.set('view engine', 'hbs')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static(__dirname + '/public'));


/**
 * used to access /public/ directory
 * @type {[type]}
 */
var dpub = __dirname + '/public/'
console.log(dpub)

app.get('/', (request, response) => {
    response.render(dpub + 'App.hbs');
});

app.post('/', function(request, response) {
    dict = {};
    console.log(request.body["City"]);
    get_dict(request.body["City"]);

    setTimeout(()=> {
        history.push(dict);
        write_file(history);
        response.render(dpub + 'App.hbs',{location: dict["location"], temperature: dict["temperature"] + "°C", summary: dict["summary"], latitude: dict["lat"], longitude: dict["lng"], file: read_file()});

    }, 2000)
   
    
})


/**
 * Used for location
 * @param  {String} location location searched for 
 */
function get_dict(location){
    get_location(location)
};


/**
 * Finds the location using Google Maps API.
 * @param {string} place - represents the coordinates of a location.
 */
function get_location(place){
    var link = `http://maps.googleapis.com/maps/api/geocode/json?address=${place}`
    request ({
        url: link,
        json: true
    },
    (error, response, body) => {
        if (body.status === "OK"){
            dict.location = place
            /**
             * Used to store latitude
             * @type {String}
             */
            var lat = (body.results[0].geometry["location"].lat);

            /**
             * Used to store longitue
             * @type {String}
             */
            var lng = (body.results[0].geometry["location"].lng);
            dict.lat = lat
            dict.lng = lng
            get_weather(lat, lng)
        } else if (body.status != "OK"){
            console.log("Limit reached, please wait for a while")
        }

    })

}


/**
 * Gets the weather and returns a dictionary with the weather information.
 * @param {string} lat - The latitude of the location.
 * @param {string} lng - the longitude of the location.
 */
function get_weather(lat, lng){
    var link = `https://api.darksky.net/forecast/b10f1155187ae53296449ef6730b03d3/${lat},${lng}`;
    request({
        url: link,
        json: true
    },
    (error, response, body) => {
        if (!('code' in body)){
            dict.temperature = Math.round((body.currently["temperature"]-32) * 5 / 9);
            dict.summary = body.currently["summary"];
            return
        }
    })
}


/**
 * Appends list into search.json.
 * @param {array} list - writes a list object into a json file.
 */
function write_file(list){
        fs.writeFileSync("search.json", JSON.stringify(list)); 
};


/**
 * reads a Json file and returns it into a string
 */
function read_file(){
    file = fs.readFileSync("search.json")
    var index_file = (-1 + JSON.parse(file.toString()).length)
    var file_cont = Object.values(JSON.parse(file.toString()))[index_file]["location"]
    log_text = log_text + file_cont + "<br>"
    return log_text
}


/**
 * makes the server accessable via an internet browser
 */
app.listen(8070, () => {
    console.log('server is up on port 8080');
});
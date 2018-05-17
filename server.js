const express = require('express');
const hbs = require('hbs');
const bodyParser = require('body-parser');
const fs = require('fs');

const geo = require("./geolocation.js")
const news = require("./news.js")

const forecast = require("./5days.js")
const pixabay = require("./pixabay.js")
const places = require("./attract.js")
const reviews = require("./reviews.js")

var uri = "mongodb+srv://Website:Gundam123@weatherhistory-cw0lw.mongodb.net/test?retryWrites=true";

const keys = get_keys()
/**
 * Variable used to use express() module
 * @type {object}
 */
var app = express();

/**
 * Variable used to store search history
 * @type {array}
 */
var history = [];

/**
 * Variable used for log text
 * @type {string}
 */
var log_text = "";
app.set('view engine', 'hbs')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(__dirname + '/public'));


/**
 * Variable used to access the /public/ directory.
 * @type {string}
 */
var dpub = __dirname + '/public/'

app.get('/', (request, response) => {
    response.render(dpub + 'App.hbs', {
        "apikey": keys.googlemaps
    });
});
//
app.post('/', function(request, response) {
    console.log(request.body)
    if(request.body.task === "find"){
        promise_hell(request, response)
    }
    else if (request.body.task === "get_ratings"){
        //response.send(JSON.stringify({message: "this worked"}))
        //console.log(request.body.query)
        reviews.database(request.body.query, uri, "find").then((data)=>{
            response.send(JSON.stringify(data))
        })
    }
    else if (request.body.task === "post_rating"){
        console.log("rating posted")
    }

    
})

/**
 * Functions to request all the info that is needed to build the BCITours website.
 * Each is a promise function that retrieves a separate piece of data. 
 * One is for obtaining the location searched for, one is for changing the picture shown 
 * on the background, one is to obtain the news that are going to be shown, and one for
 * obtaining the 5-day weather forecast of the place that was searched.
 * @param  {object} request  used to call promises
 * @param  {object} response the response to the promises called
 * @return {array}  Several info is returned, all of it is used to built the website.
 */
function promise_hell(request, response){
    var returning_data = {}
    var location = request.body["location"]
    var filter = request.body["filter"]

        geo.get_location(location, keys.geolocation).then((dictionary) => {
            returning_data["location"] = dictionary
            return places.places(returning_data.location["lat"], returning_data.location["long"], request.body["filter"], keys.googleplaces)
            .then((dictionary)=>{
                returning_data["places"] = dictionary
                return pixabay.city_background(location, keys.pixabay)
                .then((dictionary) => {
                    returning_data["background"] = dictionary
                    return news.NewsHeading(location, keys.news)
                        .then((dictionary) => {
                            returning_data["headlines"] = dictionary
                            return forecast.forecast5days(returning_data.location["location"], keys.worldweatheronline)
                                .then((dictionary)=>{
                            returning_data["weather"]=dictionary
                            returning_data["error"]="None"
                            response.send(JSON.stringify(returning_data))
                                },(error)=>{
                                    console.log(error)
                                })
                        }, (error)=>{
                            console.log(error);
                        })
                }, (error)=>{
                        console.log(error);
                })
            }, (error) => {
                response.send(JSON.stringify(error))
            })
        ,(error)=>{
            console.log(error)
        }})
}


/**
 * Appends list into search.json.
 * @param {array} list - writes a list object into a json file.
 */
function write_file(list) {
    fs.writeFileSync("search.json", JSON.stringify(list));
};

/**
 * Reads the json file containing the API keys used in the website
 * @return {array} Array containing all the API keys used.
 */
function get_keys() {
    file = fs.readFileSync("Apikeys.json")
    return JSON.parse(file)
}

function callback_hell(){
    
}

/**
 * Makes the server accessable via an internet browser.
 */
app.listen(8080, () => {
    console.log('server is up on port 8080');
});
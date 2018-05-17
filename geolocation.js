const request = require('request')

/**
 * Find the location searched for used google API.
 * @param  {string} place the location that will be obtained
 * @param  {string} key   google API key used to obtain location
 * @return {object}       contains all the info needed to obtain the location info
 */
module.exports.get_location = function(place, key) {
    var dict = {}
    var link = `https://maps.googleapis.com/maps/api/geocode/json?address=${place}&key=${key}`
    return new Promise((resolve, reject) => {
        request({
                url: link,
                json: true
            },
            (err, resp, body) => {
                const types = body.results[0].address_components[0].types
                if (body.status === "OK" && types.indexOf("locality")>= 0) {
                    dict.location = (body.results[0].address_components[0].long_name)
                    dict.lat = (body.results[0].geometry["location"].lat);
                    dict.long = (body.results[0].geometry["location"].lng);
                    resolve(dict)
                }
                else if(types.indexOf('locality')== -1){
                    dict["error"] = "Please select a city"
                    reject(dict)
                }
                else {
                    reject(body.status)
                }
            })
    })
}
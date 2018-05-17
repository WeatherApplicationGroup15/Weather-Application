const request = require("request");


/**
 * Function use to build a list of points of interested in the nearby area of the location searched for.
 * @param  {string} lat    latitude coordinates of the location searched for
 * @param  {string} lng    longitude coordinates of the location searched for
 * @param  {(string|Array.)} filter a list the user can use to filter the points of interest searched for
 * @param  {string} key    API key used to obtain the points of interest in the nearby are of the location searched for.
 * @return {object}        Contains all the info to populate the map with nearby points of interest based on the location searched for
 */
module.exports.places = function(lat, lng, filter, key){
	var dict_place = {}
	var link = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lng}&type=${filter}&radius=10000&opennow&key=${key}`
	return new Promise((resolve, reject) => {
		request({
			url: link,
			json: true
		},
		(eer, resp, body) => {
			temp = 0
			if (!("ok" in body)) {
                var bodylength = body["results"].length
				for(var i=0; i<bodylength; i++){
					count = i + 1
					place_dict = {}
					place_dict["geometry"] = body["results"][i].geometry.location
					place_dict["title"] = body["results"][i].name
					place_dict["rating"] = body["results"][i].rating
                    place_dict["address"] = body["results"][i].vicinity
                    dict_place["place"+count] = place_dict
				}
				resolve(dict_place)
			}
			reject(dict_place)
		})
	})
}
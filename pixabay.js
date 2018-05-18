const request = require('request')

/**
 * Changed the background picture based on the location that was searched for.
 * @param  {String} place Location that the user searches for.
 * @param  {String} key   API key used for pixabay to obtain and display pictures.
 * @return {object}       Contains all  the info used to obtain and display a picture on the website background.
 */
module.exports.city_background = function(place, key){
    var dict_bg = {}
    var link = `https://pixabay.com/api/?key=${key}&q=${place}&image_type=photo`
    return new Promise((resolve, reject) => {
        request({
            url:link,
            json:true
        },
        (err, resp, body) => {
            if (body.totalHits == 0) {
                dict_bg = "https://www.plant.ca/wp-content/uploads/2014/08/Beijingahenobarbus.jpg"
            } else {
                dict_bg = (body.hits[0].largeImageURL);
            }
            resolve(dict_bg)
        })
    })
}


/**
pixabay('vancouver', 'YOUR KEY').then((dictionary) => {
    console.log(dictionary)
    
    }, (error) => {
    console.log(error)
} )*/


const mongoose = require("mongoose");


const ReviewSchema = mongoose.Schema({
    coor:String,
    author: String,
    review: String,
    rating: String,
    date: String
})

module.exports.database=function(dict, uri, action){
//function database(dict, uri, action){
    return new Promise((resolve, reject) =>{
    mongoose.connect(uri)
    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error'));
    db.once('open', function(){
        console.log("it worked")
        var userreview = mongoose.model('UserReview', ReviewSchema)
        //userreview.collection.drop()

        if (action === "add"){

            var hello = new userreview({ 
                    coor: JSON.stringify(dict["coor"]),
                    author: dict["author"],
                    review: dict["review"],
                    rating: dict["rating"],
                    date: dict["date"]
                });
            
            add_review(hello, userreview).then((status)=>{
                db.close()
                resolve("it saved")
            }, (error) =>{
                reject("did not save")
            })
        }
        
        else if(action === "find"){
            lookup(userreview, dict).then((item)=>{
                db.close()
                resolve(item)
            },(error) => {
                reject("could not find")
            })
        }

        else{
            findall(userreview).then((item)=>{
                db.close()
                resolve(item)
            },(error)=>{
                reject("could not find all")
            })
        }


    })
    })
}



/*
var reviewstring = "THIS PLACE SUX"
var uri = "mongodb+srv://Website:Gundam123@weatherhistory-cw0lw.mongodb.net/test?retryWrites=true";
var mockdict = {coor:{latitude:"49", longitude: "-122"}, author: "Buttsman the great", review: "THIS PLACE SUX2", rating: 0, date:"2018-05-14"}
var coor = {coor:{latitude:"50", longitude:"-1220"}}
*/
/*
atabase(mockdict, uri, "add").then((item)=>{
    console.log(item)
})

Database(coor, uri, "test").then((item)=>{
    console.log(item)
})

database(coor, uri, "find").then((item)=>{
    console.log(item)
})
*/

function add_review(entry, model){
    return new Promise((resolve, reject)=>{
        entry.save(function(err, info){
            if (err) reject("save failed");
            resolve("save worked")
        })
    })
}

function lookup(model, searchcoor){
    var searchcoor2 = JSON.stringify(searchcoor["coor"])
    return new Promise((resolve, reject)=>{
        model.find({coor:searchcoor2},function(err, info){
            if (err) reject(err);
            resolve(info)
        })
    })
}

function findall(model){
    return new Promise((resolve, reject)=>{
        model.find(function(err,info){
            if (err) reject (err);
            resolve(info)
        })
    })
}

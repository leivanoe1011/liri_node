
var fs = require("fs");

var appFuncObj = {
    spotifyCall: function(query){
        spotify
        .search({type: "track", query: "all the small things"})
        .then(function(response){
            console.log(response);
        })
        .catch(function(err){
            console.log(err);
        });
    },
    movieThis: function(query){

    var apiKey = "trilogy"
    var movieObj = query.split(" ");
    var movieName = "";

    for(var i = 0; i < movieObj.length; i++){
        movieName += movieObj[i] + "+";
    }

    // Remove the last plus sign
    movieName = substring(0, movieName.length - 1);
    
    // http://img.omdbapi.com/?apikey=[yourkey]&s=query

    axios
        .get("http://img.omdbapi.com/?apikey=" + apiKey + "&s=" + movieName)
        .then(function(response){
            console.log(response);
        })
        .catch(function(err){
            console.log(err);
        })
    },
    concertThis: function(query){
        axios.get("https://rest.bandsintown.com/artists/" 
        + query + "/events?app_id=codingbootcamp")
        .then(function(response){
            console.log(response);
        })
        .catch(function(err){
            console.log(err);
        })
        .finally(function(){
            console.log("finally");
        })
    },
    doWhatItSays: function(){
        fs.readFile("random.txt", "utf8", function(err, data){
            if(err){
                return console.log(err);
            }

            console.log(data);
        })
    }
}

module.exports = appFuncObj;


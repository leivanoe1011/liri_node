
// Load File System Package
var fs = require("fs");

// Load Axios package
var axios = require("axios");

// loads environment variables from a .env file
require("dotenv").config();

// Get Keys
var keys = require("./keys");

// Load Spotify package
var Spotify = require("node-spotify-api");

// Instantiate spotify object
var spotify = new Spotify(keys.spotify);

// Object used to export functions
var appFuncObj = {

    spotifyCall: function(queryEntry){

        // Pass the entry we received from the user
        var song = queryEntry;
        spotify.search({ type: 'track', query: song }, function(err, data) {
            
            if (err) {
              return console.log('Error occurred: ' + err);
            }
           
            var tracks = data.tracks;
            var items = tracks.items;

  
            for(var i = 0; i < items.length; i++){
                var currentItem = items[i];
                var artistNames = currentItem.album.artists;

                console.log(`Artist Name: ${artistNames[0].name}`);
                console.log(`Song name: ${song}`);
                console.log(`Preview url: ${currentItem.preview_url}`);
                console.log(`Album name: ${currentItem.album.name}`);

                console.log("*------------------------------------*\n")

            }
            
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






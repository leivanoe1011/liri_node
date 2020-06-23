
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


var printCommand = "";

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

                printCommand += `Artist Name: ${artistNames[0].name}\n`;
                printCommand += `Song name: ${song}\n`;
                printCommand += `Preview url: ${currentItem.preview_url}\n`;
                printCommand += `Album name: ${currentItem.album.name}\n`;
                printCommand += "*------------------------------------*\n";

                console.log(printCommand);

            }

            fs.writeFile("log.txt",printCommand, err =>{
                if(err){
                    return console.log(err);
                }
                console.log("The file saved!");
            });
            
        });

        

    },

    movieThis: function(query){

        // var apiKey = "trilogy"
        var movie = ((query === null) ? "Mr Nobody" : query);
        var movieObj = movie.split(" ");
        var movieName = "";
        var ombdCall = "http://www.omdbapi.com/?apikey=1f081b4a&t=";

        for(var i = 0; i < movieObj.length; i++){
            movieName += movieObj[i] + "+";
        }

        // Remove the last plus sign
        movieName = movieName.substring(0, movieName.length - 1);
        
        // append the Movie name to the API URL
        ombdCall += movieName;

        console.log(ombdCall);

        axios
            .get(ombdCall)
            .then(function(response){
                
                var data = response.data;

                printCommand += `Title: ${data.Title}\n`;
                printCommand += `Year: ${data.Year}\n`;
                printCommand += `Rated: ${data.Rated}\n`;
                printCommand += `Rotten Tomatoes Rating: ${data.Ratings[1].Value}\n`;
                printCommand += `Produced Country: ${data.Country}\n`;
                printCommand += `Language: ${data.Language}\n`;
                printCommand += `Plot of the Movie: ${data.Plot}\n`;
                printCommand += `Actors: ${data.Actors}\n`;
                printCommand += "*------------------------------------*\n";
   

                console.log(printCommand);

                fs.writeFile("log.txt",printCommand, err =>{
                    if(err){
                        return console.log(err);
                    }
                    console.log("The file saved!");
                });
                
            })
            .catch(function(err){
                console.log(err);
            })
    },

    concertThis: function(query){
        
        axios
            .get("https://rest.bandsintown.com/artists/" 
                + query + "/events?app_id=codingbootcamp")
            .then(function(response){
                var data = response.data;
                console.log(`Artist/Band Name: ${query.toUpperCase()}`);

                for(var i = 0; i < data.length; i++){
                    console.log(`Vanue Name: ${data[i].venue.name}`);
                    console.log(`Vanue Location: ${data[i].venue.country}`);
                    console.log(`Event Date: ${data[i].datetime}`);

                    console.log("*------------------------------------*\n");
                }
            })
            .catch(function(err){
                console.log(err);
            })
            .finally(function(){
                console.log("finally");
            })
    }
    
}

module.exports = appFuncObj;



// doWhatItSays: function(){
//     fs.readFile("random.txt", "utf8", function(err, data){
//         if(err){
//             return console.log(err);
//         }
//         returnCommand = data;
//     })
// }




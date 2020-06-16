
var axios = require("axios");

require("dotenv").config();

var keys = require("./keys");

var Spotify = require("node-spotify-api");

var spotify = new Spotify(keys.spotify);


// * `concert-this`

// * `spotify-this-song`

// * `movie-this`

// * `do-what-it-says`

// bands in town
//https://rest.bandsintown.com/artists/celine+dion/events?app_id=codingbootcamp

var appFunc = process.argv[2];
appFunc = ((appFunc === null ) ? appFunc :  appFunc.toLowerCase());


// Artist - Song
// We can pass blank artist
// We can pass blank song

var content = process.argv[3];
content = ((content !== null) ? content.toLowerCase() : content);


if(appFunc === "spotify-this-song"){
    spotifyCall(content)
}
else if (appFunc === "concert-this"){
    concertThis(content);
}


function spotifyCall(query){
    spotify
    .search({type: "track", query: "all the small things"})
    .then(function(response){
        console.log(response);
    })
    .catch(function(err){
        console.log(err);
    });
}

function movieThis(query){

}

function concertThis(query){
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
}



































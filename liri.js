
var axios = require("axios");

var appFuncObj = require("./appFunction");

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
    appFuncObj.spotifyCall(content)
}
else if (appFunc === "concert-this"){
    appFuncObj.concertThis(content);
}
else if (appFunc === ""){
    appFuncObj.movieThis(content);
}
else if (appFunc === "do-what-it-says"){
    appFuncObj.doWhatItSays();
}





































// Manages all the functions
var appFuncObj = require("./appFunction");


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
else if (appFunc === "movie-this"){
    appFuncObj.movieThis(content);
}
else if (appFunc === "do-what-it-says"){
    appFuncObj.doWhatItSays();
}





































// Manages all the functions
var appFuncObj = require("./appFunction");

// Load File System Package
var fs = require("fs");


var appFunc = ((typeof process.argv[2] === 'undefined') ? null : process.argv[2]);
appFunc = ((appFunc !== null ) ? appFunc.toLowerCase() : appFunc );


var content = ((typeof process.argv[3] === 'undefined') ? null : process.argv[3]);
content = ((content !== null) ? content.toLowerCase() : content);


function appCall(appFunc, content){

    switch (appFunc){
        case "spotify-this-song":
            appFuncObj.spotifyCall(content);
            break;
        case "concert-this":
            appFuncObj.concertThis(content);
            break;
        case "movie-this":
            appFuncObj.movieThis(content);
            break;
        case "do-what-it-says":
            fs.readFile("random.txt", "utf8", function(err, data){
                if(err){
                    return console.log(err);
                }
                console.log(data);
                var splitData = data.split('" "');
                
                appFunc = splitData[0].replace('"',"");
                content = splitData[1].replace('"',"");

                // Recursion
                appCall(appFunc, content);
            })

            break;
        default:
            console.log("Not a correct function");
    }
}


appCall(appFunc, content);












































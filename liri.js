require("dotenv").config();
var key = require("./keys.js");
var axios = require("axios");


var spotify = new Spotify(keys.spotify);

var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";

var queryUrl = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";


concertThis = function (){};

spotifyThisSong = function (){
    axios.get(queryUrl).then(
        function(response){
            console.log("Name of Venue:" = response.data.Venue);
            console.log("Location:" = response.data.Location);
            console.log("Date:" = response.data.Date);

        }
    )
};

movieThis = function (){
    axios.get(queryUrl).then(
        function(response) {
          console.log("Title: " + response.data.Title);
          console.log("Release Year: " + response.data.Year);
          console.log("IMDB Rating: " + response.data.IMDBRating);
          console.log("Rotten Tomatoes Rating: " + response.data.RottenTomatoRating);
          console.log("Country: " + response.data.Country);
          console.log("Language: " + response.data.Language);
          console.log("Plot: " + response.data.Plot);
          console.log("Actors: " + response.data.Actors);
        })
};

doWhatItSays = function (){};



doWhatItSays(process.argv[2] + process.argv[3]);
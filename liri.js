require("dotenv").config();
var key = require("./keys.js");
var axios = require("axios");


var spotify = new Spotify(keys.spotify);

var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";



concertThis = function (){
    
};

spotifyThisSong = function (){
    spotify
  .request('https://api.spotify.com/v1/tracks/7yCPwWs66K8Ba5lFuU2bcx')
  .then(function(data) {
    console.log(data); 
  })
  .catch(function(err) {
    console.error('Error occurred: ' + err); 
  });

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

var marvelRequestUrl = "https://gateway.marvel.com:443/v1/public/characters?"
var marvelApiKey  = "abdfd77b47499bf8bf3a7ee7d53b30a4"

var marvelCharNameUrl = "https://gateway.marvel.com:443/v1/public/characters?orderBy=-modified&limit=100&apikey=abdfd77b47499bf8bf3a7ee7d53b30a4"

var vineRequestUrl = "https://comicvine.gamespot.com/api/characters/?api_key=84b5c7942b49eb33ea48d45716e0e2336811cd22&format=JSON&limit=10"

var vineSearchUrl = "https://comicvine.gamespot.com/api/search/?query=thor&resources=character&api_key=84b5c7942b49eb33ea48d45716e0e2336811cd22&format=JSON&limit=10"

$( function() {
  $( "#char-search" ).autocomplete({
    source: marvelChars,
    minLength: 3,
    select: function( event, ui){
      $("#char-search").val(ui.item.value);
      var selectedChar = ui.item.value;
      getResultsMarvel(selectedChar);
      getResultsGiphy(selectedChar);
      // getResultsComicVine(selectedChar);
      // getResultsMCU();

      return false;
    }
  });
  
} );

// getResultsMarvel();

function getResultsMarvel(selectedChar)
 {
  let apiMarvel = `https://gateway.marvel.com:443/v1/public/characters?name=${ selectedChar }&ts=1&apikey=abdfd77b47499bf8bf3a7ee7d53b30a4`
  // console.log("API LINK : " + apiMarvel);
  fetch(apiMarvel).then(function(response){
    if (response.status == 200){
      response.json().then(function(marvelData){
        var marvelResults = marvelData.data.results;
        console.log("Data from marvel: ", marvelResults);
      })
    }
  })
  // console.log("Character Name: " + charName);
}



function getResultsGiphy(selectedChar)
 {
  let apiGiphy = `https://api.giphy.com/v1/gifs/search?api_key=i5MHnuo6MC25j3nApRcBmFJn4LyxNJXT&q=marvel%20${ selectedChar }&limit=1&offset=0&rating=g&lang=en`
  // console.log("API LINK : " + apiMarvel);
  fetch(apiGiphy).then(function(response){
    if (response.status == 200){
      response.json().then(function(giphyData){
        var giphyResults = giphyData.data[0].images.original.url;
        console.log("Data from giphy: ", giphyResults);
        $("#featured-image").attr("src",giphyResults);
      })
    }
  })
  // console.log("Character Name: " + charName);
}


// getting data from comicvine
// function getResultsComicVine(selectedChar){
// let apiComicVine = `https://comicvine.gamespot.com/api/search/?query=${ selectedChar }&resources=character&api_key=84b5c7942b49eb33ea48d45716e0e2336811cd22&format=JSON`
// fetch(apiComicVine,{
//   mode: "no-cors",
//   method: "GET"
// })
// .then(function(response){
//   if (response.status !== 200){
//     response.json()
//     .then(function(vineData){
//       var vineResults = vineData.data.results;
//       console.log("Data from comicvine: ", vineResults);
//     }).catch( function(error){
//       console.log(error);
//     }) 
//   }
// }).catch( function(error){
//   console.log(error);
// }) 
// }


  // let apiGiphy = `https://api.giphy.com/v1/gifs/search?api_key=i5MHnuo6MC25j3nApRcBmFJn4LyxNJXT&q=${selectedChar}&limit=3&offset=0&rating=g&lang=en`;
  
  // // console.log("API LINK : " + apiMarvel);
  // fetch(apiGiphy).then(function(response){
  //   if (response.status == 200){
  //     response.json().then(function(giphyData){
  //       var giphyResults = giphyData.data.results;
  //       console.log("Data from Giphy: ", giphyResults);
  //     })
  //   }
  // })

  // console.log("Character Name: " + charName);




// function getResultsMCU (){

// const settings = {
// 	"async": true,
// 	"crossDomain": true,
// 	"url": "https://mcu-comics-and-characters.p.rapidapi.com/mcu/characters",
// 	"method": "GET",
// 	"headers": {
// 		"X-RapidAPI-Key": "850aa42b78msh83fc01adcf66e85p1a4493jsn33981f5f3798",
// 		"X-RapidAPI-Host": "mcu-comics-and-characters.p.rapidapi.com"
// 	}
// };

// $.ajax(settings).done(function (response) {
// 	console.log(response);
// });
// }

// https://api.giphy.com/v1/gifs/search?api_key=i5MHnuo6MC25j3nApRcBmFJn4LyxNJXT&q=ironman&limit=3&offset=0&rating=g&lang=en

// DATA

// FUNCTIONS
// USER INTERACTIONS
    // user selects a character from a searchable dropdown
    // list of characters from marvel
        // characters
            // name
    // marvel info on character
        // characters
            // description
            // comics
            // series
            // thumbnail (if we want to use for favorites)
        // image
            // path
    // comic vine info on character
        // deck
        // first_appeared_in_issue 
            // name
            // issue_number
        // real_name
        // origin
            // name
      
// INITIALIZATION
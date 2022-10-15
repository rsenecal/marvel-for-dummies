
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

        var description = marvelResults[0].description;
        console.log("Description: ", description);
        var El = document.getElementById("marvel-description");
        El.textContent = description;

        // var series = marvelResults[0].series.items[0].name;

        var series1 = document.getElementById("series-1");
        series1.textContent = marvelResults[0].series.items[1].name;
        var series2 = document.getElementById("series-2");
        series2.textContent = marvelResults[0].series.items[2].name;
        var series3 = document.getElementById("series-3");
        series3.textContent = marvelResults[0].series.items[3].name;


        // for (i = 0; i <= getSeries.length; i++) {
        //   var li = document.createElement("li"); // create li element.

        //   li.innerHTML = marvelResults[0].series.items[0]; // assigning text to li using array value.

        //   var seriesEl = document.getElementById("series-links");
        //   seriesEl.appendChild(li); // append li to ul.
        // }

        // var comics = marvelResults[0].comics.items;
        // console.log("Comics: ", comics);



      })
    }
  })
  // console.log("Character Name: " + charName);
}



// save to favorites button

// DEPENDENCIES

var saveButton = $('#save-fav');
var charSearchEl = $('#char-search');
var charName1 = $('#char-name-1');
var charName2 = $('#char-name-2');
var charName3 = $('#char-name-3');
var charName4 = $('#char-name-4');

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

var favoriteCharacters = JSON.parse(localStorage.getItem("favoriteCharacters")) || [];

// FUNCTIONS

// get data from local storage
function init () {
    // get items from local storage
    // if no favorites
      // clear contents of "cards-container"
      // replace text of #instructions with "Save a character as a favorite to .."
    // if favorites
  renderSavedCharacters();
}

function saveFavorite() {
    console.log(charSearchEl.val());
    favoriteCharacters.unshift(charSearchEl.val());
    console.log(favoriteCharacters);
    localStorage.setItem("favoriteCharacters", JSON.stringify(favoriteCharacters));
    renderSavedCharacters();

      // shift other favorites to next card


}

function renderSavedCharacters() {
  charName1.text(favoriteCharacters[0]);
  charName2.text(favoriteCharacters[1]);
  charName3.text(favoriteCharacters[2]);
  charName4.text(favoriteCharacters[3]);
}

// INITIALIZATION
saveButton.on('click', saveFavorite);
init();





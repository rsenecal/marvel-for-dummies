
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

        var allSeries = marvelResults[0].series.items;

        var series1 = document.getElementById("series-1");
        series1.textContent = marvelResults[0].series.items[0].name;
        var series2 = document.getElementById("series-2");
        series2.textContent = marvelResults[0].series.items[1].name;
        var series3 = document.getElementById("series-3");
        series3.textContent = marvelResults[0].series.items[2].name;


        // for (i = 0; i <= allSeries.length; i++) {
        //   let series = document.createElement("li"); // create li element.

        //   series.innerHTML = allSeries[i].name; // assigning text to li using array value.

        //   var seriesEl = document.getElementById("series-links");
        //   seriesEl.appendChild(series); // append li to ul.
        // }

        // var comics = marvelResults[0].comics.items;
        // console.log("Comics: ", comics);

        var comics1 = document.getElementById("comics-1");
        comics1.textContent = marvelResults[0].series.items[0].name;
        var comics2 = document.getElementById("comics-2");
        comics2.textContent = marvelResults[0].series.items[1].name;
        var comics3 = document.getElementById("comics-3");
        comics3.textContent = marvelResults[0].series.items[2].name;

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

// favorites

// DEPENDENCIES

var saveButton = $('#save-fav');
var charSearchEl = $('#char-search');
var charName1 = $('#char-name-1');
var charName2 = $('#char-name-2');
var charName3 = $('#char-name-3');
var charName4 = $('#char-name-4');
var charImage1 = $('#char-image-1');
var charImage2 = $('#char-image-2');
var charImage3 = $('#char-image-3');
var charImage4 = $('#char-image-4');


// DATA
var favoriteCharacters = JSON.parse(localStorage.getItem("favoriteCharacters")) || [];


// get data from local storage
function init () {
  renderSavedCharacters();
  getImages();
}


function init () {
  renderSavedCharacters();
  getImages();
}

function saveFavorite() {
    console.log(charSearchEl.val());
    favoriteCharacters.unshift(charSearchEl.val());
    console.log(favoriteCharacters);
    localStorage.setItem("favoriteCharacters", JSON.stringify(favoriteCharacters));
    renderSavedCharacters();
    getImages();
}

function renderSavedCharacters() {
  charName1.text(favoriteCharacters[0]);
  charName2.text(favoriteCharacters[1]);
  charName3.text(favoriteCharacters[2]);
  charName4.text(favoriteCharacters[3]);
}

// add thumbnails to favorites
  function getImages() {
    var apiMarvel1 = `https://gateway.marvel.com:443/v1/public/characters?name=${favoriteCharacters[0]}&ts=1&apikey=abdfd77b47499bf8bf3a7ee7d53b30a4`
    fetch(apiMarvel1)
    .then(function(response){
      return response.json();
    })
    .then (function(data){
      var imagePath = data.data.results[0].thumbnail.path;
      var imageExt = data.data.results[0].thumbnail.extension;
      var imageURL = imagePath + "." + imageExt;
      charImage1.attr('src', imageURL);
    })
    var apiMarvel2 = `https://gateway.marvel.com:443/v1/public/characters?name=${favoriteCharacters[1]}&ts=1&apikey=abdfd77b47499bf8bf3a7ee7d53b30a4`
    fetch(apiMarvel2)
    .then(function(response){
      return response.json();
    })
    .then (function(data){
      var imagePath = data.data.results[0].thumbnail.path;
      var imageExt = data.data.results[0].thumbnail.extension;
      var imageURL = imagePath + "." + imageExt;
      charImage2.attr('src', imageURL);
    })
    var apiMarvel3 = `https://gateway.marvel.com:443/v1/public/characters?name=${favoriteCharacters[2]}&ts=1&apikey=abdfd77b47499bf8bf3a7ee7d53b30a4`
    fetch(apiMarvel3)
    .then(function(response){
      return response.json();
    })
    .then (function(data){
      var imagePath = data.data.results[0].thumbnail.path;
      var imageExt = data.data.results[0].thumbnail.extension;
      var imageURL = imagePath + "." + imageExt;
      charImage3.attr('src', imageURL);
    })
    var apiMarvel4 = `https://gateway.marvel.com:443/v1/public/characters?name=${favoriteCharacters[3]}&ts=1&apikey=abdfd77b47499bf8bf3a7ee7d53b30a4`
    fetch(apiMarvel4)
    .then(function(response){
      return response.json();
    })
    .then (function(data){
      var imagePath = data.data.results[0].thumbnail.path;
      var imageExt = data.data.results[0].thumbnail.extension;
      var imageURL = imagePath + "." + imageExt;
      charImage4.attr('src', imageURL);
    })
    }





// INITIALIZATION
saveButton.on('click', saveFavorite);
getImages();
init();




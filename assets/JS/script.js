
var marvelRequestUrl = "https://gateway.marvel.com:443/v1/public/characters?"
var marvelApiKey  = "abdfd77b47499bf8bf3a7ee7d53b30a4"

var marvelCharNameUrl = "https://gateway.marvel.com:443/v1/public/characters?orderBy=-modified&limit=100&apikey=abdfd77b47499bf8bf3a7ee7d53b30a4"

var vineRequestUrl = "https://comicvine.gamespot.com/api/characters/?api_key=84b5c7942b49eb33ea48d45716e0e2336811cd22&format=JSON&limit=10"



$( function() {
  $( "#char-search" ).autocomplete({
    source: marvelChars,
    minLength: 3,
    select: function( event, ui){
      $("#char-search").val(ui.item.value);
      var selectedChar = ui.item.value;
      getResultsMarvel(selectedChar);
      return false;
    }
  });
  
} );

getResultsMarvel();

function getResultsMarvel(selectedChar)
 {
  let apiLink = `https://gateway.marvel.com:443/v1/public/characters?name=${ selectedChar }&ts=1&apikey=abdfd77b47499bf8bf3a7ee7d53b30a4`
  console.log("API LINK : " + apiLink);
  fetch(apiLink).then(function(response){
    if (response.status == 200){
      response.json().then(function(marvelData){
        var marvelResults = marvelData.data.results;
        console.log("Data from marvel: ", marvelResults);
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



      

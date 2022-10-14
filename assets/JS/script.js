
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

var marvelRequestUrl = "https://gateway.marvel.com:443/v1/public/characters?apikey=abdfd77b47499bf8bf3a7ee7d53b30a4"

var marvelAPIKey = "abdfd77b47499bf8bf3a7ee7d53b30a4"

var vineAPIKey = "84b5c7942b49eb33ea48d45716e0e2336811cd22"
var vineRequestUrl = "https://comicvine.gamespot.com/api/characters/?api_key=84b5c7942b49eb33ea48d45716e0e2336811cd22&format=JSON&limit=10"

var marvelChars = ['Spider-man', 'Iron man', 'Hulk', 'Thanos', 'Black Panther', 'Wolverine', 'Doctor Strange', 'Luke Cage', 'Silver Surfer'];




function autocompleteMatch(input) {
  if (input == '') {
    return [];
  }
  var reg = new RegExp(input)
  return marvelChars.filter(function(char) {
	  if (char.match(reg)) {
  	  return char;
	  }
  });
}


function showResults(marChar) {
  res = document.getElementById("char-search");
  res.innerHTML = '';
  let list = '';
  let terms = autocompleteMatch(marChar);
  for (i=0; i<terms.length; i++) {
    list += '<li>' + terms[i] + '</li>';
  }
  res.innerHTML = '<ul>' + list + '</ul>';
}


// DEPENDENCIES
    // CSS framework 
    // JavaScript


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
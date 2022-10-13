
var marvelRequestUrl = "https://gateway.marvel.com:443/v1/public/characters?apikey=abdfd77b47499bf8bf3a7ee7d53b30a4"

var marvelAPIKey = "abdfd77b47499bf8bf3a7ee7d53b30a4"

var vineAPIKey = "84b5c7942b49eb33ea48d45716e0e2336811cd22"
var vineRequestUrl = "https://comicvine.gamespot.com/api/characters/?api_key=84b5c7942b49eb33ea48d45716e0e2336811cd22&format=JSON&limit=10"


$( function() {
    var marvelChars = [
      {
        value: "doctorstrange",
        name: "Doctor Strange",
        desc: "Doctor Stephen Strange is a fictional superhero appearing in American comic books published by Marvel Comics.",
        image: "https://static.wikia.nocookie.net/marveldatabase/images/6/67/Stephen_Strange_%28Earth-199999%29_from_Spider-Man_No_Way_Home_Promo_001.jpg"
      },
      {
        value: "spiderman",
        name: "Spider-Man",
        desc: "Spider-Man is a superhero appearing in American comic books published by Marvel Comics.",
        image: "https://upload.wikimedia.org/wikipedia/en/2/21/Web_of_Spider-Man_Vol_1_129-1.png"
      },
      {
        value: "captainamerica",
        name: "Captain America",
        desc: "Captain America is a superhero appearing in American comic books published by Marvel Comics",
        image: "https://cdn.britannica.com/30/182830-050-96F2ED76/Chris-Evans-title-character-Joe-Johnston-Captain.jpg"
      },
      {
        value: "storm",
        name: "Ororo Munroe",
        desc: "The character was created by writer Len Wein and artist Dave Cockrum, first appearing in Giant-Size X-Men #1",
        image: "https://static.wikia.nocookie.net/marveldatabase/images/2/2b/Ororo_Munroe_%28Earth-616%29_from_X-Men_Red_Vol_2_1_001.jpg"
      }
    ];
 
    $( "#char-search" ).autocomplete({
      minLength: 0,
      source: marvelChars,
      focus: function( event, ui ) {
        $( "#char-search" ).val( ui.item.name );
        return false;
      },
      select: function( event, ui ) {
        $( "#char-search" ).val( ui.item.name );
        $( "#char-id" ).val( ui.item.value );
        // $( "#char-search-description" ).html( ui.item.desc );
        $( "#featured-image" ).attr( "src", ui.item.image );
 
        return false;
      }
    })
    .autocomplete( "instance" )._renderItem = function( ul, item ) {
      return $( "<li>" )
        .append( "<div>" + item.name + "<br>" + item.desc + "</div>" )
        .appendTo( ul );
    };
  } );




// var marvelChars = ['Spider-man', 'Iron man', 'Hulk', 'Thanos', 'Black Panther', 'Wolverine', 'Doctor Strange', 'Luke Cage', 'Silver Surfer'];


// fetch(marvelRequestUrl)
// .then (function(response){
//     return response.json();
// })
// .then (function(data){
//     console.log(data);
// })


// function autocompleteMatch(input) {
//   if (input == '') {
//     return [];
//   }
//   var reg = new RegExp(input)
//   return marvelChars.filter(function(char) {
// 	  if (char.match(reg)) {
//   	  return char;
// 	  }
//   });
// }


// function showResults(marChar) {
//   res = document.getElementById("char-search");
//   res.innerHTML = '';
//   let list = '';
//   let terms = autocompleteMatch(marChar);
//   for (i=0; i<terms.length; i++) {
//     list += '<li>' + terms[i] + '</li>';
//   }
//   res.innerHTML = '<ul>' + list + '</ul>';
// }


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
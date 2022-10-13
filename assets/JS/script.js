
var marvelRequestUrl = "https://gateway.marvel.com:443/v1/public/characters?apikey=abdfd77b47499bf8bf3a7ee7d53b30a4"

var marvelCharNameUrl = "https://gateway.marvel.com:443/v1/public/characters?orderBy=-modified&limit=100&apikey=abdfd77b47499bf8bf3a7ee7d53b30a4";

var marvelAPIKey = "abdfd77b47499bf8bf3a7ee7d53b30a4"

var vineAPIKey = "84b5c7942b49eb33ea48d45716e0e2336811cd22"
var vineRequestUrl = "https://comicvine.gamespot.com/api/characters/?api_key=84b5c7942b49eb33ea48d45716e0e2336811cd22&format=JSON&limit=10"
let charName ="";

$( function() {

   getResultsMarvel()
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
      // source: marvelChars,
      source: charName,
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
  } 
  // just calling the Marvel API Here to see the data
  );






// DEPENDENCIES
    // CSS framework 
    // JavaScript


// DATA


// FUNCTIONS
function getResultsMarvel() {
  // console.log(marvelCharNameUrl.name);

  fetch(marvelCharNameUrl).then(function(response){
    if (response.status == 200){
      response.json().then(function(marvelData){
        if(marvelData.data.count !==0){
          var marvelResults = marvelData.data.results;
          // ** Creating a Variable with Character Name only **
          // for (i=0; i< marvelResults.length; i++ ) {
          //   charName += marvelResults[i].name + ", ";

          // }
           
          // charName = JSON.stringify(marvelResults);
          
          console.log ("Data from Marvel: ", marvelResults );
          // console.log ("Data from Marvel: ",  marvelData.)
        }
      }
      
      )
    }
  })
}

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
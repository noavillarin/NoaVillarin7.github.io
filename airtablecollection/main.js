var Airtable = require('airtable');
var base = new Airtable({apiKey: 'keyJ6qCYZqg4THJI4'}).base('appJAicwhWOJTuuSU');

// get our collection base, select all records
base("index").select({sort:[{field: "title", direction: "desc"}]
}).eachPage(gotPageOfArt, gotAllArt);

//an empty array for the data 
let artworks = [];

// callback function that recieves our data 
function gotPageOfArt(records, fetchNextPage) {
    console.log("gotPageOfArt()");
    // add records from this page to bookshelf array
    artworks.push(...records);
    // request more pages
    fetchNextPage();
  }

// call back function that is called when all pages are loaded
function gotAllArt(err) {
    console.log("Testing");

      // report an error, you'd want to do something better than this in production
  if (err) {
    console.log("error loading art");
    console.error(err);
    return;
  }

  // call function to show the books
  consoleLogArt();
  showArt();
}


// just loop through the books and console.log them
function consoleLogArt() {
    artworks.forEach((art) => {
    console.log(art);
    });
  }


function showArt() {
    console.log("showBooks()");
artworks.forEach((art) => {



        //creating a new div for each title to go in
        let artContainer = document.createElement("div");
        artContainer.classList.add("art-div");
        
        //add link to div
        var artLink = document.createElement('a');
        artLink.setAttribute('href', art.fields.url);
        artContainer.appendChild(artLink);

        // adding title to the link in the art-div 
        let artTitle = document.createElement("h2")
        artTitle.classList.add("art-title")
        artTitle.innerText = art.fields.title;
        artLink.append(artTitle);

        //sort the .art-div into different div containers based on tab category
        addArtworkToCategoryDiv();

        //art disappears and reappers when clicked
        // artContainer.addEventListener("click", function(){
        //     artLink.classList.toggle("active");
        // })

        //conditional Statement to sort the art 
        function addArtworkToCategoryDiv() {
            let artGenre = art.fields.tab;
                if (artGenre === 'artwork') {
                    document.querySelector(".artwork-container").append(artContainer)
                    artContainer.classList.add("artwork")
                } else if (artGenre === 'exhbition'){
                    document.querySelector(".exhibit-container").append(artContainer)
                } else if (artGenre === 'photography'){
                    document.querySelector(".photo-container").append(artContainer)
                } else if (artGenre === 'artists'){
                    document.querySelector(".artists-container").append(artContainer)
                } else if (artGenre === 'collections'){
                    document.querySelector(".collections-container").append(artContainer)
                } else if (artGenre === 'fashion'){
                    document.querySelector(".fashion-container").append(artContainer)
                } else if (artGenre === 'arthistory'){
                    document.querySelector(".history-container").append(artContainer)
                } else if (artGenre === 'artistandtheirartwork'){
                    document.querySelector(".work-container").append(artContainer)
                } else if (artGenre === 'artistportfolioandartwork'){
                    document.querySelector(".portfolio-container").append(artContainer)
                } else if (artGenre === 'graphicdesign'){
                    document.querySelector(".graphic-container").append(artContainer)
                } else if (artGenre === 'mobileapp'){
                    document.querySelector(".mobile-container").append(artContainer)
                } else if (artGenre === 'listofartists'){
                    document.querySelector(".list-container").append(artContainer)
                } else if (artGenre === 'graphchart'){
                    document.querySelector(".graph-container").append(artContainer)
                } else {
                    document.querySelector(".remain-container").append(artContainer)
                }
            }

            
  
        })

    
};
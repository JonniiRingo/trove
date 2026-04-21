/**
 * Data Catalog Project Starter Code - SEA Stage 2
 *
 * This file is where you should be doing most of your work. You should
 * also make changes to the HTML and CSS files, but we want you to prioritize
 * demonstrating your understanding of data structures, and you'll do that
 * with the JavaScript code you write in this file.
 *
 * The comments in this file are only to help you learn how the starter code
 * works. The instructions for the project are in the README. That said, here
 * are the three things you should do first to learn about the starter code:
 * - 1 - Change something small in index.html or style.css, then reload your
 *    browser and make sure you can see that change.
 * - 2 - On your browser, right click anywhere on the page and select
 *    "Inspect" to open the browser developer tools. Then, go to the "console"
 *    tab in the new window that opened up. This console is where you will see
 *    JavaScript errors and logs, which is extremely helpful for debugging.
 *    (These instructions assume you're using Chrome, opening developer tools
 *    may be different on other browsers. We suggest using Chrome.)
 * - 3 - Add another object to the artworks array a few lines down. Reload your
 *    browser and observe what happens. You should see a new card appear.
 *
 */

// This is an array of objects. Each object represents one artwork
// and holds all the data for that piece.
// Your final submission should have much more data than this!

const artworks = [
  {
    title: "Cottage for Helen",
    artist: "Olen",
    medium: "Oil on Canvas",
    year: 1985,
    price: 320,
    image: "./assets/photo1.jpeg"
  },
  {
    title: "River Baptism",
    artist: "Nicasio",
    medium: "Oil on Canvas",
    year: 1975,
    price: 285,
    image: "./assets/photo2.jpeg"
  },
  {
    title: "Azure Floral with Butterfly",
    artist: "Langley",
    medium: "Oil on Canvas",
    year: 1982,
    price: 195,
    image: "./assets/photo3.jpeg"
  },
  {
    title: "Botanical Costume Illustration",
    artist: "E. Lami",
    medium: "Watercolor and Ink on Paper",
    year: 1940,
    price: 175,
    image: "./assets/photo4.jpeg"
  },
  {
    title: "Spring Visitor (American Robin)",
    artist: "J. L. Thompson", 
    medium: "Oil on Canvas",
    year: 1982,
    price: 310,
    image: "./assets/photo5.jpeg"
  },
  {
    title: "Bavarian Winter Twilight",
    artist: "M. Collingwood",
    medium: "Watercolor on Paper",
    year: 1968,
    price: 185,
    image: "./assets/photo6.jpeg"
  },
  {
    title: "Saloon Toast",
    artist: "Jack Roberts",
    medium: "Vintage Lithograph Print",
    year: 1967,
    price: 95,
    image: "./assets/photo7.jpeg"
  },
  {
    title: "Edgar Allen Paw",
    artist: "Augustine",
    medium: "Acrylic on Board",
    year: 1995,
    price: 85,
    image: "./assets/photo8.jpeg"
  },
  {
    title: "Birch River Mist",
    artist: "Moncrief",
    medium: "Oil on Canvas",
    year: 1972,
    price: 145,
    image: "./assets/photo9.jpeg"
  },
  {
    title: "50th Anniversary Duck Stamp",
    artist: "William C. Morris",
    medium: "Commemorative Poster",
    year: 1984,
    price: 85,
    image: "./assets/photo10.jpeg"
  },
  {
    title: "Alpine Impasto",
    artist: "Alpine School",
    medium: "Oil on Canvas",
    year: 1960,
    price: 165,
    image: "./assets/photo11.jpeg"
  },
  {
    title: "Where Wild Flowers Grow",
    artist: "Murray",
    medium: "Artist Proof Lithograph (A/P 3/50)",
    year: 1992,
    price: 120,
    image: "./assets/photo12.jpeg"
  },
  {
    title: "Sanctuary Courtyard",
    artist: "Birkenstock",
    medium: "Decorative Lithograph",
    year: 1994,
    price: 75,
    image: "./assets/photo13.jpeg"
  },
  {
    title: "The Hollyhock Garden",
    artist: "Decorative Impressionist",
    medium: "Framed Lithograph",
    year: 1988,
    price: 110,
    image: "./assets/photo14.jpeg"
  },
  {
    title: "Rajput Royal Procession",
    artist: "Traditional Indian School",
    medium: "Gouache on Silk",
    year: 1975,
    price: 155,
    image: "./assets/photo15.jpeg"
  },
  {
    title: "Autumn Stand",
    artist: "JH",
    medium: "Oil on Canvas Board",
    year: 1975,
    price: 85,
    image: "./assets/photo16.jpeg"
  }
];

// This function adds cards to the page to display the data in the array
function showCards(list) {
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = "";
  const templateCard = document.querySelector(".card");

  for (let i = 0; i < list.length; i++) {
    const artwork = list[i];

    const nextCard = templateCard.cloneNode(true); // Copy the template card
    editCardContent(nextCard, artwork);            // Edit card content
    cardContainer.appendChild(nextCard);           // Add new card to the container
  }
}

function editCardContent(card, artwork) {
  card.style.display = "flex";

  const cardTitle = card.querySelector(".card-title");
  cardTitle.textContent = artwork.title;

  const cardArtist = card.querySelector(".artist-name");
  cardArtist.textContent = artwork.artist;

  const cardPrice = card.querySelector(".price-tag");
  cardPrice.textContent = "$" + artwork.price;

  const cardImage = card.querySelector(".card-image");
  cardImage.src = artwork.image;
  cardImage.alt = artwork.title;

  // You can use console.log to help you debug!
  // View the output by right clicking on your website,
  // select "Inspect", then click on the "Console" tab
  console.log("new card:", artwork.title, "- html:", card);
}

// This calls the showCards() function when the page is first loaded
document.addEventListener("DOMContentLoaded", function (){
  showCards(artworks);

  document.getElementById("search-input").addEventListener("input", search);
  document.getElementById("sort-select").addEventListener("change", sort);
});

function compareAsc(a, b){
  return a.price - b.price
}

function compareDesc(a, b){
  return b.price - a.price
}



function sort() {
  const order = document.getElementById("sort-select").value;

  if(order === "price-asc"){
    artworks.sort(compareAsc); // Sorts the artworks array in ascending order
  } else if (order === "price-desc"){
    artworks.sort(compareDesc); // Sorts the artworks array in descending order
  }
  showCards(artworks);    // Call showCards again to refresh
}



function search() {
  const search = document.getElementById("search-input").value.toLowerCase();
  const results = artworks.filter( artwork =>
    artwork.title.toLowerCase().includes(search) || artwork.artist.toLowerCase().includes(search)
  )
  showCards(results);
}

// How to sort
// let vals = [5,4,9,2,1];
// console.log(vales)

// vals.sort(compare);
// console.log(values);

// vals.filter(x => x);



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
    title: "Frost Eve",
    artist: "Clara Novak",
    medium: "Oil on Canvas",
    year: 2019,
    price: 240,
    image: "./assets/painting1.jpg",
  },
  {
    title: "Frost Day",
    artist: "Clara Novak",
    medium: "Acrylic on Board",
    year: 2020,
    price: 180,
    image: "./assets/painting2.jpg",
  },
  {
    title: "Frost Glow",
    artist: "Clara Novak",
    medium: "Watercolor",
    year: 2021,
    price: 310,
    image: "./assets/painting3.jpg",
  },
  {
    title: "Amber Quiet",
    artist: "Rémi Faure",
    medium: "Oil on Linen",
    year: 2018,
    price: 520,
    image: "./assets/painting1.jpg",   // swap for real image later
  },
  {
    title: "Dusk Study No. 4",
    artist: "Rémi Faure",
    medium: "Pastel on Paper",
    year: 2022,
    price: 95,
    image: "./assets/painting2.jpg",
  },
  {
    title: "Velvet Hour",
    artist: "Mia Strand",
    medium: "Encaustic",
    year: 2023,
    price: 750,
    image: "./assets/painting3.jpg",
  },
];

// This function adds cards to the page to display the data in the array
function showCards() {
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = "";
  const templateCard = document.querySelector(".card");

  for (let i = 0; i < artworks.length; i++) {
    const artwork = artworks[i];

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
  showCards();

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
  showCards();    // Call showCards again to refresh
}



function search() {
  const search = document.getElementById("search-input").value.toLowercase();
  results = artworks.filter( each artwork =>
    artwork.title.toLowercase().includes(search) || artwork.artist.toLowercase().includes(search)
  )
}

// How to sort
// let vals = [5,4,9,2,1];
// console.log(vales)

// vals.sort(compare);
// console.log(values);

// vals.filter(x => x);



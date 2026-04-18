// ─────────────────────────────────────────────
//  TROVE — Data Catalog  |  SEA Stage 2
// ─────────────────────────────────────────────

// Array of artwork objects — the catalog data.
// Each object shares the same keys so the render
// function can work generically on any entry.
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

// ─────────────────────────────────────────────
//  State — what is currently being displayed
// ─────────────────────────────────────────────

let displayedArtworks = [...artworks]; // starts as a copy of the full list

// ─────────────────────────────────────────────
//  Feature 1 — Search (filters by title or artist)
// ─────────────────────────────────────────────

function handleSearch(event) {
  const query = event.target.value.toLowerCase().trim();

  if (query === "") {
    // Empty search → restore full list, then re-apply any active sort
    displayedArtworks = [...artworks];
  } else {
    displayedArtworks = artworks.filter(function (artwork) {
      return (
        artwork.title.toLowerCase().includes(query) ||
        artwork.artist.toLowerCase().includes(query)
      );
    });
  }

  // Re-apply the current sort after filtering
  applySortToDisplayed();
  renderCards();
}

// ─────────────────────────────────────────────
//  Feature 2 — Sort (by price low→high or high→low)
// ─────────────────────────────────────────────

function handleSort(event) {
  applySortToDisplayed(event.target.value);
  renderCards();
}

// Sorts `displayedArtworks` in-place.
// Reads the select value if no argument is passed.
function applySortToDisplayed(order) {
  const sortSelect = document.getElementById("sort-select");
  const activeOrder = order !== undefined ? order : sortSelect.value;

  if (activeOrder === "price-asc") {
    displayedArtworks.sort(function (a, b) {
      return a.price - b.price;
    });
  } else if (activeOrder === "price-desc") {
    displayedArtworks.sort(function (a, b) {
      return b.price - a.price;
    });
  }
  // "default" → no sort applied, order stays as-is
}

// ─────────────────────────────────────────────
//  Render — builds cards from displayedArtworks
// ─────────────────────────────────────────────

function renderCards() {
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = ""; // clear existing cards

  if (displayedArtworks.length === 0) {
    cardContainer.innerHTML =
      '<p class="no-results">No artworks match your search.</p>';
    return;
  }

  for (let i = 0; i < displayedArtworks.length; i++) {
    const artwork = displayedArtworks[i];
    const card = buildCard(artwork);
    cardContainer.appendChild(card);
  }
}

// Creates and returns a single card DOM element for an artwork object.
function buildCard(artwork) {
  const card = document.createElement("div");
  card.className = "card";

  const img = document.createElement("img");
  img.src = artwork.image;
  img.alt = artwork.title;
  img.className = "card-image";

  const content = document.createElement("div");
  content.className = "card-content";

  const title = document.createElement("h2");
  title.className = "card-title";
  title.textContent = artwork.title;

  const artist = document.createElement("p");
  artist.className = "artist-name";
  artist.textContent = artwork.artist + " · " + artwork.year;

  const price = document.createElement("p");
  price.className = "price-tag";
  price.textContent = "$" + artwork.price;

  content.appendChild(title);
  content.appendChild(artist);
  content.appendChild(price);

  card.appendChild(img);
  card.appendChild(content);

  return card;
}

// ─────────────────────────────────────────────
//  Init — wire up events and render on load
// ─────────────────────────────────────────────

document.addEventListener("DOMContentLoaded", function () {
  renderCards();

  document
    .getElementById("search-input")
    .addEventListener("input", handleSearch);

  document
    .getElementById("sort-select")
    .addEventListener("change", handleSort);
});
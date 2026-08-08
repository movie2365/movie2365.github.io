/*
=========================================================
 CINEBY WEBSITE — MAIN JAVASCRIPT
=========================================================

 MOVIE POSTERS
 --------------------------------------------------------
 Put your poster images inside:

 assets/movies/

 Example:

 assets/movies/spider-man.jpg

 Then change a movie's poster value below to:

 poster: "assets/movies/spider-man.jpg"


 SERVER IFRAMES
 --------------------------------------------------------
 Each server below has its own iframe.

 The src values are intentionally EMPTY.

 Add your own permitted embed URL between the quotes.

 Example:

 Lumen: "https://example.com/embed"

=========================================================
*/


/* ======================================================
   MOVIE DATABASE
   ====================================================== */

const movies = [

  {
    id: "my-dearest-senorita",
    title: "My Dearest Señorita",
    year: 2026,
    rating: "4.0",
    poster: "",
    tag: "MOVIE"
  },

  {
    id: "scream-7",
    title: "Scream 7",
    year: 2026,
    rating: "6.0",
    poster: "",
    tag: "MOVIE"
  },

  {
    id: "swapped",
    title: "Swapped",
    year: 2026,
    rating: "8.8",
    poster: "",
    tag: "MOVIE"
  },

  {
    id: "send-help",
    title: "Send Help",
    year: 2026,
    rating: "7.1",
    poster: "",
    tag: "MOVIE"
  },

  {
    id: "outcome",
    title: "Outcome",
    year: 2026,
    rating: "7.0",
    poster: "",
    tag: "MOVIE"
  },

  {
    id: "the-gates",
    title: "The Gates",
    year: 2026,
    rating: "6.9",
    poster: "",
    tag: "MOVIE"
  },

  {
    id: "thrash",
    title: "Thrash",
    year: 2026,
    rating: "6.8",
    poster: "",
    tag: "MOVIE"
  },

  {
    id: "the-devil-wears-prada-2",
    title: "The Devil Wears Prada 2",
    year: 2026,
    rating: "8.3",
    poster: "",
    tag: "MOVIE"
  },

  {
    id: "michael",
    title: "Michael",
    year: 2026,
    rating: "7.5",
    poster: "",
    tag: "MOVIE"
  },

  {
    id: "apex",
    title: "Apex",
    year: 2026,
    rating: "6.4",
    poster: "",
    tag: "MOVIE"
  },

  {
    id: "spider-man",
    title: "Spider-Man",
    year: 2002,
    rating: "7.3",
    poster: "assets/movies/spider-man-2002.png",
    tag: "MOVIE"
  },

  {
    id: "spider-man-far-from-home",
    title: "Spider-Man: Far From Home",
    year: 2019,
    rating: "7.4",
    poster: "",
    tag: "MOVIE"
  },

  {
    id: "into-the-spider-verse",
    title: "Spider-Man: Into the Spider-Verse",
    year: 2018,
    rating: "8.4",
    poster: "",
    tag: "MOVIE"
  },

  {
    id: "across-the-spider-verse",
    title: "Spider-Man: Across the Spider-Verse",
    year: 2023,
    rating: "8.5",
    poster: "",
    tag: "MOVIE"
  },

  {
    id: "spider-man-3",
    title: "Spider-Man 3",
    year: 2007,
    rating: "6.3",
    poster: "",
    tag: "MOVIE"
  },

  {
    id: "spider-man-no-way-home",
    title: "Spider-Man: No Way Home",
    year: 2021,
    rating: "8.2",
    poster: "",
    tag: "MOVIE"
  },

  {
    id: "the-amazing-spider-man",
    title: "The Amazing Spider-Man",
    year: 2012,
    rating: "6.9",
    poster: "",
    tag: "MOVIE"
  },

  {
    id: "the-amazing-spider-man-2",
    title: "The Amazing Spider-Man 2",
    year: 2014,
    rating: "6.6",
    poster: "",
    tag: "MOVIE"
  }

];


/* ======================================================
   SERVER LIST
====================================================== */

/*
 You supplied 18 names.

 Even though you said 17 servers,
 I included all 18 names you provided.
*/

const servers = [

  "Lumen",
  "Helix",
  "Quasar",
  "Comet",
  "Pulsar",
  "Theta",
  "Spark",
  "Haze",
  "Nyx",
  "Gale",
  "Nova",
  "Nebula",
  "Blaze",
  "Forge",
  "Wisp",
  "Raze",
  "Flare",
  "Beam"

];


/* ======================================================
   SERVER IFRAME SOURCES
====================================================== */

/*
 IMPORTANT:

 Every server has a DIFFERENT iframe.

 They are intentionally blank.

 Put your own permitted embed sources here.

 Example:

 Lumen: "https://example.com/embed/movie"

*/

const iframeSources = {

  Lumen: "",

  Helix: "",

  Quasar: "",

  Comet: "",

  Pulsar: "",

  Theta: "",

  Spark: "",

  Haze: "",

  Nyx: "",

  Gale: "",

  Nova: "",

  Nebula: "",

  Blaze: "",

  Forge: "",

  Wisp: "",

  Raze: "",

  Flare: "",

  Beam: ""

};


/* ======================================================
   HTML ESCAPING
====================================================== */

function escapeHtml(value) {

  return String(value).replace(
    /[&<>"']/g,

    character => ({

      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#039;"

    }[character])

  );

}


/* ======================================================
   POSTER HTML
====================================================== */

function posterMarkup(movie) {

  /*
   If you added an image path,
   display the image.
  */

  if (movie.poster) {

    return `

      <img
        src="${escapeHtml(movie.poster)}"
        alt="${escapeHtml(movie.title)} poster"
        loading="lazy"
      >

    `;

  }


  /*
   Otherwise display a placeholder.
  */

  return `

    <div class="poster-placeholder">

      <span>
        POSTER
      </span>

      <small>
        Put image here
      </small>

    </div>

  `;

}


/* ======================================================
   MOVIE CARD
====================================================== */

function movieCard(movie) {

  return `

    <a
      class="movie-card"
      href="player.html?id=${encodeURIComponent(movie.id)}"
    >

      <div class="poster">

        ${posterMarkup(movie)}

        <div class="rating">

          ★ ${escapeHtml(movie.rating)}

        </div>

        <div class="poster-play">

          ▶

        </div>

      </div>


      <div class="movie-card-title">

        ${escapeHtml(movie.title)}

      </div>


      <div class="movie-meta">

        ${movie.year}
        ·
        ${movie.tag}

      </div>

    </a>

  `;

}


/* ======================================================
   HOME PAGE
====================================================== */

function renderHome() {

  const list =
    document.querySelector("#hot-list");


  /*
   Stop if we're not on the homepage.
  */

  if (!list) {

    return;

  }


  /*
   Select the first 10 movies
   for "Hot Right Now".
  */

  const hotMovies =
    movies.slice(0, 10);


  list.innerHTML =
    hotMovies.map(
      (movie, index) => `

        <a
          class="hot-row"
          href="player.html?id=${encodeURIComponent(movie.id)}"
        >

          <span class="rank">

            #${index + 1}

          </span>


          <span class="hot-title">

            ${escapeHtml(movie.title)}

          </span>


          <span class="hot-type">

            ${movie.tag}

          </span>


          <span class="hot-rating">

            ★ ${escapeHtml(movie.rating)}

          </span>

        </a>

      `
    ).join("");

}


/* ======================================================
   SEARCH PAGE
====================================================== */

function renderSearch() {

  const input =
    document.querySelector("#search-input");

  const grid =
    document.querySelector("#results-grid");

  const count =
    document.querySelector("#result-count");


  /*
   Make sure these elements exist.
  */

  if (!input || !grid || !count) {

    return;

  }


  /*
   Read the search query from the URL.
  */

  const params =
    new URLSearchParams(
      window.location.search
    );


  let query =
    params.get("q") || "";


  /*
   Random button.

   If ?random=1 is present,
   shuffle the movie list.
  */

  if (
    params.get("random") === "1"
  ) {

    query = "";

    movies.sort(
      () => Math.random() - 0.5
    );

  }


  /*
   Put the URL search term
   into the search box.
  */

  input.value = query;


  /* =========================
     UPDATE RESULTS
  ========================= */

  function updateResults() {

    const searchTerm =
      input.value
        .trim()
        .toLowerCase();


    /*
     Find movies whose names
     contain the search term.
    */

    const results =
      movies.filter(
        movie =>

          !searchTerm ||

          movie.title
            .toLowerCase()
            .includes(searchTerm)

      );


    /*
     Update result count.
    */

    count.textContent =

      `${results.length} result` +

      `${results.length === 1 ? "" : "s"}` +

      `${
        searchTerm
          ? ` for "${input.value.trim()}"`
          : ""
      }`;


    /*
     Display movie cards.
    */

    if (results.length > 0) {

      grid.innerHTML =
        results
          .map(movieCard)
          .join("");

    }

    else {

      grid.innerHTML = `

        <div class="empty-state">

          No movies found.
          Try another search.

        </div>

      `;

    }

  }


  /* =========================
     LIVE SEARCH
  ========================= */

  input.addEventListener(
    "input",
    updateResults
  );


  /* =========================
     SEARCH SUBMIT
  ========================= */

  const searchForm =
    document.querySelector(
      "#results-search"
    );


  if (searchForm) {

    searchForm.addEventListener(
      "submit",
      event => {

        event.preventDefault();


        const searchTerm =
          input.value.trim();


        if (searchTerm) {

          window.location.href =
            `search.html?q=${
              encodeURIComponent(
                searchTerm
              )
            }`;

        }

        else {

          window.location.href =
            "search.html";

        }

      }
    );

  }


  /* =========================
     CLEAR SEARCH
  ========================= */

  const clearButton =
    document.querySelector(
      "#clear-search"
    );


  if (clearButton) {

    clearButton.addEventListener(
      "click",
      () => {

        input.value = "";


        /*
         Remove the query from
         the browser URL.
        */

        window.history.replaceState(
          {},
          "",
          "search.html"
        );


        updateResults();

        input.focus();

      }
    );

  }


  /*
   Initial results.
  */

  updateResults();

}


/* ======================================================
   PLAYER PAGE
====================================================== */

function renderPlayer() {

  const stack =
    document.querySelector(
      "#player-stack"
    );


  const buttons =
    document.querySelector(
      "#server-buttons"
    );


  const info =
    document.querySelector(
      "#movie-info"
    );


  /*
   Stop if we're not on the
   player page.
  */

  if (
    !stack ||
    !buttons ||
    !info
  ) {

    return;

  }


  /* =========================
     GET MOVIE
  ========================= */

  const params =
    new URLSearchParams(
      window.location.search
    );


  const movieId =
    params.get("id");


  /*
   Find the movie.

   If the ID doesn't exist,
   use the first movie.
  */

  const movie =
    movies.find(
      item => item.id === movieId
    ) || movies[0];


  /*
   Change browser tab title.
  */

  document.title =
    `${movie.title} — Cineby`;


  /* =========================
     CREATE IFRAMES
  ========================= */

  stack.innerHTML =

    servers.map(
      (server, index) => `

        <iframe

          id="iframe-${server.toLowerCase()}"

          class="
            server-frame
            ${index === 0 ? "active" : ""}
          "

          title="
            ${escapeHtml(server)}
            player
          "

          src="
            ${escapeHtml(
              iframeSources[server] || ""
            )}
          "

          allowfullscreen

          loading="lazy"

          referrerpolicy="no-referrer"

        ></iframe>

      `
    ).join("");


  /* =========================
     CREATE SERVER BUTTONS
  ========================= */

  buttons.innerHTML =

    servers.map(
      (server, index) => `

        <button

          class="
            server-button
            ${index === 0 ? "active" : ""}
          "

          type="button"

          data-server="${escapeHtml(server)}"

        >

          ${escapeHtml(server)}

        </button>

      `
    ).join("");


  /* =========================
     MOVIE INFORMATION
  ========================= */

  info.innerHTML = `

    <div>

      <h1>

        ${escapeHtml(movie.title)}

      </h1>


      <p>

        ${movie.year}

        ·

        ${movie.tag}

        ·

        ★ ${escapeHtml(movie.rating)}

      </p>

    </div>


    <a
      class="back-link"
      href="search.html"
    >

      ← Back to results

    </a>

  `;


  /* =========================
     PLAYER FALLBACK
  ========================= */

  const fallback =
    document.querySelector(
      "#player-fallback"
    );


  /* =========================
     ACTIVATE SERVER
  ========================= */

  function activateServer(server) {


    /*
     Hide every iframe.
    */

    document
      .querySelectorAll(
        ".server-frame"
      )
      .forEach(
        frame => {

          frame.classList.remove(
            "active"
          );

        }
      );


    /*
     Remove active state
     from every button.
    */

    document
      .querySelectorAll(
        ".server-button"
      )
      .forEach(
        button => {

          button.classList.remove(
            "active"
          );

        }
      );


    /*
     Find selected iframe.
    */

    const iframe =
      document.querySelector(
        `#iframe-${server.toLowerCase()}`
      );


    /*
     Find selected button.
    */

    const button =
      document.querySelector(
        `.server-button[data-server="${CSS.escape(server)}"]`
      );


    /*
     Show selected iframe.
    */

    if (iframe) {

      iframe.classList.add(
        "active"
      );

    }


    /*
     Highlight selected button.
    */

    if (button) {

      button.classList.add(
        "active"
      );

    }


    /*
     Show the placeholder if
     this server doesn't have
     a source yet.
    */

    if (fallback) {

      fallback.classList.toggle(
        "visible",
        !iframeSources[server]
      );

    }

  }


  /* =========================
     SERVER BUTTON CLICK
  ========================= */

  buttons.addEventListener(
    "click",
    event => {

      const button =
        event.target.closest(
          ".server-button"
        );


      if (!button) {

        return;

      }


      activateServer(
        button.dataset.server
      );

    }
  );


  /*
   Start with Lumen selected.
  */

  activateServer(
    servers[0]
  );

}


/* ======================================================
   START WEBSITE
====================================================== */

document.addEventListener(
  "DOMContentLoaded",
  () => {

    /*
     Find which page we're on.
    */

    const page =
      document.body.dataset.page;


    /*
     Start the correct
     page functionality.
    */

    if (page === "home") {

      renderHome();

    }


    if (page === "search") {

      renderSearch();

    }


    if (page === "player") {

      renderPlayer();

    }

  }
);

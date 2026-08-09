const movies = [
  { id: "my-dearest-senorita", title: "My Dearest Señorita", year: 2026, rating: "4.0", poster: "assets/movies/my-dearest-se-orita-2026.webp", tag: "MOVIE" },
  { id: "scream-7", title: "Scream 7", year: 2026, rating: "6.0", poster: "assets/movies/scream-7-2026.webp", tag: "MOVIE" },
  { id: "swapped", title: "Swapped", year: 2026, rating: "8.8", poster: "assets/movies/swapped-1-2026.webp", tag: "MOVIE" },
  { id: "send-help", title: "Send Help", year: 2026, rating: "7.1", poster: "assets/movies/send-help-2026.webp", tag: "MOVIE" },
  { id: "outcome", title: "Outcome", year: 2026, rating: "7.0", poster: "assets/movies/outcome-2026.webp", tag: "MOVIE" },
  { id: "the-gates", title: "The Gates", year: 2026, rating: "6.9", poster: "assets/movies/the-gates-2026.webp", tag: "MOVIE" },
  { id: "thrash", title: "Thrash", year: 2026, rating: "6.8", poster: "assets/movies/thrash-2026.webp", tag: "MOVIE" },
  { id: "the-devil-wears-prada-2", title: "The Devil Wears Prada 2", year: 2026, rating: "8.3", poster: "assets/movies/the-devil-wears-prada-2-2026.webp", tag: "MOVIE" },
  { id: "michael", title: "Michael", year: 2026, rating: "7.5", poster: "assets/movies/michael-1-2026.webp", tag: "MOVIE" },
  { id: "apex", title: "Apex", year: 2026, rating: "6.4", poster: "https://cineby.ws/images/posters/movies/apex-1-2026.webp", tag: "MOVIE" },

  { id: "spider-man", title: "Spider-Man", year: 2002, rating: "7.3", poster: "assets/movies/spider-man-2002.png", tag: "MOVIE" },
  { id: "spider-man-far-from-home", title: "Spider-Man: Far From Home", year: 2019, rating: "7.4", poster: "https://cineby.ws/images/posters/movies/spider-man-far-from-home-2019.webp", tag: "MOVIE" },
  { id: "spider-man-2", title: "Spider-Man 2", year: 2004, rating: "7.5", poster: "assets/movies/spider-man-2-2004.png", tag: "MOVIE" },
  { id: "into-the-spider-verse", title: "Spider-Man: Into the Spider-Verse", year: 2018, rating: "8.4", poster: "https://cineby.ws/images/posters/movies/spider-man-into-the-spider-verse-2018.webp", tag: "MOVIE" },
  { id: "across-the-spider-verse", title: "Spider-Man: Across the Spider-Verse", year: 2023, rating: "8.5", poster: "https://cineby.ws/images/posters/movies/spider-man-across-the-spider-verse-2023.webp", tag: "MOVIE" },
  { id: "spider-man-3", title: "Spider-Man 3", year: 2007, rating: "6.3", poster: "assets/movies/spider-man-3-2007.webp", tag: "MOVIE" },
  { id: "spider-man-no-way-home", title: "Spider-Man: No Way Home", year: 2021, rating: "8.2", poster: "https://cineby.ws/images/posters/movies/spider-man-no-way-home-2021.webp", tag: "MOVIE" },
  { id: "the-amazing-spider-man", title: "The Amazing Spider-Man", year: 2012, rating: "6.9", poster: "https://cineby.ws/images/posters/movies/the-amazing-spider-man-2012.webp", tag: "MOVIE" },
  { id: "the-amazing-spider-man-2", title: "The Amazing Spider-Man 2", year: 2014, rating: "6.6", poster: "https://cineby.ws/images/posters/movies/the-amazing-spider-man-2-2014.webp", tag: "MOVIE" },
  { id: "spider-man-brand-new-day", title: "Spider-Man: Brand New Day", year: 2026, rating: "7.9", poster: "https://cineby.ws/images/posters/movies/spider-man-brand-new-day-2026.webp", tag: "MOVIE" }
];


// =======================
// TV SHOW DATABASE
// =======================

const shows = [
  {
    id: "abbott-elementary",
    title: "Abbott Elementary",
    year: 2021,
    rating: "8.2",
    poster: "assets/shows/abbott-elementary.png",
    tag: "TV SHOW",

    seasons: {
      1: [
        "Pilot",
        "Light Bulb",
        "Wishlist",
        "New Tech",
        "Student Transfer",
        "Gifted Program",
        "Art Teacher"
      ],

      2: [
        "Development Day",
        "Wrong Delivery",
        "Story Samurai"
      ],

      3: [
        "Career Day",
        "Gregory's Garden",
        "Alex"
      ]
    }
  }
];


// =======================
// SERVERS
// =======================

const servers = [
  "Helix",
  "Lumen",
  "Quasar",
  "Spark",
  "Haze",
  "Nyx",
  "Gale",
  "Nova",
  "Nebula",
  "Blaze",
  "Forge",
  "Raze",
  "Beam"
];


// =======================
// MOVIE IDS
// =======================

const movieIds = {
  "spider-man": "557",
  "spider-man-2": "558",
  "spider-man-3": "559",
  "my-dearest-senorita": "1239198",
  "scream-7": "1159559",
  "swapped": "1007757",
  "send-help": "1198994",
  "outcome": "1049471",
  "the-gates": "1366906",
  "thrash": "1290417",
  "the-devil-wears-prada-2": "1314481",
  "michael": "936075",
  "apex": "1318447",
  "spider-man-far-from-home": "429617",
  "into-the-spider-verse": "324857",
  "across-the-spider-verse": "569094",
  "spider-man-no-way-home": "634649",
  "the-amazing-spider-man": "1930",
  "the-amazing-spider-man-2": "102382",
  "spider-man-brand-new-day": "969681"
};

// =======================
// SERVER URL PATTERNS
// =======================

const serverUrlPatterns = {
  Helix: id => `https://vidzen.fun/movie/${id}`,
  Lumen: id => `https://cinesrc.st/embed/movie/${id}`,
  Quasar: id => `https://airflix1.com/embed/movie/${id}`,
  Spark: id => `https://player.videasy.to/movie/${id}`,
  Haze: id => `https://primesrc.me/embed/movie?tmdb=${id}`,
  Nyx: id => `https://vidfast.vc/movie/${id}`,
  Gale: id => `https://vaplayer.ru/embed/movie/${id}`,
  Nova: id => `https://peachify.top/embed/movie/${id}`,
  Nebula: id => `https://play.xpass.top/e/movie/${id}`,
  Blaze: id => `https://vidup.to/movie/${id}`,
  Forge: id => `https://player.zxcstream.xyz/player/movie/${id}`,
  Raze: id => `https://vsembed.ru/embed/movie/${id}`,
  Beam: id => `https://vidcore.net/movie/${id}`
};


// =======================
// CREATE MOVIE SOURCES
// =======================

const iframeSources = Object.fromEntries(
  Object.entries(movieIds).map(([movieId, externalId]) => [
    movieId,
    Object.fromEntries(
      Object.entries(serverUrlPatterns).map(([server, makeUrl]) => [
        server,
        makeUrl(externalId)
      ])
    )
  ])
);



// =======================
// HTML ESCAPE
// =======================

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, character => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "\"": "&quot;",
    "'": "&#039;"
  }[character]));
}



// =======================
// POSTER SYSTEM
// =======================

function posterMarkup(content) {

  if (content.poster) {
    return `
      <img
        src="${escapeHtml(content.poster)}"
        alt="${escapeHtml(content.title)} poster"
        loading="lazy"
      >
    `;
  }


  return `
    <div class="poster-placeholder">
      <span>POSTER</span>
      <small>Put image here</small>
    </div>
  `;
}



// =======================
// MOVIE CARD
// =======================

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
        ${movie.year} · ${movie.tag}
      </div>

    </a>
  `;
}



// =======================
// SHOW CARD
// =======================

function showCard(show) {

  return `
    <a
      class="movie-card"
      href="show.html?id=${encodeURIComponent(show.id)}"
    >

      <div class="poster">

        ${posterMarkup(show)}

        <div class="rating">
          ★ ${escapeHtml(show.rating)}
        </div>

        <div class="poster-play">
          ▶
        </div>

      </div>


      <div class="movie-card-title">
        ${escapeHtml(show.title)}
      </div>


      <div class="movie-meta">
        ${show.year} · ${show.tag}
      </div>

    </a>
  `;
}



// =======================
// ALL CONTENT
// =======================

const allContent = [
  ...movies,
  ...shows
];

// =======================
// HOME PAGE
// =======================

function renderHome() {

  const list = document.querySelector("#hot-list");

  if (!list) return;


  list.innerHTML = allContent
    .slice(0, 10)
    .map((content, index) => `

      <a
        class="hot-row"
        href="${
          content.tag === "TV SHOW"
          ? `show.html?id=${encodeURIComponent(content.id)}`
          : `player.html?id=${encodeURIComponent(content.id)}`
        }"
      >

        <span class="rank">
          #${index + 1}
        </span>


        <span class="hot-title">
          ${escapeHtml(content.title)}
        </span>


        <span class="hot-type">
          ${content.tag}
        </span>


        <span class="hot-rating">
          ★ ${escapeHtml(content.rating)}
        </span>

      </a>

    `)
    .join("");
}



// =======================
// SEARCH
// =======================

function renderSearch() {

  const input = document.querySelector("#search-input");
  const grid = document.querySelector("#results-grid");
  const count = document.querySelector("#result-count");
  const form = document.querySelector("#results-search");
  const clearButton = document.querySelector("#clear-search");


  if (!input || !grid || !count) return;



  const params = new URLSearchParams(
    window.location.search
  );


  const query = params.get("q") || "";

  const contentToShow =
    params.get("random") === "1"
    ? [...allContent].sort(() => Math.random() - 0.5)
    : allContent;



  input.value = query;



  function normalize(text) {

    return String(text)
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g,"")
      .replace(/[^a-z0-9]/g,"");

  }



  function updateResults() {

    const searchTerm =
      input.value.trim();


    let results;



    if (!searchTerm) {

      results = contentToShow;

    } else {

      const search =
        normalize(searchTerm);


      results =
        contentToShow.filter(content => {

          const title =
            normalize(content.title);


          return (
            title.includes(search) ||
            search.includes(title)
          );

        });

    }



    count.textContent =
      `${results.length} result${results.length === 1 ? "" : "s"}` +
      `${searchTerm ? ` for "${searchTerm}"` : ""}`;



    grid.innerHTML =
      results.length

      ? results.map(content =>

          content.tag === "TV SHOW"
          ? showCard(content)
          : movieCard(content)

        ).join("")

      : `

        <div class="empty-state">
          No results found.
        </div>

      `;

  }




  input.addEventListener(
    "input",
    updateResults
  );



  if (form) {

    form.addEventListener(
      "submit",
      event => {

        event.preventDefault();


        const searchTerm =
          input.value.trim();



        window.location.href =
          searchTerm

          ? `search.html?q=${encodeURIComponent(searchTerm)}`

          : "search.html";

      }
    );

  }




  if (clearButton) {

    clearButton.addEventListener(
      "click",
      () => {

        input.value = "";


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



  updateResults();

}

// =======================
// PLAYER
// =======================

function renderPlayer() {

  const stack =
    document.querySelector("#player-stack");

  const buttons =
    document.querySelector("#server-buttons");

  const info =
    document.querySelector("#movie-info");

  const fallback =
    document.querySelector("#player-fallback");


  if (!stack || !buttons || !info || !fallback) {
    return;
  }



  const params =
    new URLSearchParams(
      window.location.search
    );



  const id =
    params.get("id");



  const season =
    params.get("season");



  const episode =
    params.get("episode");



  const movie =
    movies.find(
      item => item.id === id
    );



  const show =
    shows.find(
      item => item.id === id
    );



  let title;
  let year;
  let tag;
  let rating;
  let sources;



  // =======================
  // MOVIE PLAYER
  // =======================

  if (movie) {


    title = movie.title;
    year = movie.year;
    tag = movie.tag;
    rating = movie.rating;


    sources =
      iframeSources[movie.id] || {};

  }



  // =======================
  // SHOW EPISODE PLAYER
  // =======================

  else if (show) {


    const episodeName =
      show.seasons[season]?.[episode - 1]
      || "Episode";



    title =
      `${show.title} - Season ${season} Episode ${episode}: ${episodeName}`;


    year = show.year;
    tag = show.tag;
    rating = show.rating;



    /*
      Episode servers go here later.

      Example:

      episodeSources[
        show.id
      ][season][episode]

    */


    sources = {};

  }



  else {


    info.innerHTML = `
      <h1>
        Content not found
      </h1>
    `;


    return;

  }





  info.innerHTML = `

    <div>

      <h1>
        ${escapeHtml(title)}
      </h1>


      <p>
        ${year}
        ·
        ${tag}
        ·
        ★ ${escapeHtml(rating)}
      </p>

    </div>


    <a
      class="back-link"
      href="search.html"
    >
      ← Back to browse
    </a>

  `;





  const availableServers =
    servers.filter(server =>
      Object.hasOwn(
        sources,
        server
      )
    );




  stack.innerHTML =
    availableServers.map(
      (server,index)=>`

      <iframe
        class="server-frame${index===0 ? " active":""}"
        title="${escapeHtml(server)} player"
        data-server="${escapeHtml(server)}"
        src="${escapeHtml(sources[server] || "")}"
        allowfullscreen
      ></iframe>

    `
    ).join("");





  buttons.innerHTML =
    availableServers.map(
      (server,index)=>`

      <button
        class="server-button${index===0 ? " active":""}"
        type="button"
        data-server="${escapeHtml(server)}"
      >

        ${escapeHtml(server)}

      </button>

    `
    ).join("");






  function selectServer(server) {


    document
    .querySelectorAll(".server-frame")
    .forEach(frame=>{


      frame.classList.toggle(
        "active",
        frame.dataset.server === server
      );


    });




    document
    .querySelectorAll(".server-button")
    .forEach(button=>{


      button.classList.toggle(
        "active",
        button.dataset.server === server
      );


    });



    fallback.classList.toggle(
      "visible",
      !(sources[server] || "")
    );


  }





  buttons.addEventListener(
    "click",
    event=>{


      const button =
        event.target.closest(
          ".server-button"
        );


      if(button){

        selectServer(
          button.dataset.server
        );

      }

    }
  );





  if(availableServers.length){

    selectServer(
      availableServers[0]
    );

  }
  else{

    fallback.classList.add(
      "visible"
    );

  }

}

renderHome();
renderSearch();
renderShowPage();
renderPlayer();

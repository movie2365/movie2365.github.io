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
  { id: "spider-man-brand-new-day", title: "Spider-Man: Brand New Day", year: 2026, rating: "None", poster: "https://cineby.ws/images/posters/movies/spider-man-brand-new-day-2026.webp", tag: "MOVIE" }
];

const servers = [
  "Lumen", "Helix", "Quasar",
  "Spark", "Haze", "Nyx", "Gale", "Nova", "Nebula",
  "Blaze", "Forge", "Raze", "Beam"
];

/*
  Each movie has its own set of server sources.

  Example:
  iframeSources["scream-7"].Lumen = "YOUR_PERMITTED_EMBED_URL";
  iframeSources["spider-man"].Lumen = "A_DIFFERENT_PERMITTED_EMBED_URL";
*/

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
  "spider-man-brand-new-day": "969681",
};

const serverUrlPatterns = {
  Lumen: id => `https://cinesrc.st/embed/movie/${id}`,
  Helix: id => `https://vidzen.fun/movie/${id}`,
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
  Beam: id => `https://vidcore.net/movie/${id}`,
};

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

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, character => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "\"": "&quot;",
    "'": "&#039;"
  }[character]));
}

function posterMarkup(movie) {
  if (movie.poster) {
    return `
      <img
        src="${escapeHtml(movie.poster)}"
        alt="${escapeHtml(movie.title)} poster"
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

function renderHome() {
  const list = document.querySelector("#hot-list");

  if (!list) return;

  list.innerHTML = movies.slice(0, 10).map((movie, index) => `
    <a
      class="hot-row"
      href="player.html?id=${encodeURIComponent(movie.id)}"
    >
      <span class="rank">#${index + 1}</span>
      <span class="hot-title">${escapeHtml(movie.title)}</span>
      <span class="hot-type">${movie.tag}</span>
      <span class="hot-rating">★ ${escapeHtml(movie.rating)}</span>
    </a>
  `).join("");
}


/* =========================================================
   SEARCH
   ========================================================= */

function renderSearch() {
  const input = document.querySelector("#search-input");
  const grid = document.querySelector("#results-grid");
  const count = document.querySelector("#result-count");
  const form = document.querySelector("#results-search");
  const clearButton = document.querySelector("#clear-search");

  if (!input || !grid || !count) return;

  const params = new URLSearchParams(window.location.search);
  const query = params.get("q") || "";

  const moviesToShow = params.get("random") === "1"
    ? [...movies].sort(() => Math.random() - 0.5)
    : movies;

  input.value = query;


  /*
    Turns things like:

    Spider-Man
    spider man
    SPIDER-MAN
    spider.man

    into:

    spiderman
  */

  function normalize(text) {
    return String(text)
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9]/g, "");
  }


  /*
    Breaks a search into useful words.

    "amazing spider man"

    becomes:

    ["amazing", "spider", "man"]
  */

  function getWords(text) {
    return String(text)
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .split(/[^a-z0-9]+/)
      .filter(Boolean);
  }


  /*
    Levenshtein distance lets us detect typos.

    Example:

    spider
    spidr

    are very close.
  */

  function levenshtein(a, b) {
    if (a === b) return 0;

    if (!a.length) return b.length;
    if (!b.length) return a.length;

    let previous = Array.from(
      { length: b.length + 1 },
      (_, i) => i
    );

    for (let i = 1; i <= a.length; i++) {
      const current = [i];

      for (let j = 1; j <= b.length; j++) {
        const insertCost = current[j - 1] + 1;
        const deleteCost = previous[j] + 1;
        const replaceCost =
          previous[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1);

        current[j] = Math.min(
          insertCost,
          deleteCost,
          replaceCost
        );
      }

      previous = current;
    }

    return previous[b.length];
  }


  /*
    Returns how similar two words are.

    1.0 = identical
    0.8 = very close
    0.5 = somewhat close
    0.0 = completely different
  */

  function wordSimilarity(a, b) {
    if (!a || !b) return 0;

    if (a === b) return 1;

    if (a.includes(b) || b.includes(a)) {
      return 0.9;
    }

    const distance = levenshtein(a, b);

    return Math.max(
      0,
      1 - distance / Math.max(a.length, b.length)
    );
  }


  /*
    Scores how well a movie matches a search.

    Higher score = better match.
  */

  function searchScore(movie, query) {
    const title = movie.title;

    const normalizedTitle = normalize(title);
    const normalizedQuery = normalize(query);

    const titleWords = getWords(title);
    const queryWords = getWords(query);

    if (!normalizedQuery || !queryWords.length) {
      return 0;
    }


    /* Exact title */

    if (normalizedTitle === normalizedQuery) {
      return 10000;
    }


    /* Exact title ignoring spaces/hyphens */

    if (normalizedTitle.includes(normalizedQuery)) {
      return 9000;
    }


    let score = 0;


    /*
      Match every search word against the
      best word in the movie title.
    */

    for (const queryWord of queryWords) {
      let bestWordScore = 0;

      for (const titleWord of titleWords) {
        const similarity = wordSimilarity(
          queryWord,
          titleWord
        );

        if (similarity >= 0.95) {
          bestWordScore = Math.max(
            bestWordScore,
            2500
          );
        } else if (similarity >= 0.80) {
          bestWordScore = Math.max(
            bestWordScore,
            1800 * similarity
          );
        } else if (similarity >= 0.65) {
          bestWordScore = Math.max(
            bestWordScore,
            1000 * similarity
          );
        }
      }

      score += bestWordScore;
    }


    /*
      Bonus if ALL search words are represented.
    */

    const allWordsMatch = queryWords.every(queryWord =>
      titleWords.some(titleWord =>
        wordSimilarity(queryWord, titleWord) >= 0.65
      )
    );

    if (allWordsMatch) {
      score += 3000;
    }


    /*
      Bonus for the search appearing in the
      title in the same order.
    */

    const titleWithoutSpaces = normalize(title);
    const queryWithoutSpaces = normalize(query);

    if (titleWithoutSpaces.includes(queryWithoutSpaces)) {
      score += 4000;
    }


    /*
      Check whether the beginning of a title word
      matches the search.

      "amaz" -> "Amazing"
      "spid" -> "Spider"
    */

    for (const queryWord of queryWords) {
      for (const titleWord of titleWords) {
        if (
          titleWord.startsWith(queryWord) &&
          queryWord.length >= 2
        ) {
          score += 1200;
        }
      }
    }


    /*
      Small typo protection.

      This makes:

      spidermn

      still find:

      Spider-Man
    */

    if (queryWords.length === 1) {
      const queryWord = queryWords[0];

      for (const titleWord of titleWords) {
        const distance = levenshtein(
          queryWord,
          titleWord
        );

        const allowedDistance =
          queryWord.length <= 4 ? 1 :
          queryWord.length <= 7 ? 2 :
          3;

        if (distance <= allowedDistance) {
          score += 1500;
        }
      }
    }


    return score;
  }


  function updateResults() {
    const searchTerm = input.value.trim();

    let results;


    /*
      No search = show everything.
    */

    if (!searchTerm) {
      results = moviesToShow;
    } else {

      results = moviesToShow
        .map(movie => ({
          movie,
          score: searchScore(movie, searchTerm)
        }))

        /*
          Ignore extremely weak matches.
        */

        .filter(item => item.score >= 700)

        /*
          Best matches first.
        */

        .sort((a, b) => {
          if (b.score !== a.score) {
            return b.score - a.score;
          }

          /*
            If two results are similarly relevant,
            higher-rated movies appear first.
          */

          return Number(b.movie.rating) - Number(a.movie.rating);
        })

        .map(item => item.movie);
    }


    count.textContent =
      `${results.length} result${results.length === 1 ? "" : "s"}` +
      `${searchTerm ? ` for "${searchTerm}"` : ""}`;


    grid.innerHTML = results.length
      ? results.map(movieCard).join("")
      : `<div class="empty-state">No movies found. Try another search.</div>`;
  }


  /*
    Live search while typing.
  */

  input.addEventListener("input", updateResults);


  /*
    Search form submission.
  */

  if (form) {
    form.addEventListener("submit", event => {
      event.preventDefault();

      const searchTerm = input.value.trim();

      window.location.href = searchTerm
        ? `search.html?q=${encodeURIComponent(searchTerm)}`
        : "search.html";
    });
  }


  /*
    Clear button.
  */

  if (clearButton) {
    clearButton.addEventListener("click", () => {
      input.value = "";

      window.history.replaceState(
        {},
        "",
        "search.html"
      );

      updateResults();

      input.focus();
    });
  }


  /*
    Initial results.
  */

  updateResults();
}


/* =========================================================
   PLAYER
   ========================================================= */

function renderPlayer() {
  const stack = document.querySelector("#player-stack");
  const buttons = document.querySelector("#server-buttons");
  const info = document.querySelector("#movie-info");
  const fallback = document.querySelector("#player-fallback");

  if (!stack || !buttons || !info || !fallback) return;

  const params = new URLSearchParams(window.location.search);

  const movie =
    movies.find(item => item.id === params.get("id")) ||
    movies[0];

  const movieSources = iframeSources[movie.id] || {};

  // Only include servers that exist for this movie.
  const availableServers = servers.filter(server =>
    Object.hasOwn(movieSources, server)
  );

  info.innerHTML = `
    <div>
      <h1>${escapeHtml(movie.title)}</h1>
      <p>${movie.year} · ${movie.tag} · ★ ${escapeHtml(movie.rating)}</p>
    </div>

    <a class="back-link" href="search.html">
      ← Back to browse
    </a>
  `;

  stack.innerHTML = availableServers.map((server, index) => `
    <iframe
      class="server-frame${index === 0 ? " active" : ""}"
      title="${escapeHtml(server)} player"
      data-server="${escapeHtml(server)}"
      src="${escapeHtml(movieSources[server] || "")}"
      allowfullscreen
    ></iframe>
  `).join("");

  buttons.innerHTML = availableServers.map((server, index) => `
    <button
      class="server-button${index === 0 ? " active" : ""}"
      type="button"
      data-server="${escapeHtml(server)}"
    >
      ${escapeHtml(server)}
    </button>
  `).join("");

  function selectServer(server) {
    document.querySelectorAll(".server-frame").forEach(frame => {
      frame.classList.toggle(
        "active",
        frame.dataset.server === server
      );
    });

    document.querySelectorAll(".server-button").forEach(button => {
      button.classList.toggle(
        "active",
        button.dataset.server === server
      );
    });

    fallback.classList.toggle(
      "visible",
      !(movieSources[server] || "")
    );
  }

  buttons.addEventListener("click", event => {
    const button = event.target.closest(".server-button");

    if (button) {
      selectServer(button.dataset.server);
    }
  });

  if (availableServers.length > 0) {
    selectServer(availableServers[0]);
  } else {
    fallback.classList.add("visible");
  }
}


/* =========================================================
   START APP
   ========================================================= */

renderHome();
renderSearch();
renderPlayer();

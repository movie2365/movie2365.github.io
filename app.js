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
  { id: "the-amazing-spider-man-2", title: "The Amazing Spider-Man 2", year: 2014, rating: "6.6", poster: "https://cineby.ws/images/posters/movies/the-amazing-spider-man-2-2014.webp", tag: "MOVIE" }
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

  function updateResults() {
    const searchTerm = input.value.trim().toLowerCase();

    function normalize(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "");
}

function levenshtein(a, b) {
  const matrix = Array.from(
    { length: b.length + 1 },
    () => Array(a.length + 1).fill(0)
  );

  for (let i = 0; i <= b.length; i++) matrix[i][0] = i;
  for (let j = 0; j <= a.length; j++) matrix[0][j] = j;

  for (let i = 1; i <= b.length; i++) {
    for (let j = 1; j <= a.length; j++) {
      const cost = b[i - 1] === a[j - 1] ? 0 : 1;

      matrix[i][j] = Math.min(
        matrix[i - 1][j] + 1,
        matrix[i][j - 1] + 1,
        matrix[i - 1][j - 1] + cost
      );
    }
  }

  return matrix[b.length][a.length];
}

function searchScore(title, query) {
  const normalizedTitle = normalize(title);
  const normalizedQuery = normalize(query);

  if (!normalizedQuery) return 0;

  // Perfect match
  if (normalizedTitle === normalizedQuery) {
    return 1000;
  }

  // Normal substring match
  if (normalizedTitle.includes(normalizedQuery)) {
    return 900;
  }

  // Word-by-word matching
  const words = title.toLowerCase().split(/[\s:.-]+/);

  let bestWordScore = 0;

  for (const word of words) {
    const normalizedWord = normalize(word);

    if (!normalizedWord) continue;

    if (normalizedWord.includes(normalizedQuery)) {
      bestWordScore = Math.max(bestWordScore, 800);
      continue;
    }

    const distance = levenshtein(normalizedQuery, normalizedWord);

    // Allow small typos
    const maxDistance =
      normalizedQuery.length <= 4 ? 1 :
      normalizedQuery.length <= 7 ? 2 :
      3;

    if (distance <= maxDistance) {
      const similarity =
        1 - distance / Math.max(normalizedQuery.length, normalizedWord.length);

      bestWordScore = Math.max(
        bestWordScore,
        700 + similarity * 100
      );
    }
  }

  // Fuzzy match against the entire title
  const distance = levenshtein(
    normalizedQuery,
    normalizedTitle
  );

  const similarity =
    1 - distance / Math.max(
      normalizedQuery.length,
      normalizedTitle.length
    );

  if (similarity >= 0.55) {
    bestWordScore = Math.max(
      bestWordScore,
      similarity * 600
    );
  }

  return bestWordScore;
}

function updateResults() {
  const searchTerm = input.value.trim();

  if (!searchTerm) {
    results = moviesToShow;
  } else {
    results = moviesToShow
      .map(movie => ({
        movie,
        score: searchScore(movie.title, searchTerm)
      }))
      .filter(item => item.score > 0)
      .sort((a, b) => b.score - a.score)
      .map(item => item.movie);
  }

  count.textContent =
    `${results.length} result${results.length === 1 ? "" : "s"}` +
    `${searchTerm ? ` for "${searchTerm}"` : ""}`;

  grid.innerHTML = results.length
    ? results.map(movieCard).join("")
    : `<div class="empty-state">No movies found. Try another search.</div>`;
}

    count.textContent =
      `${results.length} result${results.length === 1 ? "" : "s"}` +
      `${searchTerm ? ` for "${input.value.trim()}"` : ""}`;

    grid.innerHTML = results.length
      ? results.map(movieCard).join("")
      : `<div class="empty-state">No movies found. Try another search.</div>`;
  }

  input.addEventListener("input", updateResults);

  if (form) {
    form.addEventListener("submit", event => {
      event.preventDefault();

      const searchTerm = input.value.trim();

      window.location.href = searchTerm
        ? `search.html?q=${encodeURIComponent(searchTerm)}`
        : "search.html";
    });
  }

  if (clearButton) {
    clearButton.addEventListener("click", () => {
      input.value = "";
      window.history.replaceState({}, "", "search.html");
      updateResults();
      input.focus();
    });
  }

  updateResults();
}

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
      frame.classList.toggle("active", frame.dataset.server === server);
    });

    document.querySelectorAll(".server-button").forEach(button => {
      button.classList.toggle("active", button.dataset.server === server);
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

renderHome();
renderSearch();
renderPlayer();

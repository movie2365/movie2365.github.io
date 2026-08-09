// =======================
// MOVIE DATABASE
// =======================

const movies = [

  { 
    id: "my-dearest-senorita",
    title: "My Dearest Señorita",
    year: 2026,
    rating: "4.0",
    poster: "assets/movies/my-dearest-se-orita-2026.webp",
    tag: "MOVIE"
  },

  { 
    id: "scream-7",
    title: "Scream 7",
    year: 2026,
    rating: "6.0",
    poster: "assets/movies/scream-7-2026.webp",
    tag: "MOVIE"
  },

  { 
    id: "swapped",
    title: "Swapped",
    year: 2026,
    rating: "8.8",
    poster: "assets/movies/swapped-1-2026.webp",
    tag: "MOVIE"
  },

  { 
    id: "send-help",
    title: "Send Help",
    year: 2026,
    rating: "7.1",
    poster: "assets/movies/send-help-2026.webp",
    tag: "MOVIE"
  },

  { 
    id: "outcome",
    title: "Outcome",
    year: 2026,
    rating: "7.0",
    poster: "assets/movies/outcome-2026.webp",
    tag: "MOVIE"
  },

  { 
    id: "the-gates",
    title: "The Gates",
    year: 2026,
    rating: "6.9",
    poster: "assets/movies/the-gates-2026.webp",
    tag: "MOVIE"
  },

  { 
    id: "thrash",
    title: "Thrash",
    year: 2026,
    rating: "6.8",
    poster: "assets/movies/thrash-2026.webp",
    tag: "MOVIE"
  },

  { 
    id: "the-devil-wears-prada-2",
    title: "The Devil Wears Prada 2",
    year: 2026,
    rating: "8.3",
    poster: "assets/movies/the-devil-wears-prada-2-2026.webp",
    tag: "MOVIE"
  },

  { 
    id: "michael",
    title: "Michael",
    year: 2026,
    rating: "7.5",
    poster: "assets/movies/michael-1-2026.webp",
    tag: "MOVIE"
  },

  { 
    id: "apex",
    title: "Apex",
    year: 2026,
    rating: "6.4",
    poster: "https://cineby.ws/images/posters/movies/apex-1-2026.webp",
    tag: "MOVIE"
  },


  {
    id:"spider-man",
    title:"Spider-Man",
    year:2002,
    rating:"7.3",
    poster:"assets/movies/spider-man-2002.png",
    tag:"MOVIE"
  },

  {
    id:"spider-man-2",
    title:"Spider-Man 2",
    year:2004,
    rating:"7.5",
    poster:"assets/movies/spider-man-2-2004.png",
    tag:"MOVIE"
  },

  {
    id:"spider-man-3",
    title:"Spider-Man 3",
    year:2007,
    rating:"6.3",
    poster:"assets/movies/spider-man-3-2007.webp",
    tag:"MOVIE"
  }

];



// =======================
// TV SHOW DATABASE
// =======================


const shows = [

{
  id:"abbott-elementary",

  title:"Abbott Elementary",

  year:2021,

  rating:"8.2",

  poster:"assets/shows/abbott-elementary.png",

  tag:"TV SHOW",


  seasons:{


    1:[

      {
        id:"abbott-elementary-1-1",
        title:"Pilot"
      },

      {
        id:"abbott-elementary-1-2",
        title:"Light Bulb"
      },

      {
        id:"abbott-elementary-1-3",
        title:"Wishlist"
      },

      {
        id:"abbott-elementary-1-4",
        title:"New Tech"
      },

      {
        id:"abbott-elementary-1-5",
        title:"Student Transfer"
      },

      {
        id:"abbott-elementary-1-6",
        title:"Gifted Program"
      },

      {
        id:"abbott-elementary-1-7",
        title:"Art Teacher"
      }

    ],



    2:[

      {
        id:"abbott-elementary-2-1",
        title:"Development Day"
      },

      {
        id:"abbott-elementary-2-2",
        title:"Wrong Delivery"
      },

      {
        id:"abbott-elementary-2-3",
        title:"Story Samurai"
      }

    ],



    3:[

      {
        id:"abbott-elementary-3-1",
        title:"Career Day"
      },

      {
        id:"abbott-elementary-3-2",
        title:"Gregory's Garden"
      },

      {
        id:"abbott-elementary-3-3",
        title:"Alex"
      }

    ]


  }

};

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


  "spider-man":
  "557",


  "spider-man-2":
  "558",


  "spider-man-3":
  "559",


  "my-dearest-senorita":
  "1239198",


  "scream-7":
  "1159559",


  "swapped":
  "1007757",


  "send-help":
  "1198994",


  "outcome":
  "1049471",


  "the-gates":
  "1366906",


  "thrash":
  "1290417",


  "the-devil-wears-prada-2":
  "1314481",


  "michael":
  "936075",


  "apex":
  "1318447",


  "spider-man-far-from-home":
  "429617",


  "into-the-spider-verse":
  "324857",


  "across-the-spider-verse":
  "569094",


  "spider-man-no-way-home":
  "634649",


  "the-amazing-spider-man":
  "1930",


  "the-amazing-spider-man-2":
  "102382",


  "spider-man-brand-new-day":
  "969681"


};






// =======================
// MOVIE SERVER PATTERNS
// =======================


const serverUrlPatterns = {


  Helix:
  id => `https://vidzen.fun/movie/${id}`,


  Lumen:
  id => `https://cinesrc.st/embed/movie/${id}`,


  Quasar:
  id => `https://airflix1.com/embed/movie/${id}`,


  Spark:
  id => `https://player.videasy.to/movie/${id}`,


  Haze:
  id => `https://primesrc.me/embed/movie?tmdb=${id}`,


  Nyx:
  id => `https://vidfast.vc/movie/${id}`,


  Gale:
  id => `https://vaplayer.ru/embed/movie/${id}`,


  Nova:
  id => `https://peachify.top/embed/movie/${id}`,


  Nebula:
  id => `https://play.xpass.top/e/movie/${id}`,


  Blaze:
  id => `https://vidup.to/movie/${id}`,


  Forge:
  id => `https://player.zxcstream.xyz/player/movie/${id}`,


  Raze:
  id => `https://vsembed.ru/embed/movie/${id}`,


  Beam:
  id => `https://vidcore.net/movie/${id}`


};






// =======================
// TV EPISODE SERVER PATTERNS
// =======================


const tvServerUrlPatterns = {


  Helix:
  id => `https://vidzen.fun/tv/${id}`,


  Lumen:
  id => `https://cinesrc.st/embed/tv/${id}`,


  Quasar:
  id => `https://airflix1.com/embed/tv/${id}`,


  Spark:
  id => `https://player.videasy.to/tv/${id}`,


  Haze:
  id => `https://primesrc.me/embed/tv/${id}`,


  Nyx:
  id => `https://vidfast.vc/tv/${id}`,


  Gale:
  id => `https://vaplayer.ru/embed/tv/${id}`,


  Nova:
  id => `https://peachify.top/embed/tv/${id}`,


  Nebula:
  id => `https://play.xpass.top/e/tv/${id}`,


  Blaze:
  id => `https://vidup.to/tv/${id}`,


  Forge:
  id => `https://player.zxcstream.xyz/player/tv/${id}`,


  Raze:
  id => `https://vsembed.ru/embed/tv/${id}`,


  Beam:
  id => `https://vidcore.net/tv/${id}`


};








// =======================
// CREATE MOVIE SOURCES
// =======================


const iframeSources = Object.fromEntries(

  Object.entries(movieIds)

  .map(([movieId, externalId]) => [

    movieId,


    Object.fromEntries(

      Object.entries(serverUrlPatterns)

      .map(([server,makeUrl]) => [

        server,

        makeUrl(externalId)

      ])

    )


  ])

);







// =======================
// CREATE TV EPISODE SOURCES
// =======================


const episodeSources = {};



function createEpisodeSources(show){


  Object.values(show.seasons)

  .flat()

  .forEach(episode => {


    episodeSources[episode.id] = {};


    Object.entries(tvServerUrlPatterns)

    .forEach(([server,makeUrl]) => {


      episodeSources[episode.id][server] =
      makeUrl(episode.id);


    });


  });


}



shows.forEach(show => {

  createEpisodeSources(show);

});

// =======================
// HTML ESCAPE
// =======================


function escapeHtml(value){

  return String(value).replace(/[&<>"']/g, character => ({

    "&":"&amp;",
    "<":"&lt;",
    ">":"&gt;",
    "\"":"&quot;",
    "'":"&#039;"

  }[character]));

}







// =======================
// POSTER SYSTEM
// =======================


function posterMarkup(content){


  if(content.poster){

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


function movieCard(movie){


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


function showCard(show){


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


function renderHome(){


const list =
document.querySelector("#hot-list");



if(!list) return;




list.innerHTML = allContent

.slice(0,10)

.map((content,index)=>`



<a

class="hot-row"

href="${
content.tag === "TV SHOW"

?

`show.html?id=${encodeURIComponent(content.id)}`

:

`player.html?id=${encodeURIComponent(content.id)}`

}"

>



<span class="rank">

#${index+1}

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
// SHOW PAGE
// =======================


function renderShowPage(){


const info =
document.querySelector("#show-info");


const episodes =
document.querySelector("#episodes-list");


const seasonSelect =
document.querySelector("#season-select");



if(!info || !episodes || !seasonSelect) return;





const params =
new URLSearchParams(
window.location.search
);




const show =
shows.find(
item => item.id === params.get("id")
);





if(!show){


info.innerHTML = `

<h1>
Show not found
</h1>

`;

return;


}






// =======================
// SHOW HEADER
// =======================


info.innerHTML = `


<div class="show-header">



<img

class="show-poster"

src="${escapeHtml(show.poster)}"

alt="${escapeHtml(show.title)} poster"

>




<div>


<h1>

${escapeHtml(show.title)}

</h1>



<p>

${show.year}

·

${show.tag}

·

★ ${escapeHtml(show.rating)}

</p>



</div>



</div>



`;








// =======================
// SEASON SELECT
// =======================


seasonSelect.innerHTML =

Object.keys(show.seasons)

.map(season => `


<option value="${season}">

Season ${season}

</option>


`)

.join("");










// =======================
// LOAD EPISODES
// =======================


function loadEpisodes(season){



episodes.innerHTML =


show.seasons[season]

.map((episode,index)=>`



<a

class="episode-card"

href="player.html?id=${encodeURIComponent(episode.id)}"

>



<div class="episode-number">

${index+1}

</div>




<div class="episode-title">


${escapeHtml(episode.title)}


</div>




<span>

▶

</span>



</a>



`)

.join("");



}








// default season

loadEpisodes(1);






// change season


seasonSelect.addEventListener(

"change",

()=>{


loadEpisodes(
seasonSelect.value
);


}

);



}

// =======================
// TV EPISODE IDS
// =======================

const episodeIds = {

  "abbott-elementary": {

    1: {
      1: "abbott-elementary-s1-e1",
      2: "abbott-elementary-s1-e2",
      3: "abbott-elementary-s1-e3",
      4: "abbott-elementary-s1-e4",
      5: "abbott-elementary-s1-e5",
      6: "abbott-elementary-s1-e6",
      7: "abbott-elementary-s1-e7"
    },


    2: {
      1: "abbott-elementary-s2-e1",
      2: "abbott-elementary-s2-e2",
      3: "abbott-elementary-s2-e3"
    },


    3: {
      1: "abbott-elementary-s3-e1",
      2: "abbott-elementary-s3-e2",
      3: "abbott-elementary-s3-e3"
    }

  }

};



// =======================
// EPISODE SERVER LINKS
// =======================

const episodeServerPatterns = {

  Helix: id => `https://vidzen.fun/tv/${id}`,

  Lumen: id => `https://cinesrc.st/embed/tv/${id}`,

  Quasar: id => `https://airflix1.com/embed/tv/${id}`,

  Spark: id => `https://player.videasy.to/tv/${id}`,

  Haze: id => `https://primesrc.me/embed/tv?tmdb=${id}`,

  Nyx: id => `https://vidfast.vc/tv/${id}`,

  Gale: id => `https://vaplayer.ru/embed/tv/${id}`,

  Nova: id => `https://peachify.top/embed/tv/${id}`,

  Nebula: id => `https://play.xpass.top/e/tv/${id}`,

  Blaze: id => `https://vidup.to/tv/${id}`,

  Forge: id => `https://player.zxcstream.xyz/player/tv/${id}`,

  Raze: id => `https://vsembed.ru/embed/tv/${id}`,

  Beam: id => `https://vidcore.net/tv/${id}`

};



// =======================
// CREATE EPISODE SOURCES
// =======================

const episodeSources = {};


Object.entries(episodeIds).forEach(
([showId, seasons]) => {


  episodeSources[showId] = {};


  Object.entries(seasons).forEach(
  ([season, episodes]) => {


    episodeSources[showId][season] = {};


    Object.entries(episodes).forEach(
    ([episode, id]) => {


      episodeSources[showId][season][episode] = {};


      Object.entries(episodeServerPatterns)
      .forEach(([server,makeUrl])=>{


        episodeSources[showId]
        [season]
        [episode]
        [server] = makeUrl(id);


      });


    });


  });


});


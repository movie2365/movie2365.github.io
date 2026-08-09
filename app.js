// =======================
// MOVIE DATABASE
// =======================

const movies = [

{
id:"my-dearest-senorita",
title:"My Dearest Señorita",
year:2026,
rating:"4.0",
poster:"assets/movies/my-dearest-se-orita-2026.webp",
tag:"MOVIE"
},

{
id:"scream-7",
title:"Scream 7",
year:2026,
rating:"6.0",
poster:"assets/movies/scream-7-2026.webp",
tag:"MOVIE"
},

{
id:"swapped",
title:"Swapped",
year:2026,
rating:"8.8",
poster:"assets/movies/swapped-1-2026.webp",
tag:"MOVIE"
},

{
id:"send-help",
title:"Send Help",
year:2026,
rating:"7.1",
poster:"assets/movies/send-help-2026.webp",
tag:"MOVIE"
},

{
id:"outcome",
title:"Outcome",
year:2026,
rating:"7.0",
poster:"assets/movies/outcome-2026.webp",
tag:"MOVIE"
},

{
id:"the-gates",
title:"The Gates",
year:2026,
rating:"6.9",
poster:"assets/movies/the-gates-2026.webp",
tag:"MOVIE"
},

{
id:"thrash",
title:"Thrash",
year:2026,
rating:"6.8",
poster:"assets/movies/thrash-2026.webp",
tag:"MOVIE"
},

{
id:"the-devil-wears-prada-2",
title:"The Devil Wears Prada 2",
year:2026,
rating:"8.3",
poster:"assets/movies/the-devil-wears-prada-2-2026.webp",
tag:"MOVIE"
},

{
id:"michael",
title:"Michael",
year:2026,
rating:"7.5",
poster:"assets/movies/michael-1-2026.webp",
tag:"MOVIE"
},

{
id:"apex",
title:"Apex",
year:2026,
rating:"6.4",
poster:"https://cineby.ws/images/posters/movies/apex-1-2026.webp",
tag:"MOVIE"
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
title:"Pilot",
season:1,
episode:1
},

{
title:"Light Bulb",
season:1,
episode:2
},

{
title:"Wishlist",
season:1,
episode:3
},

{
title:"New Tech",
season:1,
episode:4
},

{
title:"Student Transfer",
season:1,
episode:5
},

{
title:"Gifted Program",
season:1,
episode:6
},

{
title:"Art Teacher",
season:1,
episode:7
}

],


2:[

{
title:"Development Day",
season:2,
episode:1
},

{
title:"Wrong Delivery",
season:2,
episode:2
},

{
title:"Story Samurai",
season:2,
episode:3
}

],


3:[

{
title:"Career Day",
season:3,
episode:1
},

{
title:"Gregory's Garden",
season:3,
episode:2
},

{
title:"Alex",
season:3,
episode:3
}

]


}

}

];

// =======================
// MOVIE IDS
// =======================

const movieIds = {

"spider-man":"557",

"spider-man-2":"558",

"spider-man-3":"559",

"my-dearest-senorita":"1239198",

"scream-7":"1159559",

"swapped":"1007757",

"send-help":"1198994",

"outcome":"1049471",

"the-gates":"1366906",

"thrash":"1290417",

"the-devil-wears-prada-2":"1314481",

"michael":"936075",

"apex":"1318447"

};





// =======================
// TV SHOW IDS
// =======================
//
// Each server can have a different show ID
//
// Example:
//
// Helix:
// https://vidzen.fun/tv/94997/1/1
//
// Lumen:
// https://cinesrc.st/embed/tv/79744?s=1&e=1
//
//


const tvShowIds = {


"abbott-elementary":{


title:"Abbott Elementary",


// IDs for each server

servers:{


Helix:"94997",


Lumen:"79744",


// Add more different IDs here later
// if another server needs one


Quasar:"94997",

Spark:"94997",

Haze:"94997",

Nyx:"94997",

Gale:"94997",

Nova:"94997",

Nebula:"94997",

Blaze:"94997",

Forge:"94997",

Raze:"94997",

Beam:"94997"


},



// Available episodes

episodes:{


1:{

1:true,
2:true,
3:true,
4:true,
5:true,
6:true,
7:true

},


2:{

1:true,
2:true,
3:true

},


3:{

1:true,
2:true,
3:true

}


}


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
// MOVIE SERVER PATTERNS
// =======================


const movieServerPatterns = {


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
// TV SERVER PATTERNS
// =======================
//
// Uses:
// show ID
// season number
// episode number
//
// Example:
//
// Helix:
// /tv/94997/1/1
//
// Lumen:
// /tv/79744?s=1&e=1
//
//


const tvServerPatterns = {



Helix:

(showId,season,episode)=>

`https://vidzen.fun/tv/${showId}/${season}/${episode}`,




Lumen:

(showId,season,episode)=>

`https://cinesrc.st/embed/tv/${showId}?s=${season}&e=${episode}`,




Quasar:

(showId,season,episode)=>

`https://airflix1.com/embed/tv/${showId}/${season}/${episode}`,




Spark:

(showId,season,episode)=>

`https://player.videasy.to/tv/${showId}/${season}/${episode}?color=8B5CF6&nextEpisode=true&episodeSelector=true&autoplayNextEpisode=true`,




Haze:

(showId,season,episode)=>

`https://primesrc.me/embed/tv?tmdb=${showId}&season=${season}&episode=${episode}`,




Nyx:

(showId,season,episode)=>

`https://vidfast.vc/tv/${showId}/${season}/${episode}`,




Gale:

(showId,season,episode)=>

`https://vaplayer.ru/embed/tv/${showId}/${season}/${episode}`,




Nova:

(showId,season,episode)=>

`https://peachify.top/embed/tv/${showId}/${season}/${episode}`,




Nebula:

(showId,season,episode)=>

`https://play.xpass.top/e/tv/${showId}/${season}/${episode}`,




Blaze:

(showId,season,episode)=>

`https://vidup.to/tv/${showId}/${season}/${episode}?autoPlay=true`,




Forge:

(showId,season,episode)=>

`https://zxcstream.xyz/player/tv/${showId}/${season}/${episode}`,




Raze:

(showId,season,episode)=>

`https://vsembed.ru/embed/tv/${showId}/${season}/${episode}`,




Beam:

(showId,season,episode)=>

`https://vidcore.net/tv/${showId}/${season}/${episode}?autoPlay=true`


};

// =======================
// CREATE MOVIE SOURCES
// =======================

const iframeSources = {};


Object.entries(movieIds).forEach(
([movieId,id])=>{


  iframeSources[movieId] = {};



  Object.entries(movieServerPatterns)

  .forEach(
  ([server,makeUrl])=>{


    iframeSources[movieId][server] =

    makeUrl(id);


  });


});







// =======================
// CREATE TV EPISODE SOURCES
// =======================


const episodeSources = {};



function createEpisodeSources(){



Object.entries(tvShowIds)

.forEach(
([showId,showData])=>{


episodeSources[showId] = {};





Object.entries(showData.episodes)

.forEach(
([season,episodes])=>{



episodeSources[showId][season] = {};





Object.keys(episodes)

.forEach(
episode=>{



episodeSources[showId][season][episode] = {};





Object.entries(tvServerPatterns)

.forEach(
([server,makeUrl])=>{



// Get the correct ID for this server

const serverShowId =

showData.servers[server];





// Create link

episodeSources[showId]
[season]
[episode]
[server] =


makeUrl(

serverShowId,

season,

episode

);



});





});





});




});



}





createEpisodeSources();

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




list.innerHTML =

allContent

.slice(0,10)

.map(
(content,index)=>`


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


`

)

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





if(!info || !episodes || !seasonSelect){

return;

}






const params =

new URLSearchParams(

window.location.search

);





const show =

shows.find(

item => item.id === params.get("id")

);






if(!show){


info.innerHTML =

`

<h1>

Show not found

</h1>

`;


return;


}







// SHOW INFO


info.innerHTML =


`

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









// SEASON DROPDOWN


seasonSelect.innerHTML =

Object.keys(show.seasons)

.map(

season =>

`

<option value="${season}">

Season ${season}

</option>

`

)

.join("");








// LOAD EPISODES


function loadEpisodes(season){



episodes.innerHTML =


show.seasons[season]

.map(

episode =>

`

<a

class="episode-card"

href="player.html?id=${encodeURIComponent(show.id)}&season=${episode.season}&episode=${episode.episode}"

>



<div class="episode-number">

${episode.episode}

</div>




<div class="episode-title">

${escapeHtml(episode.title)}

</div>



<span>

▶

</span>


</a>


`

)

.join("");



}







// Default season

loadEpisodes(1);








// Change season


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
// PLAYER PAGE
// =======================

function renderPlayer(){


const stack =

document.querySelector("#player-stack");


const buttons =

document.querySelector("#server-buttons");


const info =

document.querySelector("#movie-info");


const fallback =

document.querySelector("#player-fallback");



if(!stack || !buttons || !info || !fallback){

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







let title;

let year;

let tag;

let rating;

let sources = {};








// =======================
// MOVIE PLAYER
// =======================


const movie =

movies.find(

item => item.id === id

);





if(movie){



title = movie.title;

year = movie.year;

tag = movie.tag;

rating = movie.rating;



sources =

iframeSources[movie.id] || {};



}









// =======================
// TV PLAYER
// =======================


else{


const show =

shows.find(

item => item.id === id

);





if(!show){


info.innerHTML =

"<h1>Content not found</h1>";

return;


}





const episodeData =

show.seasons[season]

?.find(

item => item.episode == episode

);






title =

`${show.title} - Season ${season} Episode ${episode} - ${episodeData?.title || ""}`;



year = show.year;

tag = show.tag;

rating = show.rating;





sources =

episodeSources[id]

?.[season]

?.[episode]

|| {};



}








// =======================
// PLAYER INFO
// =======================


info.innerHTML =

`

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

href="javascript:history.back()"

>

← Back

</a>

`;









// =======================
// CREATE IFRAMES
// =======================


const availableServers =

servers.filter(

server => sources[server]

);






stack.innerHTML =


availableServers

.map(

(server,index)=>`


<iframe

class="server-frame${index === 0 ? " active":""}"

data-server="${server}"

src="${escapeHtml(sources[server])}"

allowfullscreen

>

</iframe>


`

)

.join("");









// =======================
// SERVER BUTTONS
// =======================


buttons.innerHTML =


availableServers

.map(

(server,index)=>`


<button

class="server-button${index === 0 ? " active":""}"

data-server="${server}"

type="button"

>

${server}

</button>


`

)

.join("");









// =======================
// SWITCH SERVERS
// =======================


function selectServer(server){



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

!sources[server]

);



}









buttons.onclick = event =>{


const button =

event.target.closest(

".server-button"

);



if(button){


selectServer(

button.dataset.server

);


}



};







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







// =======================
// START APP
// =======================


renderHome();

renderShowPage();

renderPlayer();

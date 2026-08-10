// =======================
// MOVIE DATABASE
// =======================

const movies = [

{
id:"my-dearest-senorita",
title:"My Dearest Señorita",
year:2026,
rating:"4.0",
poster:"/assets/movies/my-dearest-se-orita-2026.webp",
tag:"MOVIE"
},

{
id:"scream-7",
title:"Scream 7",
year:2026,
rating:"6.0",
poster:"/assets/movies/scream-7-2026.webp",
tag:"MOVIE"
},

{
id:"swapped",
title:"Swapped",
year:2026,
rating:"8.8",
poster:"/assets/movies/swapped-1-2026.webp",
tag:"MOVIE"
},

{
id:"send-help",
title:"Send Help",
year:2026,
rating:"7.1",
poster:"/assets/movies/send-help-2026.webp",
tag:"MOVIE"
},

{
id:"outcome",
title:"Outcome",
year:2026,
rating:"7.0",
poster:"/assets/movies/outcome-2026.webp",
tag:"MOVIE"
},

{
id:"the-gates",
title:"The Gates",
year:2026,
rating:"6.9",
poster:"/assets/movies/the-gates-2026.webp",
tag:"MOVIE"
},

{
id:"thrash",
title:"Thrash",
year:2026,
rating:"6.8",
poster:"/assets/movies/thrash-2026.webp",
tag:"MOVIE"
},

{
id:"the-devil-wears-prada-2",
title:"The Devil Wears Prada 2",
year:2026,
rating:"8.3",
poster:"/assets/movies/the-devil-wears-prada-2-2026.webp",
tag:"MOVIE"
},

{
id:"michael",
title:"Michael",
year:2026,
rating:"7.5",
poster:"/assets/movies/michael-1-2026.webp",
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
poster:"/assets/movies/spider-man-2002.png",
tag:"MOVIE"
},

{
id:"spider-man-2",
title:"Spider-Man 2",
year:2004,
rating:"7.5",
poster:"/assets/movies/spider-man-2-2004.png",
tag:"MOVIE"
},

{
id:"spider-man-3",
title:"Spider-Man 3",
year:2007,
rating:"6.3",
poster:"/assets/movies/spider-man-3-2007.webp",
tag:"MOVIE"
}

];




// =======================
// TV SHOW DATABASE
// =======================


const shows = [

  {id:"abbott-elementary", title:"Abbott Elementary", year:2021, rating:"8.2", poster:"https://cineby.ws/images/posters/series/abbott-elementary-2021.webp", tag:"TV SHOW", seasons:{1:[{title:"Pilot",season:1,episode:1},{title:"Light Bulb",season:1,episode:2},{title:"Wishlist",season:1,episode:3},{title:"New Tech",season:1,episode:4},{title:"Student Transfer",season:1,episode:5},{title:"Gifted Program",season:1,episode:6},{title:"Art Teacher",season:1,episode:7},{title:"Work Family",season:1,episode:8},{title:"Step Class",season:1,episode:9},{title:"Open House",season:1,episode:10},{title:"Desking",season:1,episode:11},{title:"Ava vs. Superintendent",season:1,episode:12},{title:"Zoo Balloon",season:1,episode:13}],2:[{title:"Development Day",season:2,episode:1},{title:"Wrong Delivery",season:2,episode:2},{title:"Story Samurai",season:2,episode:3},{title:"The Principal's Office",season:2,episode:4},{title:"Juice",season:2,episode:5},{title:"Candy Zombies",season:2,episode:6},{title:"Attack Ad",season:2,episode:7},{title:"Egg Drop",season:2,episode:8},{title:"Sick Day",season:2,episode:9},{title:"Holiday Hookah",season:2,episode:10},{title:"Read-a-Thon",season:2,episode:11},{title:"Fight",season:2,episode:12},{title:"Fundraiser",season:2,episode:13},{title:"Valentine's Day",season:2,episode:14},{title:"Fire",season:2,episode:15},{title:"Teacher Conference",season:2,episode:16},{title:"Mural Arts",season:2,episode:17},{title:"Teacher Appreciation",season:2,episode:18},{title:"Festival",season:2,episode:19},{title:"Educator of the Year",season:2,episode:20},{title:"Mom",season:2,episode:21},{title:"Franklin Institute",season:2,episode:22}],3:[{title:"Career Day (1) / Career Day (2)",season:3,episode:1},{title:"Gregory's Garden Goofballs",season:3,episode:2},{title:"Smoking",season:3,episode:3},{title:"Breakup",season:3,episode:4},{title:"Willard R. Abbott",season:3,episode:5},{title:"Librarian",season:3,episode:6},{title:"Panel",season:3,episode:7},{title:"Alex",season:3,episode:8},{title:"2 Ava 2 Fest",season:3,episode:9},{title:"Double Date",season:3,episode:10},{title:"Mother's Day",season:3,episode:11},{title:"Smith Playground",season:3,episode:12},{title:"Party",season:3,episode:13}],4:[{title:"Back to School",season:4,episode:1},{title:"Ringworm",season:4,episode:2},{title:"Class Pet",season:4,episode:3},{title:"Costume Contest",season:4,episode:4},{title:"Dad Fight",season:4,episode:5},{title:"The Deli",season:4,episode:6},{title:"Winter Show",season:4,episode:7},{title:"Winter Break",season:4,episode:8},{title:"Volunteers",season:4,episode:9},{title:"Testing",season:4,episode:10},{title:"Strike",season:4,episode:11},{title:"Girard Creek",season:4,episode:12},{title:"The Science Fair",season:4,episode:13},{title:"District Budget Meeting",season:4,episode:14},{title:"100th Day of School",season:4,episode:15},{title:"Books",season:4,episode:16},{title:"Karaoke",season:4,episode:17},{title:"Audit",season:4,episode:18},{title:"Music Class",season:4,episode:19},{title:"Ava Fest: Tokyo Drift",season:4,episode:20},{title:"Rally",season:4,episode:21},{title:"Please Touch Museum",season:4,episode:22}],5:[{title:"Team Building",season:5,episode:1},{title:"Cheating",season:5,episode:2},{title:"Ballgame",season:5,episode:3},{title:"Game Night",season:5,episode:4},{title:"Camping",season:5,episode:5},{title:"No Phones",season:5,episode:6},{title:"Goofgirl",season:5,episode:7},{title:"Birthday",season:5,episode:8},{title:"Mall (1)",season:5,episode:9},{title:"Mall (2): Questions & Concerns",season:5,episode:10},{title:"Mall (3): Heroes",season:5,episode:11},{title:"Picture Day",season:5,episode:12},{title:"Candygrams",season:5,episode:13},{title:"Aide",season:5,episode:14},{title:"Safety Day",season:5,episode:15},{title:"Campaign",season:5,episode:16},{title:"No Homework",season:5,episode:17},{title:"April Fools",season:5,episode:18},{title:"Trip",season:5,episode:19},{title:"Night Out",season:5,episode:20},{title:"Ava & Fest",season:5,episode:21},{title:"Miami",season:5,episode:22}]}},
  {id:"the-rookie", title:"The Rookie", year:2018, rating:"8.0", poster:"https://cineby.ws/images/posters/series/the-rookie-2018.webp", tag:"TV SHOW", seasons:{1:[{title:"Pilot",season:1,episode:1},{title:"Crash Course",season:1,episode:2},{title:"The Good, the Bad and the Ugly",season:1,episode:3},{title:"The Switch",season:1,episode:4},{title:"The Roundup",season:1,episode:5},{title:"The Hawke",season:1,episode:6},{title:"The Ride Along",season:1,episode:7},{title:"Time of Death",season:1,episode:8},{title:"Standoff",season:1,episode:9},{title:"Flesh and Blood",season:1,episode:10},{title:"Redwood",season:1,episode:11},{title:"Heartbreak",season:1,episode:12},{title:"Caught Stealing",season:1,episode:13},{title:"Plain Clothes Day",season:1,episode:14},{title:"Manhunt",season:1,episode:15},{title:"Greenlight",season:1,episode:16},{title:"The Shake Up",season:1,episode:17},{title:"Homefront",season:1,episode:18},{title:"The Checklist",season:1,episode:19},{title:"Free Fall",season:1,episode:20}],2:[{title:"Impact",season:2,episode:1},{title:"The Night General",season:2,episode:2},{title:"The Bet",season:2,episode:3},{title:"Warriors and Guardians",season:2,episode:4},{title:"Tough Love",season:2,episode:5},{title:"Fallout",season:2,episode:6},{title:"Safety",season:2,episode:7},{title:"Clean Cut",season:2,episode:8},{title:"Breaking Point",season:2,episode:9},{title:"The Dark Side",season:2,episode:10},{title:"Day of Death",season:2,episode:11},{title:"Now and Then",season:2,episode:12},{title:"Follow-Up Day",season:2,episode:13},{title:"Casualties",season:2,episode:14},{title:"Hand-Off",season:2,episode:15},{title:"The Overnight",season:2,episode:16},{title:"Control",season:2,episode:17},{title:"Under the Gun",season:2,episode:18},{title:"The Q Word",season:2,episode:19},{title:"The Hunt",season:2,episode:20}],3:[{title:"Consequences",season:3,episode:1},{title:"In Justice",season:3,episode:2},{title:"La Fiera",season:3,episode:3},{title:"Sabotage",season:3,episode:4},{title:"Lockdown",season:3,episode:5},{title:"Revelations",season:3,episode:6},{title:"True Crime",season:3,episode:7},{title:"Bad Blood",season:3,episode:8},{title:"Amber",season:3,episode:9},{title:"Man of Honor",season:3,episode:10},{title:"New Blood",season:3,episode:11},{title:"Brave Heart",season:3,episode:12},{title:"Triple Duty",season:3,episode:13},{title:"Threshold",season:3,episode:14}],4:[{title:"Life and Death",season:4,episode:1},{title:"Five Minutes",season:4,episode:2},{title:"In the Line of Fire",season:4,episode:3},{title:"Red Hot",season:4,episode:4},{title:"A.C.H.",season:4,episode:5},{title:"Poetic Justice",season:4,episode:6},{title:"Fire Fight",season:4,episode:7},{title:"Hit and Run",season:4,episode:8},{title:"Breakdown",season:4,episode:9},{title:"Heartbeat",season:4,episode:10},{title:"End Game",season:4,episode:11},{title:"The Knock",season:4,episode:12},{title:"Fight or Flight",season:4,episode:13},{title:"Long Shot",season:4,episode:14},{title:"Hit List",season:4,episode:15},{title:"Real Crime",season:4,episode:16},{title:"Coding",season:4,episode:17},{title:"Backstabbers",season:4,episode:18},{title:"Simone",season:4,episode:19},{title:"Enervo",season:4,episode:20},{title:"Mother's Day",season:4,episode:21},{title:"Day in the Hole",season:4,episode:22}],5:[{title:"Double Down",season:5,episode:1},{title:"Labor Day",season:5,episode:2},{title:"Dye Hard",season:5,episode:3},{title:"The Choice",season:5,episode:4},{title:"The Fugitive",season:5,episode:5},{title:"The Reckoning",season:5,episode:6},{title:"Crossfire",season:5,episode:7},{title:"The Collar",season:5,episode:8},{title:"Take Back",season:5,episode:9},{title:"The List",season:5,episode:10},{title:"The Naked and the Dead",season:5,episode:11},{title:"Death Notice",season:5,episode:12},{title:"Daddy Cop",season:5,episode:13},{title:"Death Sentence",season:5,episode:14},{title:"The Con",season:5,episode:15},{title:"Exposed",season:5,episode:16},{title:"The Enemy Within",season:5,episode:17},{title:"Double Trouble",season:5,episode:18},{title:"A Hole in the World",season:5,episode:19},{title:"S.T.R.",season:5,episode:20},{title:"Going Under",season:5,episode:21},{title:"Under Siege",season:5,episode:22}],6:[{title:"Strike Back",season:6,episode:1},{title:"The Hammer",season:6,episode:2},{title:"Trouble in Paradise",season:6,episode:3},{title:"Training Day",season:6,episode:4},{title:"The Vow",season:6,episode:5},{title:"Secrets and Lies",season:6,episode:6},{title:"Crushed",season:6,episode:7},{title:"Punch Card",season:6,episode:8},{title:"The Squeeze",season:6,episode:9},{title:"Escape Plan",season:6,episode:10}],7:[{title:"The Shot",season:7,episode:1},{title:"The Watcher",season:7,episode:2},{title:"Out of Pocket",season:7,episode:3},{title:"Darkness Falling",season:7,episode:4},{title:"Til Death",season:7,episode:5},{title:"The Gala",season:7,episode:6},{title:"The Mickey",season:7,episode:7},{title:"Wildfire",season:7,episode:8},{title:"The Kiss",season:7,episode:9},{title:"Chaos Agent",season:7,episode:10},{title:"Speed",season:7,episode:11},{title:"April Fools",season:7,episode:12},{title:"Three Billboards",season:7,episode:13},{title:"Mad About Murder",season:7,episode:14},{title:"A Deadly Secret",season:7,episode:15},{title:"The Return",season:7,episode:16},{title:"Mutiny and the Bounty",season:7,episode:17},{title:"The Good, the Bad, and the Oscar",season:7,episode:18}],8:[{title:"Czech Mate",season:8,episode:1},{title:"Fast Andy",season:8,episode:2},{title:"The Red Place",season:8,episode:3},{title:"Cut and Run",season:8,episode:4},{title:"The Network",season:8,episode:5},{title:"Burn 4 Love",season:8,episode:6},{title:"Baja",season:8,episode:7},{title:"Grand Theft Aircraft",season:8,episode:8},{title:"Fun and Games",season:8,episode:9},{title:"His Name Was Martin",season:8,episode:10},{title:"Aftermath",season:8,episode:11},{title:"Spy Games",season:8,episode:12},{title:"The Thinker",season:8,episode:13},{title:"Tiger Bear",season:8,episode:14},{title:"Survive the Streets",season:8,episode:15},{title:"Out of Time",season:8,episode:16},{title:"Dead Ringer",season:8,episode:17},{title:"The Bandit",season:8,episode:18}]}},
  
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


// =======================
// TV SHOW IDS
// =======================

const tvShowIds = {

  "abbott-elementary": {id:"125935",customIds:{},episodes:{1:{1:true,2:true,3:true,4:true,5:true,6:true,7:true,8:true,9:true,10:true,11:true,12:true,13:true},2:{1:true,2:true,3:true,4:true,5:true,6:true,7:true,8:true,9:true,10:true,11:true,12:true,13:true,14:true,15:true,16:true,17:true,18:true,19:true,20:true,21:true,22:true},3:{1:true,2:true,3:true,4:true,5:true,6:true,7:true,8:true,9:true,10:true,11:true,12:true,13:true},4:{1:true,2:true,3:true,4:true,5:true,6:true,7:true,8:true,9:true,10:true,11:true,12:true,13:true,14:true,15:true,16:true,17:true,18:true,19:true,20:true,21:true,22:true},5:{1:true,2:true,3:true,4:true,5:true,6:true,7:true,8:true,9:true,10:true,11:true,12:true,13:true,14:true,15:true,16:true,17:true,18:true,19:true,20:true,21:true,22:true}}},
  "the-rookie": {id:"79744",customIds:{},episodes:{1:{1:true,2:true,3:true,4:true,5:true,6:true,7:true,8:true,9:true,10:true,11:true,12:true,13:true,14:true,15:true,16:true,17:true,18:true,19:true,20:true},2:{1:true,2:true,3:true,4:true,5:true,6:true,7:true,8:true,9:true,10:true,11:true,12:true,13:true,14:true,15:true,16:true,17:true,18:true,19:true,20:true},3:{1:true,2:true,3:true,4:true,5:true,6:true,7:true,8:true,9:true,10:true,11:true,12:true,13:true,14:true},4:{1:true,2:true,3:true,4:true,5:true,6:true,7:true,8:true,9:true,10:true,11:true,12:true,13:true,14:true,15:true,16:true,17:true,18:true,19:true,20:true,21:true,22:true},5:{1:true,2:true,3:true,4:true,5:true,6:true,7:true,8:true,9:true,10:true,11:true,12:true,13:true,14:true,15:true,16:true,17:true,18:true,19:true,20:true,21:true,22:true},6:{1:true,2:true,3:true,4:true,5:true,6:true,7:true,8:true,9:true,10:true},7:{1:true,2:true,3:true,4:true,5:true,6:true,7:true,8:true,9:true,10:true,11:true,12:true,13:true,14:true,15:true,16:true,17:true,18:true},8:{1:true,2:true,3:true,4:true,5:true,6:true,7:true,8:true,9:true,10:true,11:true,12:true,13:true,14:true,15:true,16:true,17:true,18:true}}},
};

// =======================
// SERVERS
// =======================

const servers = [ "Helix", "Lumen", "Quasar", "Spark", "Haze", "Nyx", "Gale", "Nova", "Nebula", "Blaze", "Forge", "Raze", "Beam" ];





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

showData.customIds[server]
|| showData.id;





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
'"':"&quot;",
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

href="/player.html?id=${encodeURIComponent(movie.id)}"

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
// SEARCH PAGE
// =======================

function renderSearch(){

const searchInput = document.querySelector("#search-input");
const resultsGrid = document.querySelector("#results-grid");
const resultCount = document.querySelector("#result-count");
const clearButton = document.querySelector("#clear-search");
const searchForm = document.querySelector("#results-search");
const filterButtons = document.querySelectorAll(".filter");

let currentFilter = "all";

const urlParams = new URLSearchParams(window.location.search);
const urlQuery = urlParams.get("q");

if(urlQuery){
    searchInput.value = urlQuery;
}

if(!searchInput || !resultsGrid){
return;
}


function performSearch(){

    const query = searchInput.value
        .toLowerCase()
        .trim();

    // Nothing typed = show nothing
    if(!query){
        resultsGrid.innerHTML = "";

        if(resultCount){
            resultCount.textContent = "";
        }

        return;
    }

    let results = allContent.filter(content =>
        content.title
            .toLowerCase()
            .includes(query)
    );

    // Apply selected filter
    if(currentFilter === "movie"){
        results = results.filter(
            content => content.tag === "MOVIE"
        );
    }

    if(currentFilter === "tv"){
        results = results.filter(
            content => content.tag === "TV SHOW"
        );
    }

    resultsGrid.innerHTML = results
        .map(content =>
            content.tag === "TV SHOW"
                ? showCard(content)
                : movieCard(content)
        )
        .join("");

    if(resultCount){
        resultCount.textContent =
            `${results.length} results`;
    }
}


// =======================
// SEARCH FORM
// =======================

if(searchForm){

searchForm.addEventListener(
"submit",
event => {

event.preventDefault();

performSearch();

});

}



// =======================
// CLEAR SEARCH
// =======================

if(clearButton){

clearButton.addEventListener(
"click",
() => {

searchInput.value = "";

performSearch();

searchInput.focus();

});

}

// =======================
// FILTER BUTTONS
// =======================

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        // Remove active from all buttons
        filterButtons.forEach(btn =>
            btn.classList.remove("active")
        );

        // Make clicked button active
        button.classList.add("active");

        // Set current filter
        currentFilter = button.dataset.filter;

        // Update results
        performSearch();

    });

});

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

`/player.html?id=${encodeURIComponent(content.id)}`

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

href="/player.html?id=${encodeURIComponent(show.id)}&season=${episode.season}&episode=${episode.episode}"

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

renderSearch();

renderShowPage();

renderPlayer();

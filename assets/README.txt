CINEBY MOVIE POSTERS
====================

Put your movie poster images in this folder.

Example:

assets/movies/spider-man.jpg
assets/movies/scream-7.jpg
assets/movies/swapped.jpg


ADDING A POSTER
===============

Open app.js.

Find the movie you want.

For example:

poster: ""


Change it to:

poster: "assets/movies/spider-man.jpg"


The filename must match the image file exactly.


SUPPORTED IMAGE TYPES
=====================

.jpg
.jpeg
.png
.webp


EXAMPLE MOVIE
=============

{
  id: "spider-man",
  title: "Spider-Man",
  year: 2002,
  rating: "7.3",
  poster: "assets/movies/spider-man.jpg",
  tag: "MOVIE"
}


IMPORTANT
=========

GitHub filenames are case-sensitive.

If your file is:

Spider-Man.jpg

then this will NOT work:

assets/movies/spider-man.jpg

The capitalization needs to match.


You can delete this README.txt later if you want.

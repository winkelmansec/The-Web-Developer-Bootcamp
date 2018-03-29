
var movieSentence = "";

var movie = [

    {
        title:"12 Angry Men",
        rating:"4 stars",
        hasWatched:true
    },

    {
        title:"Star Wars: A New Hope",
        rating:"5 stars",
        hasWatched:true
    },

    {
        title:"The Wizard of Oz",
        rating:"4.5 stars",
        hasWatched:false
    },

    {
        title:"Inception",
        rating:"4 stars",
        hasWatched:true
    },

    {
        title:"Stardust",
        rating:"3.5 stars",
        hasWatched:false
    },

];

function movieList (movie, movieSentence) {

    var movieSentence = "";

    for (var i = 0; i < movie.length; i++) {
        if (movie[i].hasWatched = true) {
            movieSentence.push("You have watched" + movie[i].title + "-" + movie[i].rating + "stars /n");
        } else {
            movieSentence.push("You have not seen" + movie[i].title + "-" + movie[i].rating + "stars /n");
        }
    }
}



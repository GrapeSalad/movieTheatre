//BUSINESS LOGIC
function Movie(name, rating, synopsis) {
  this.movieName = name;
  this.movieRating = rating;
  this.movieSynopsis = synopsis;

};


//UI LOGIC
$(document).ready(function() {
  $("#mgmtPortal").click(function(){
    $(".hidden-content").slideToggle();
  })

  $("#mgmtForm").submit(function(event){
    event.preventDefault();
    var mgmtMovieNameInput = $(this).find(".movieName").val();
    var mgmtMovieRatingInput = $(this).find(".movieRating").val();
    var mgmtMovieSynopsisInput =  $(this).find(".movieSynopsis").val();

    var newMovie = new Movie(mgmtMovieNameInput, mgmtMovieRatingInput, mgmtMovieSynopsisInput);

    console.log(newMovie);
  });
});

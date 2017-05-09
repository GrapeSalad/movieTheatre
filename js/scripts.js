//BUSINESS LOGIC

  // constructors
function Movie(name, rating, synopsis) {
  this.movieName = name;
  this.movieRating = rating;
  this.movieSynopsis = synopsis;
};
function Theatre() {
  this.theatreMovies = [];
};

//UI LOGIC
$(document).ready(function() {
  var newTheatre;

  $("#mgmtPortal").click(function(){
    $(".hidden-content").slideToggle();
  })

  // mgmeForm submission collects movie data
  $("#mgmtForm").submit(function(event){
    event.preventDefault();
    var mgmtMovieNameInput = $(this).find(".movieName").val().replace(/\s/g, '');
    var mgmtMovieRatingInput = $(this).find(".movieRating").val();
    var mgmtMovieSynopsisInput =  $(this).find(".movieSynopsis").val();

    // initialize newMovie object
    var newMovie = new Movie(mgmtMovieNameInput, mgmtMovieRatingInput, mgmtMovieSynopsisInput);
    newTheatre = new Theatre(mgmtMovieNameInput);
    newTheatre.theatreMovies.push(newMovie);
  });

// Adds new tab
  $("#addMovieToPage").last().click(function() {
    $("ul#navTabs").append('<li class=""><a data-toggle="tab" href="#' +
                        newTheatre.theatreMovies[0].movieName +
                        '">' +
                        newTheatre.theatreMovies[0].movieName +
                        '</a></li>'
    );

    // append tab-content to tab-content-parent
    $("div#tabContent").append('<div id="' +
                                newTheatre.theatreMovies[0].movieName +
                                '" class="tab-pane fade">' +
                                '<p>'+ newTheatre.theatreMovies[0].movieRating +'</p>' +
                                '<p>'+ newTheatre.theatreMovies[0].movieSynopsis +'</p>' +
                                '<form class="userForm">' +
                                  '<label for="ticketType">Select a ticket type</label>'+
                                  '<select class="form-control" id="ticketType">'+
                                    '<option>Standard</option>'+
                                    '<option>Matine</option>'+
                                    '<option>Seinor</option>'+
                                  '</select>'+
                                  '<label for="ticketNumber">Quantity:</label>'+
                                  '<input type="number" id="ticketNumber">'+
                                  '<label for="userName">Name:</label>'+
                                  '<input type="text" id="userName" value="">'+
                                '</form>'+
                                '</div>'
    );
  });
});

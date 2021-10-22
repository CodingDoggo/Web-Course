
var movies = [
    {
      name:"Interstellar",
      release:2014,
      origin:"USA",
      actors:[
         "Matthew McConaughey",
         " Anne Hathaway",
         " Jessica Chastain",
         " Mackenzie Foy"
      ],
      image:"https://www.themoviedb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
      state: false,
      rating:0
    },
    {
        name:"Dune",
        release:2021,
        origin:"USA",
        actors:[
           "Timothée Chalamet",
           " Zendeya Marie",
           " Rebecca Ferguson",
           "  Jason Momoa"
        ],
        image:"https://static1.srcdn.com/wordpress/wp-content/uploads/2021/08/dune-movie-poster-.jpg",
        state: false,
        rating:0
    },
    {
        name:"Django the unchained",
        release:2012,
        origin:"USA",
        actors:[
           "Jamie Foxx",
           " Christoph Waltz",
           " Leonardo DiCaprio",
           " Samuel L. Jackson"
        ],
        image:"https://m.media-amazon.com/images/M/MV5BMjIyNTQ5NjQ1OV5BMl5BanBnXkFtZTcwODg1MDU4OA@@._V1_UY1200_CR90,0,630,1200_AL_.jpg",
        state: false,
        rating:0
    }
]


function addNewToTheTable(){
    let name = document.getElementById("movie_name").value;
    let release = document.getElementById("movie_release").value;
    let origin = document.getElementById("movie_origin").value;
    let actors = document.getElementById("movie_actors").value;
    let image = document.getElementById("movie_link").value;

    document.getElementById("movie_name").value = "";
    document.getElementById("movie_release").value = "";
    document.getElementById("movie_origin").value = "";
    document.getElementById("movie_actors").value = "";
    document.getElementById("movie_link").value = "";

    return {
      name:name,
      release:release,
      origin:origin,
      actors:actors,
      image:image,
      state:false,
      rating:0
     }
     
}

function updateHref(){
   let name = document.getElementById("movie_name").value;
   document.getElementById("image_link").href = `https://www.google.com/search?q=${name}`
}


function changeState(index){
     let newstate = movies[index].state = !movies[index].state;
     let newButton = document.getElementById(`btn${index}`);

     let tableRow = document.getElementById(`tr${index}`);

     let succesStyle = "#D1E7DD"
     let dangerStyle = "#F8D7DA"

     newButton.innerHTML = newstate;

     if(movies[index].state == true){
         newButton.classList.replace("btn-danger","btn-success");
         tableRow.style.backgroundColor = succesStyle;
     } else{
        newButton.classList.replace("btn-success","btn-danger");
        tableRow.style.backgroundColor = dangerStyle;
     }


}
function changeTable(){ 
  let exist = addNewToTheTable();
  displayTable(exist);
}

function movieAdd(){
  document.getElementById("inner_button").innerHTML = `<!-- Button trigger modal -->
  <label><img src="pngfind.com-film-reel-png-2993362.png" style="height:40px; width:40px" class="m-2"></label><button type="button" class="btn btn-dark mb-2" data-bs-toggle="modal" data-bs-target="#exampleModal">
    Add a new movie
  </button>
  
  <!-- Modal -->
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <form class="modal-content" id="movie_form">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Update the movie list</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
        <ul>
        <li><input type="text" placeholder="Movie name-For more details click the link." class="mb-2 form-control" id="movie_name" onkeyup="updateHref()" required></li>
        <li><input type="number" placeholder="Release date" class="mb-2 form-control" id="movie_release" min="1930" max="2021"></li>
        <li><input type="text" placeholder="Country of origin" class="mb-2 form-control" id="movie_origin"></li>
        <li><input type="text" placeholder="Actors-Use comma in between" class="mb-2 form-control" id="movie_actors" required></li>
        <li><input type="text" placeholder="Link of the movie image-Poster for HQ" class="mb-2 form-control" id="movie_link"></li>
        <a href="" class="a_modal" style="color: black;" id="image_link">Can't find the given movie details? Click here!</a>
        <ul>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="submit" class="btn btn-dark">Save changes</button>
        </div>
      </form>
    </div>
  </div>`
  document.getElementById("movie_form").addEventListener('submit',(e) =>{
      e.preventDefault();//Prevents refresh of the page
      changeTable();
  })
}

function ratinStars(element){
    let stars = element.parentElement.querySelectorAll(".fa-star");
    stars.forEach((item) =>{
       item.classList.remove("checked")
    })

    let n = element.getAttribute("data-id");
    let grabElement = element.parentElement.parentElement.getAttribute("data-id");
    movies[grabElement].rating = n;

    if(n!=0){
    for(let i=1;i<=n;i++){
      element.parentElement.querySelector(".star"+i).classList.add("checked");
    }
  }

}

function displayTable(exist = null){
    if(exist != null) movies.push(exist);
     
    let innerTable = "";
    let buttonStyle = "";
    let rowColor = "";

    movies.forEach((movie,index) => {
        if(movie.state){
          buttonStyle = "success"
          rowColor = "#D1E7DD"
        }else{
          buttonStyle = "danger"
          rowColor = "#F8D7DA"
        }

        innerTable += `<tr id="tr${index}" data-id="${index}" style="background-color:${rowColor};">
        <td><button class="btn btn-${buttonStyle} mb-3" id="btn${index}" onclick="changeState(${index})">${movie.state}</button>
        <br>`
        for(let i = 1; i <= 5; i++)
    {
        innerTable += `<span class="fa fa-star star${i} `+ (i <= movie.rating ? "checked" : "") +`" style="`+ (i==1?"margin-left: 0px;":"") +`" data-id="${i}" onclick="ratinStars(this)"></span>`
    }
        /*<span class="fa fa-star star0" data-id="0" onclick="ratinStars(this)"></span>
        <span class="fa fa-star star1" data-id="1" onclick="ratinStars(this)"></span>
        <span class="fa fa-star star2" data-id="2" onclick="ratinStars(this)"></span>
        <span class="fa fa-star star3" data-id="3" onclick="ratinStars(this)"></span>
        <span class="fa fa-star star4" data-id="4" onclick="ratinStars(this)"></span>*/ 
        innerTable += `</td>
        <td>${movie.name}</td>
        <td>${movie.release}</td>
        <td>${movie.origin}</td>
        <td>${movie.actors}</td>
        <td><img src=${movie.image} alt=""></td>
    </tr>`

    })

    document.getElementById("table_body").innerHTML = innerTable;
}


function start(){
  movieAdd();
  displayTable();
}

start();

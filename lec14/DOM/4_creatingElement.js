let newMovie = document.createElement('li')
newMovie.innerText ='SpiderMan homecoming'
newMovie.classList.add('movie-name')

let movieList = document.querySelector('.movie-list')

setTimeout(()=>{
    movieList.append(newMovie)
    let movies = document.querySelectorAll('.movie-name')
    console.log(movies)
})

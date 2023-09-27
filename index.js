function addMovie(event) {
    event.preventDefault()
    let aVariable = document.querySelector('ul')
    let inputField = document.querySelector('input')
    let movie = document.createElement('li')
    let movieTitle = movie.textContent = inputField.value
    // movie.appendChild(movieTitle).querySelector('ul').appendChild(movie)
    aVariable.appendChild(movie)
}

document.querySelector('form').addEventListener('submit', addMovie)


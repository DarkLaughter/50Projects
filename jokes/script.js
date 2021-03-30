const jokeElement = document.getElementById('joke')
const btn = document.getElementById('jokeBtn')

btn.addEventListener('click', generateJoke)

generateJoke()

function generateJoke() {
    const config = {
        headers: {
        'Accept': 'application/json'
    },
}


    fetch('https://icanhazdadjoke.com', config)
    .then((res) => res.json())
    .then((data) => {
        jokeElement.innerHTML = data.joke
    })
}
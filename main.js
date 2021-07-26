
let pokeInput = document.querySelector('#pokeInput')
let pokeButton = document.querySelector('#pokeButton')



pokeButton.addEventListener('click', function (event) {
    event.preventDefault()
    let inputValue = pokeInput.value
    fetch(`https://pokeapi.co/api/v2/pokemon/${inputValue}`)
        .then(response => response.json())
        .then(pokemon => {
            console.log(pokemon)
            //This is where we can use our data from the website.
            let pokeDiv = document.createElement('div')
            let pokePic = document.createElement('img')
            pokePic.src = pokemon.sprites.other['official-artwork'].front_default
            pokeDiv.innerHTML = `Name: ${pokemon.name}<br>
            Pokedex Number: ${pokemon.id}<br>
            `
            
            pokeDiv.append(pokePic)
            document.body.append(pokeDiv)
        })
})
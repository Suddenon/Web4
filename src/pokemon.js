var link = document.getElementById('pokemon-tab');
link.addEventListener('click', function() {
    fetchPokemon();
})

// function viewPokemonPage() {
//     var contentBlock = document.querySelector('.content')
//     contentBlock.innerHTML = fetchPokemon()

// }

async function fetchPokemon() {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/mewtwo/')
    const pokemon = await response.json()

    var pokemonData = document.createElement('div')

    const pokemonName = document.createElement('h3')
    pokemonName.innerHTML = pokemon['forms']['0']['name']
    pokemonData.appendChild(pokemonName)

    const abilities = document.createElement('h4')
    abilities.innerHTML = 'Abilities:'
    pokemonData.appendChild(abilities)

    for (let i in pokemon['abilities']) {
        const pokemonAbilityName = document.createElement('h5')
        pokemonAbilityName.innerHTML = pokemon['abilities'][i]['ability']['name']
        pokemonData.appendChild(pokemonAbilityName)

        const response = await fetch(pokemon['abilities'][i]['ability']['url'])
        const ability = await response.json()

        const pokemonAbility = document.createElement('p')
        pokemonAbility.innerHTML = ability['effect_entries']['0']['effect']
        pokemonData.appendChild(pokemonAbility)
    }
    var contentBlock = document.querySelector('.content')
    contentBlock.innerHTML = pokemonData.outerHTML

}
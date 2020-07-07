import axios from 'axios'

const url = 'http://pokescan.ru'

export const fetchPokemonsList = async () => {
  try {
    const data = await axios.get(`${url}/api/pokemons`)

    return data
  } catch (e) {
    console.log(e)
  }
}

export const fetchPokemon = async (id) => {
  try {
    const data = await axios.get(`${url}/api/pokemons/${id}`)

    return data
  } catch (e) {
    console.log(e)
  }
}

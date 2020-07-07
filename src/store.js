import { fetchPokemonsList } from './api'

function noop () {}

export function createStore () {
  return {
    pokemonsList: [],
    perPage: 20,
    prevPage: 0,
    pagStart: 0,
    pagEnd: 20,
    loading: false,
    pokemonsCount: 0,
    async fetchPokemons () {
      this.loading = true

      this.pokemonsList = await fetchPokemonsList().then((res) => {
        this.loading = false
        return res.data
      })
    },
    get getPokemons () {
      return this.pokemonsList
    },
    setPerPage (value) {
      this.perPage = +value
    },
    pagLeft () {
      this.pagStart = this.pagStart - this.perPage
      this.pagEnd = this.pagEnd - this.perPage
    },
    pagRight () {
      this.pagStart = this.pagStart + this.perPage
      this.pagEnd = this.pagEnd + this.perPage
    },
    token: null,
    userId: null,
    login: noop,
    logout: noop,
    isAuthenticated: false
  }
}

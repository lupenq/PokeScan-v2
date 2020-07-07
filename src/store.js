import { fetchPokemonsCount, fetchPokemonsList } from './api'

function noop () {
}

export function createStore () {
  return {
    pokemonsList: [],
    perPage: 20,
    prevPage: 0,
    pagStart: 0,
    pagEnd: 20,
    actualPage: 1,
    loading: false,
    pokemonsCount: 0,
    async fetchPokemons () {
      this.loading = true

      this.pokemonsList = await fetchPokemonsList().then((res) => {
        this.loading = false
        return res.data
      })
    },
    setPokemnsCount (value) {
      this.pokemonsCount = value
    },
    setActualPage (value) {
      this.actualPage = value
      this.pagStart = 0
      this.pagEnd = 20
    },
    setPerPage (value) {
      this.perPage = +value
    },
    pagLeft () {
      this.pagStart = this.pagStart - this.perPage
      this.pagEnd = this.pagEnd - this.perPage
      this.actualPage--
    },
    pagRight () {
      this.pagStart = this.pagStart + this.perPage
      this.pagEnd = this.pagEnd + this.perPage
      this.actualPage++
    },
    async getCount () {
      this.pokemonsCount = await fetchPokemonsCount().then(res => res.data)
    }
  }
}

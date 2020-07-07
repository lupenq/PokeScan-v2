import React from 'react'
import { PokeCard } from '../PokeCard/PokeCard'
import { useDataStore } from '../../context'
import { observer } from 'mobx-react-lite'

export const CardList = observer(({ data }) => {
  const store = useDataStore()
  const {
    pokemonsList,
    perPage,
    prevPage,
    loading,
    pokemonsCount,
    fetchPokemons,
    getPokemons,
    pagStart,
    pagEnd
  } = store
  return (
    data.slice(pagStart, pagEnd).map(poke => <PokeCard key={poke.name} pokemon={poke}/>)
  )
})

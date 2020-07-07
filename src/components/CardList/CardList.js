import React, { useEffect, useState } from 'react'
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
    pagEnd,
    getCount,
    setPokemnsCount,
    setActualPage,
    searchValue
  } = store

  const [actualData, setActualData] = useState(data)

  useEffect(() => {
    setActualData(data)
  }, [data])

  useEffect(() => {
    setPokemnsCount(actualData.length)
  }, [actualData])

  return (
    actualData
      .filter(a => a.name.match(searchValue))
      .slice(pagStart, pagEnd).map(poke => <PokeCard key={poke.pokeId} pokemon={poke}/>)
  )
})

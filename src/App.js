import React, { useEffect, useState } from 'react'
import styles from './App.module.sass'
import { observer } from 'mobx-react-lite'
import { useDataStore } from './context'
import { CardList } from './components/CardList/CardList'
import { Header } from './components/Header/Header'
import { Loader } from './components/Loader/Loader'

export const App = observer(() => {
  const store = useDataStore()
  const {
    pokemonsList,
    perPage,
    loading,
    pokemonsCount,
    fetchPokemons,
    getPokemons,
    getCount,
    setPokemnsCount,
    setActualPage
  } = store

  const [actualData, setActualData] = useState(pokemonsList)

  useEffect(() => {
    fetchPokemons()
    getCount()
  }, [])

  useEffect(() => {
    setActualData(pokemonsList)
  }, [pokemonsList])

  const searchByName = (value) => {
    setActualPage(1)
    setActualData(pokemonsList.filter(a => {
      return a.name.match(value)
    }))
  }

  useEffect(() => {
    setPokemnsCount(actualData.length)
  }, [actualData])

  return (
    <>
      <Header search={searchByName}/>
      <div className={styles.container}>
        {loading ? <Loader count={perPage}/> : <CardList data={actualData}/>}
      </div>
    </>
  )
})

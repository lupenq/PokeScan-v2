import React, { useEffect, useState } from 'react'
import styles from './App.module.sass'
import { observer } from 'mobx-react-lite'
import { useDataStore } from './context'
import { CardList } from './components/CardList/CardList'
import { Header } from './components/Header/Header'

export const App = observer(() => {
  const store = useDataStore()
  const {
    pokemonsList,
    perTitle,
    loading,
    pokemonsCount,
    fetchPokemons,
    getPokemons
  } = store

  const [actualData, setActualData] = useState(pokemonsList)

  useEffect(() => {
    fetchPokemons()
  }, [])

  useEffect(() => {
    setActualData(pokemonsList)
  }, [pokemonsList])

  const searchByName = (value) => {
    setActualData(pokemonsList.filter(a => {
      return a.name.match(value)
    }))
  }

  return (
    <>
      <Header search={searchByName}/>
      <div className={styles.container}>
        <CardList data={actualData}/>
      </div>
    </>
  )
})

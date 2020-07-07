import React, { useEffect } from 'react'
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
    fetchPokemons,
    getCount
  } = store

  useEffect(() => {
    fetchPokemons()
    getCount()
  }, [fetchPokemons, getCount])

  return (
    <>
      <Header/>
      <div className={styles.container}>
        {loading ? <Loader count={perPage}/> : <CardList data={pokemonsList}/>}
      </div>
    </>
  )
})

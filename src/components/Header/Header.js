import React from 'react'
import { observer } from 'mobx-react-lite'
import styles from './Header.module.sass'
import { Search } from '../Seacrh/Search'
import { Pagination } from '../Pagination/Pagination'
import { Logo } from '../Logo/Logo'
import { useDataStore } from '../../context'

export const Header = observer(({ search }) => {
  const store = useDataStore()
  const {
    pokemonsList,
    perPage,
    prevPage,
    loading,
    pokemonsCount,
    fetchPokemons,
    getPokemons,
    setPerPage
  } = store

  return (
    <div className={styles.header}>
      {/*<Search searchMethod={search}/>*/}
      <Search />
      <Logo />
      {/*<select name="pertitle" id="pertitle" onChange={(e) => setPerPage(e.target.value)}>*/}
      {/*  <option value="20">20</option>*/}
      {/*  <option value="40">40</option>*/}
      {/*  <option value="60">60</option>*/}
      {/*</select>*/}
      <Pagination/>
    </div>
  )
})

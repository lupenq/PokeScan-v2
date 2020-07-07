import React from 'react'
import { PokeCard } from '../PokeCard/PokeCard'
import { useDataStore } from '../../context'
import { observer } from 'mobx-react-lite'
import styles from './CardList.module.sass'

export const CardList = observer(({ data }) => {
  const store = useDataStore()
  const {
    perPage,
    actualPage,
    setPokemnsCount,
    searchValue
  } = store

  const filterData = data.filter((a) => a.name.match(searchValue))

  setPokemnsCount(filterData.length)

  const actualData = filterData
    .slice((actualPage - 1) * perPage, actualPage * perPage)
    .map((poke) => (
      <li key={poke.pokeId} >
        <PokeCard pokemon={poke} />
      </li>
    ))

  return <ul className={styles.list_wrap}>{actualData}</ul>
})

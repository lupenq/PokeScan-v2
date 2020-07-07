import React from 'react'
import { observer } from 'mobx-react-lite'
import styles from './Search.module.sass'
import { useDataStore } from '../../context'

export const Search = observer(({ searchMethod }) => {
  const store = useDataStore()
  const {
    setSearchValue
  } = store

  const handleSearch = (e) => {
    setSearchValue(e.target.value.toLowerCase())
  }

  return (
    <input
      placeholder='Just type'
      className={styles.input}
      id="search"
      type="text"
      onChange={handleSearch}
      autoComplete='off'
    />
  )
})

import React from 'react'
import { observer } from 'mobx-react-lite'
import styles from './Search.module.sass'

export const Search = observer(({ searchMethod }) => {
  const handleSearch = (e) => {
    searchMethod(e.target.value.toLowerCase())
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

import React from 'react'
import { observer } from 'mobx-react-lite'
import { useDataStore } from '../../context'
import styles from './Selector.module.sass'

export const Selector = observer(({ search }) => {
  const store = useDataStore()
  const {
    setPerPage
  } = store

  return (
    <select
      name="pertitle"
      id="pertitle"
      onChange={(e) => setPerPage(e.target.value)}
      className={styles.selector}
    >
      <option value="20">20</option>
      <option value="40">40</option>
      <option value="60">60</option>
    </select>
  )
})

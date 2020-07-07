import React from 'react'
import { observer } from 'mobx-react-lite'
import { Sceleton } from '../Sceleton/Sceleton'
import styles from './Loader.module.sass'

export const Loader = observer(({ count }) => {
  return (
    <ul className={styles.list_wrap}>
      {
        Array(count).fill('').map((_, i) => <li key={i}><Sceleton/></li>)
      }
    </ul>
  )
})

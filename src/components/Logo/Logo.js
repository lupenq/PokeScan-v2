import React from 'react'
import pokeball from '../../pokeball.svg'
import styles from '../Logo/Logo.module.sass'

export const Logo = () => {
  return (
    <div className={styles.container}>
      <img className={styles.pokeball} src={pokeball} alt=""/>
      <span className={styles.logo}>PokeScan</span>
    </div>
  )
}

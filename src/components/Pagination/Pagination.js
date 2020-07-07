import React from 'react'
import styles from './Pagination.module.sass'
import { observer } from 'mobx-react-lite'
import { useDataStore } from '../../context'
import { LeftCircleOutlined, RightCircleOutlined } from '@ant-design/icons'

export const Pagination = observer(() => {
  const store = useDataStore()
  const {
    pokemonsList,
    perPage,
    prevPage,
    loading,
    pokemonsCount,
    fetchPokemons,
    getPokemons,
    pagLeft,
    pagRight,
    pagStart
  } = store

  return (
    <div className={styles.container}>
      <LeftCircleOutlined
        component='button'
        style={{
          pointerEvents: loading || pagStart === 0 ? 'none' : null,
          opacity: pagStart === 0 && 0.2
        }}
        className={styles.button}
        onClick={() => {
          pagLeft()
        }}
      />
      <RightCircleOutlined
        style={{ pointerEvents: loading && 'none' }}
        component='button'
        className={styles.button}
        onClick={() => {
          pagRight()
        }}
      />
    </div>
  )
})

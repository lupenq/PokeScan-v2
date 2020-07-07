import React, { useEffect, useState } from 'react'
import styles from './Pagination.module.sass'
import { observer } from 'mobx-react-lite'
import { useDataStore } from '../../context'
import { LeftCircleOutlined, RightCircleOutlined } from '@ant-design/icons'
import { Selector } from '../Selector/Selector'

export const Pagination = observer(() => {
  const [pageValue, setPageValue] = useState(1)

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
    pagStart,
    pagEnd,
    actualPage,
    setActualPage
  } = store

  useEffect(() => {
    setPageValue(actualPage)
  }, [actualPage])

  const changeInputHandler = (e) => {
    if (e.target.value === '0') {
      setPageValue(1)
    } else if (e.target.value > Math.ceil(pokemonsCount / perPage)) {
      setPageValue(Math.ceil(pokemonsCount / perPage))
    } else {
      setPageValue(+e.target.value)
    }
  }

  const onKeyPressInputHandler = (e) => {
    if (e.target.value === '0' && e.key === 'Enter') {
      setPageValue(1)
      setActualPage(1)
    } else if (e.target.value > Math.ceil(pokemonsCount / perPage) && e.key === 'Enter') {
      setPageValue(Math.ceil(pokemonsCount / perPage))
      setActualPage(Math.ceil(pokemonsCount / perPage))
    } else {
      e.key === 'Enter' && setActualPage(pageValue)
    }
  }
  const onBlurInputHandler = (e) => {
    if (e.target.value === '0') {
      setPageValue(1)
      setActualPage(pageValue)
    } else if (e.target.value > Math.ceil(pokemonsCount / perPage)) {
      setPageValue(Math.ceil(pokemonsCount / perPage))
    } else {
      setActualPage(pageValue)
    }
  }

  return (
    <div className={styles.container}>
      <Selector/>
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
      {
        <input
          type="number"
          value={pageValue}
          min={1}
          max={Math.ceil(pokemonsCount / perPage)}
          onChange={changeInputHandler}
          onKeyPress={onKeyPressInputHandler}
          onBlur={onBlurInputHandler}
          className={styles.page_input}
        />
      }
      <p
        className={styles.numbers}
      >
        of {Math.ceil(pokemonsCount / perPage)}
      </p>
      <RightCircleOutlined
        style={{
          pointerEvents: loading || pagEnd >= pokemonsCount ? 'none' : null,
          opacity: pagEnd >= pokemonsCount && 0.2
        }}
        component='button'
        className={styles.button}
        onClick={() => {
          pagRight()
        }}
      />
    </div>
  )
})

import React, { useEffect, useState } from 'react'
import { observer } from 'mobx-react-lite'
import styles from './PokeCard.module.sass'

export const PokeCard = observer(({ pokemon }) => {
  const [open, setOpen] = useState(false)
  const [stats, setStats] = useState({})

  useEffect(() => {
    const result = {}

    pokemon.stats.forEach(i => {
      result[i.name] = i.base_stat
    })

    setStats(result)
  }, [pokemon.stats])

  return (
    <div className={`${styles.container} ${open ? styles.hover : ''}`}>
      <div className={styles.card} style={{
        // background: bgColor.match(', ') ? `linear-gradient(60deg, ${bgColor})` : bgColor
      }}>
        <div className={styles.front}>
          <div className={styles.header} onClick={() => setOpen(!open)}>
            <div className={styles.header_top}>
              <img src={pokemon.spritesFront} alt="" className={styles.image}/>
              <h2 className={styles.name}>{pokemon.name}</h2>
            </div>

            <div>
              <div className={styles.header_bot}>
                <p className={styles.stats}><span role="img" aria-label="heart">❤️</span> {stats.hp}</p>
                <p className={styles.stats}><span role="img" aria-label="sword">🗡️</span> {stats.attack}</p>
                <p className={styles.stats}><span role="img" aria-label="shield">🛡️</span> {stats.defense}</p>
              </div>
              <div className={styles.header_bot}>
                <p className={styles.stats}><span role="img" aria-label="Dash">💨</span> {stats.speed}</p>
                <p className={styles.stats}><span role="img"
                  aria-label="Dual swords">⚔️</span> {stats['special-attack']}</p>
                <p className={styles.stats}><span role="img" aria-label="Geraldika">🔰</span> {stats['special-defense']}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.back}>
          <div className={styles.header} onClick={() => setOpen(!open)}>
            <div className={styles.header_top}>
              <img src={pokemon.spritesBack} alt="" className={styles.image}/>
              <h2 className={styles.name}>{pokemon.name}</h2>
            </div>
          </div>
          <table className={styles.table}>
            <tbody>
              <tr className={styles.row}>
                <th className={styles.cell}>Type</th>
                <th className={styles.cell}>{pokemon.types.join(', ')}</th>
              </tr>
              <tr className={styles.row}>
                <th className={styles.cell}>Base experience</th>
                <th className={styles.cell}>{pokemon.baseExperience}</th>
              </tr>
              <tr className={styles.row}>
                <th className={styles.cell}>Weight</th>
                <th className={styles.cell}>{pokemon.weight}</th>
              </tr>
              <tr className={styles.row}>
                <th className={styles.cell}>Height</th>
                <th className={styles.cell}>{pokemon.height}</th>
              </tr>
              <tr className={styles.row}>
                <th className={styles.cell}>Abilities</th>
                <th className={styles.cell}>{pokemon.abilities.join(', ')}</th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
})

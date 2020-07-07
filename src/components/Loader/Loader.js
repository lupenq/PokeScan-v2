import React from 'react'
import { observer } from 'mobx-react-lite'
import { Sceleton } from '../Sceleton/Sceleton'

export const Loader = observer(({ count }) => {
  return (
    <>
      {
        Array(count).fill('').map((_, i) => <Sceleton key={i}/>)
      }
    </>
  )
})

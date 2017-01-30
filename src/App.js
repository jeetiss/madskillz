import React from 'react'
import { connect } from 'react-redux'
import { splitTime, exp } from './utils/time'
import { injectGlobal } from 'styled-components'
import {
  Cifer,
  Blat,
  Cont
} from './components'

injectGlobal`
  body {
    margin: 0;
    background-color: white;
    font-family: 'Roboto', sans-serif;
  }
`

function Main ({ time }) {
  const vals = splitTime(time.now - time.from)
  const labels = exp(vals)

  return (
    <Cont>
      <Cifer>
        { Object.keys(vals).map(key => <Blat
          key={key}
          value={vals[key]}
          label={labels[key]} />
        )}
      </Cifer>
    </Cont>

  )
}

const CMain = connect(store => store)(Main)

export default CMain

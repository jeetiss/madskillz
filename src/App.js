import React from 'react'
import { connect } from 'react-redux'
import { splitTime } from './utils/time'
import { injectGlobal } from 'styled-components'
import {
  // Row,
  // Column,
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

  return (
    <Cont>
      <Cifer>
        { Object.keys(vals).map(key => <Blat key={key} value={vals[key]} />)}
      </Cifer>
    </Cont>

  )
}

const CMain = connect(store => store)(Main)

export default CMain

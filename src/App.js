import React from 'react'
import { connect } from 'react-redux'
import { Row, Column } from './components'
import { splitTime, exp } from './utils/time'

function Main ({ from, time }) {
  const dt = time - from
  const splittedTime = splitTime(dt)
  const labelsTime = exp(splittedTime)
  const keys = Object.keys(splittedTime)
  
  return (
    <Row mheight='100vh'>
      <Column mwidth='10vh'>
        {keys.map((key) => (
          <div key={key}> {splittedTime[key]} </div>
        ))}
      </Column>
      <Column mwidth='22vh'>
        {keys.map((key) => (
          <div key={key}> {labelsTime[key]} </div>
        ))}
      </Column>
    </Row>
  )
}


const stop = (state) => state
const CMain = connect(stop)(Main)

export default CMain

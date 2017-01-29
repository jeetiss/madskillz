import React from 'react'
import { connect } from 'react-redux'
import { splitTime, exp, nowTime, uniTime } from './utils/time'
import { injectGlobal } from 'styled-components'
import { 
  Row, 
  Column,

  Digit,

  Bok,
  Center,

  Palka,

  PalkaCore,
  Trd,
  Tru,

  Kol,

  KolCore,
  Trl,
  Trr,

  Cifer,
  Blat,

  Ratioblock,
  RBcontent,

  Cont,
} from './components'

injectGlobal`
  body {
    margin: 0;
    background-color: white;
    font-family: 'Roboto', sans-serif;
  }
`

function AtomG({ active }) {
  return (
      <Palka>
        <Tru active={active}/>
        <PalkaCore active={active}/>
        <Trd active={active}/>
      </Palka>
  )
}

function AtomV({ active }) {
  return (
    <Kol>
      <Trl active={active}/>
      <KolCore active={active}/>
      <Trr active={active}/>
    </Kol>
  )
}

const digitToPalkas = [
  [1, 1, 1, 0, 1, 1, 1], // 0
  [0, 0, 0, 0, 0, 1, 1], // 1
  [0, 1, 1, 1, 1, 1, 0], // 2
  [0, 0, 1, 1, 1, 1, 1], // 3
  [1, 0, 0, 1, 0, 1, 1], // 4
  [1, 0, 1, 1, 1, 0, 1], // 5
  [1, 1, 1, 1, 1, 0, 1], // 6
  [0, 0, 1, 0, 0, 1, 1], // 7
  [1, 1, 1, 1, 1, 1, 1], // 8
  [1, 0, 1, 1, 1, 1, 1], // 9
]

function Dgt({ value }) {
  const map = digitToPalkas[value]
  
  return (
    <Digit>
      <Bok>
        <AtomG active={map[0]}/>
        <AtomG active={map[1]}/>
      </Bok>

      <Center>
        <AtomV active={map[2]}/>
        <AtomV active={map[3]}/>
        <AtomV active={map[4]}/>
      </Center>

      <Bok>
        <AtomG active={map[5]}/>
        <AtomG active={map[6]}/>
      </Bok>
    </Digit>
  )
}

function Bla({ value }) {
  const first = Math.floor(value / 10) % 10
  const second = value % 10

  return (
    <Blat>
      <Ratioblock>
        <RBcontent>
          <Dgt value={first} />
        </RBcontent>
      </Ratioblock>

      <Ratioblock>
        <RBcontent>
          <Dgt value={second} />
        </RBcontent>
      </Ratioblock>
    </Blat>
  )
}

function Main ({ time }) {
  const vals = splitTime(time.now - time.from) 

  return (
    <Cont>
      <Cifer>
        { Object.keys(vals).map(key => <Bla key={key} value={vals[key]}/>)}
      </Cifer>
    </Cont>

  )
}

const CMain = connect(store => store)(Main)

export default CMain

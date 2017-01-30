import React from 'react'
import styled from 'styled-components'

const digitColor = props => props.active ? 'black' : 'transparent'
const easing = props => props.active ? 'ease-in' : 'ease-out'
const dur = props => props.active ? '.3s' : '.1s'

const PalkaCore = styled.div`
    width: 16px;
    background-color: ${digitColor};
    transition: background-color ${dur} ${easing};
    flex: 1;
`

const Bok = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: 5px 0;
    box-sizing: border-box;
`

const Trd = styled.div`
    width: 0;
    height: 0;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-top: 9px solid ${digitColor};
    transition: border-top-color ${dur} ${easing};
`

const Tru = styled.div`
    width: 0;
    height: 0;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-bottom: 9px solid ${digitColor};
    transition: border-bottom-color ${dur} ${easing};
`

const Trl = styled.div`
    width: 0;
    height: 0;
    border-top: 8px solid transparent;
    border-right: 9px solid ${digitColor};
    border-bottom: 8px solid transparent;
    transition: border-right-color ${dur} ${easing};
`

const Trr = styled.div`
    width: 0;
    height: 0;
    border-top: 8px solid transparent;
    border-left: 9px solid ${digitColor};
    border-bottom: 8px solid transparent;
    transition: border-left-color ${dur} ${easing};
`

const Palka = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1 1;
    margin: 10px 0
`

const Kol = styled.div`
    display: flex;
`

const KolCore = styled.div`
    flex: 1;
    background-color: ${digitColor};
    transition: background-color ${dur} ${easing};
    height: 16px;
`

const Center = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    flex: 1;
`

const DigitBody = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
`

function AtomG ({ active }) {
  return (
    <Palka>
      <Tru active={active} />
      <PalkaCore active={active} />
      <Trd active={active} />
    </Palka>
  )
}

function AtomV ({ active }) {
  return (
    <Kol>
      <Trl active={active} />
      <KolCore active={active} />
      <Trr active={active} />
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
  [1, 0, 1, 1, 1, 1, 1]  // 9
]

export function Digit ({ value }) {
  const map = digitToPalkas[value]

  return (
    <DigitBody>
      <Bok>
        <AtomG active={map[0]} />
        <AtomG active={map[1]} />
      </Bok>

      <Center>
        <AtomV active={map[2]} />
        <AtomV active={map[3]} />
        <AtomV active={map[4]} />
      </Center>

      <Bok>
        <AtomG active={map[5]} />
        <AtomG active={map[6]} />
      </Bok>
    </DigitBody>
  )
}

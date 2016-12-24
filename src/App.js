import React from 'react'
import { connect } from 'react-redux'
import { Row, Column, Fixed } from './components'

function Main ({ value, text }) {
    const keys = Object.keys(value);
    return (
        <Row mheight='100vh'>
            <Column mwidth='10vh'>
                {keys.map((key) => (
                    <div key={key}> {value[key]} </div>
                ))}
            </Column>
            <Column mwidth='22vh'>
                {keys.map((key) => (
                    <div key={key}> {text[key]} </div>
                ))}
            </Column>
        </Row>
    )
}

const stop = (state) => state;
const CMain = connect(stop)(Main);

export default CMain
import './App.css'
import React from 'react'
import { connect } from 'react-redux'
import { Row, Column } from './components'

function Main ({ value, text }) {
    const keys = Object.keys(value);
    return (
        <Row>
            <Column padding>
                {keys.map((key) => (
                    <div key={key}> {value[key]} </div>
                ))}
            </Column>
            <Column padding>
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
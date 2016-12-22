import React from 'react'
import { connect } from 'react-redux'
import { container, row, column, wrap, padding, aligncenter, width } from './App.css'
// import styled from 'styled-components';


// const Row = styled.div`
//     display: flex;
//     padding: 10px;
// `

// const Column = styled.div`
//     display: flex
//     flex-direction: column
//     padding: 10px
//     justify-content: ${props => props.valign}
//     align-items: ${props => props.align}
// `

// const Head = () => (
//     <div className="header">типа заголовок</div>
// )

const Time = ({ value, text }) => (
    <div className="time"> {value} {text} </div>
)

const TimePlace = ({ children }) => (
    <div className="place">
        {children}
    </div>
) 

function Main ({ value, text }) {
    const keys = Object.keys(value);
            // <Column align='center' valign='center'>
            // </Column>
    return (
        <div className={row}>
            <div className={padding + ' ' + column + ' ' + aligncenter}>
                {keys.map((key) => (
                    <div key={key}> {value[key]} </div>
                ))}
            </div>
            <div className={padding + ' ' + column + ' ' + aligncenter + ' ' + width}>
                {keys.map((key) => (
                    <div key={key}> {text[key]} </div>
                ))}
            </div>
        </div>
    )
}

const stop = (state) => state;
const CMain = connect(stop)(Main);

// const Footer = () => (
//     <div className={footer}>типа подвал</div>
// )

function Container ({ children }) {
    return (
        <div className={wrap}>
            <div className={container}>
                {children}        
            </div>
        </div>
    )
}

function App () {
// <Head />
// <Footer />
    return (
        <Container>
            <CMain />
        </Container>
    )
}

export default App
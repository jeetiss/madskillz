import React from 'react'
import styled from 'styled-components'

const digitColor = props => props.active ? 'black' : 'transparent'
const easing = props => props.active ? 'ease-in' : 'ease-out'
const dur = props => props.active ? '.3s' : '.1s'

export const PalkaCore = styled.div`
    width: 16px;
    background-color: ${ digitColor };
    transition: background-color ${ dur } ${ easing };
    flex: 1;
`

export const Bok = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: 5px 0;
    box-sizing: border-box;
`

export const Trd = styled.div`
    width: 0;
    height: 0;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-top: 9px solid ${ digitColor };
    transition: border-top-color ${ dur } ${ easing };
`

export const Tru = styled.div`
    width: 0;
    height: 0;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-bottom: 9px solid ${ digitColor };
    transition: border-bottom-color ${ dur } ${ easing };
`

export const Palka = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1 1;
    margin: 10px 0
`

export const Kol = styled.div`
    display: flex;
`

export const Trl = styled.div`
    width: 0;
    height: 0;
    border-top: 8px solid transparent;
    border-right: 9px solid ${ digitColor };
    border-bottom: 8px solid transparent;
    transition: border-right-color ${ dur } ${ easing };
`

export const KolCore = styled.div`
    flex: 1;
    background-color: ${ digitColor };
    transition: background-color ${ dur } ${ easing };
    height: 16px;
`

export const Trr = styled.div`
    width: 0;
    height: 0;
    border-top: 8px solid transparent;
    border-left: 9px solid ${ digitColor };
    border-bottom: 8px solid transparent;
    transition: border-left-color ${ dur } ${ easing };
`

export const Center = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    flex: 1;
`

export const Digit = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
`

export const Ratioblock = styled.div`
    position: relative;
    margin: 0px 5px;
    box-sizing: border-box;
    flex: 1;

    &:first-child {
        margin-left: 0;
    }

    &:last-child {
        margin-right: 0;
    }

    &:after {
        content: "";
        display: block;
        padding-bottom: 187%;
    }
`

export const RBcontent = styled.div`
    position: absolute;
    height: 100%;
    width: 100%;
`

 export const Cifer = styled.div`
    display: flex;
    flex-direction: row;
    flex: 1;
    align-items: baseline;
    padding: 0 10px;
`

export const Blat = styled.div`
    display: flex;
    flex-direction: row;
    flex: 1;
    margin: 0px 50px;

    &:last-child {
        margin-right: 0;
    }

    &:first-child {
        margin-left: 0px;
    }
`
export const Cont = styled.div`
    display:flex;
    align-items: center;
    height: 100vh;
` 
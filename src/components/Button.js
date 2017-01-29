import React from 'react'
import styled from 'styled-components'

export const Button = styled.div`
  background-color: hsl(0, 1%, 15%);
  color: hsl(40, 35%, 85%);
  padding: 10px;
  border-radius: 2px;
  cursor: pointer;
  
  &:hover {
    background-color: hsl(0,3%,25%);
  }

  &:active {
    background-color: hsl(0,5%,30%);
  }
`

const Wave = styled.div`
  position: absolute;
  top: ${props => props.y + 'px'};
  left: ${props => props.x + 'px'};
  background-color: hsl(0, 1%, 15%);
  width: 1000px;
  height: 1000px; 
  border-radius: 50%;
  transform: scale(0.001);
  transition: transform 1s ease;
`

export const Modal = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: hsl(0, 1%, 15%);
  color: hsl(40, 35%, 85%);
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Text = styled.div`
  color: hsl(0, 1%, 15%);
`
  // font-size: 20px;

export const BlockContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export const Block = styled.div`
  display: block;
  background-color: ${props => props.filled ? '#aaa' : '#fff'};
  height: 10px;
  width: 10px;
  padding: 2px;
  margin: 2px;
  box-sizing: border-box;
  border: 1px solid ${props => props.filled ? '#656565' : '#A5A5A5'};
  opacity: ${ props => props.show ? 1 : 0 };
  transition: opacity .3s ease;
  transition-delay: ${props => props.time + 's'};
`

export class Shower extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      show: false
    }
  }
  
  componentDidMount() {
    requestAnimationFrame(() => {
      this.setState({ show: true })
    })
  }

  render() {
    const { show } = this.state

    return (
      <Block show={show} {...this.props}> {this.props.children} </Block>
    )
  }
}
import React from 'react'
import styled from 'styled-components'

const cn = 'fuckingClassName'
const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 30px;
  transition:
    background-color .3s ease;

  .${cn} {
    display: flex;
    justify-content: center;
    padding-top: 20px;
    opacity: 0;
    transform: translateY(-50px);
    transition:
      opacity .3s ease,
      transform .3s ease;
  }

  &:hover {
    background-color: #F7F7F7;
  }

  &:hover .${cn} {
    opacity: 1;
    transform: translate(0px);
  }
`

export function Label ({ text, children }) {
  return (
    <Wrap>
      { children }
      <div className={cn}>
        {text}
      </div>
    </Wrap>
  )
}

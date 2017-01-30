import styled from 'styled-components'
import React from 'react'

const Wrap = styled.div`
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

const Content = styled.div`
    position: absolute;
    height: 100%;
    width: 100%;
`

export function Ratioblock ({ children }) {
  return (
    <Wrap>
      <Content>
        { children }
      </Content>
    </Wrap>
  )
}

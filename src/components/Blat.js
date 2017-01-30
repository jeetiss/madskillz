import React from 'react'
import styled from 'styled-components'
import { Ratioblock } from './Ratioblock'
import { Digit } from './Digit'
import { media } from './media'

export const Wrap = styled.div`
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

    ${media.tablet`
        margin: 10px;
        width: 150px;

        &:last-child {
            margin-right: 10px;
        }

        &:first-child {
            margin-left: 10px;
        }
    `}
`

export function Blat ({ value }) {
  const first = Math.floor(value / 10) % 10
  const second = value % 10

  return (
    <Wrap>
      <Ratioblock>
        <Digit value={first} />
      </Ratioblock>

      <Ratioblock>
        <Digit value={second} />
      </Ratioblock>
    </Wrap>
  )
}

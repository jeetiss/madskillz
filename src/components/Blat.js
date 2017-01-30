import React from 'react'
import styled from 'styled-components'
import { Ratioblock } from './Ratioblock'
import { Label } from './Label'
import { Digit } from './Digit'
import { media } from './media'

export const Wrap = styled.div`
    display: flex;
    flex-direction: row;
    flex: 1;

    ${media.tablet`
        width: 150px;
    `}
`

export function Blat ({ value, label }) {
  const first = Math.floor(value / 10) % 10
  const second = value % 10

  return (
    <Label text={label}>
      <Wrap>
        <Ratioblock>
          <Digit value={first} />
        </Ratioblock>

        <Ratioblock>
          <Digit value={second} />
        </Ratioblock>
      </Wrap>
    </Label>
  )
}

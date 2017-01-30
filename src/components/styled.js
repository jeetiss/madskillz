import styled from 'styled-components'
import { media } from './media'

export const Cifer = styled.div`
    display: flex;
    flex-direction: row;
    flex: 1;
    align-items: baseline;
    padding: 0 10px;

    ${media.tablet`
            flex-direction: column;
            align-items: center;
        `
    }
`

export const Cont = styled.div`
    display:flex;
    align-items: center;
    height: 100vh;
    ${media.tablet`
        height: initial;
    `}
`

import styled from 'styled-components'

export const Fixed = styled.div`
  min-width: ${props => props.mwidth || 0};
  min-height: ${props => props.mheight || 0};
`

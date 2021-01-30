import styled from 'styled-components'
import { gutter, cardWidth, MediumBlue } from '../library'

export const StyledDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export const StyledH2 = styled.h2`
  font-family: 'Poiret One', cursive;
  color: white;
  margin: 20px ${gutter}px;
`

export const StyledEmptySlot = styled.div`
  height: 150px;
  width: ${cardWidth}px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  background-color: ${MediumBlue};
  margin: 5px ${gutter}px;
  border-radius: 2px;
  font-size: 40px;
  font-family: 'Poiret One', cursive;
`

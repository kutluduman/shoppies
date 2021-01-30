import styled from 'styled-components'
import { maxAppWidth, gutter, Amber } from '../library'

export const AppContainer = styled.div`
  border: 3px solid ${Amber};
  margin: 20px 40px;
  height: calc(100vh - 46px);
  display: flex;

  @media (min-width: 768px) {
    /* justify-content: center; */
  }
  @media (min-width: 768px) and (max-height: 520px) {
    /* justify-content: flex-start; */
  }
  &:after {
    content: '';
    margin: 20px;
    border: 3px solid ${Amber};
    display: block;
    position: absolute;
    top: 20px;
    left: 0;
    right: 0;
    bottom: 20px;
  }
`

export const Main = styled.div`
  max-width: ${maxAppWidth}px;
  margin-right: auto;
  margin-left: auto;
  width: 100%;
  z-index: 2;
  margin-top: 20px;
`

export const StyledH1 = styled.h1`
  font-family: 'Poiret One', cursive;
  color: white;
  margin: 20px ${gutter}px;
`

import styled from 'styled-components'

export const StyledSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  margin-top: 15px;
  min-height: 320px;
  justify-content: center;
  flex-direction: column;
  position: relative;
`

export const StyledEmptyState = styled.div`
  color: white;
  font-family: 'Poiret One', cursive;
  font-size: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const StyledMessage = styled.p`
  color: white;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  margin: 0 auto;
  text-align: center;
`

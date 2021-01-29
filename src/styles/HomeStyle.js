import styled from 'styled-components'
import { maxAppWidth, MediumGray } from '../library'


export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: ${MediumGray};
`;

export const Main = styled.div`
  max-width: ${maxAppWidth}px;
  margin-right: auto;
  margin-left: auto;
  width: 100%;
`;
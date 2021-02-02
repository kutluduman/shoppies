import styled from 'styled-components';
import { maxAppWidth, gutter, Amber } from '../library';

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100%;
  padding: 20px;
  @media (max-width: 750px) {
    padding: 10px;
  }
`;

export const BorderContainer = styled.div`
  flex-grow: 1;
  border: 3px solid ${Amber};
  margin: 0 20px;
  display: flex;
  @media (max-width: 750px) {
    text-align: center;
  }
`;

export const InnerBorderContainer = styled.div`
  border: 3px solid ${Amber};
  width: calc(100% + 46px);
  margin: 17px -23px;
  padding: 0 20px;
`;

export const Main = styled.div`
  max-width: ${maxAppWidth}px;
  margin-right: auto;
  margin-left: auto;
  width: 100%;
  z-index: 2;
  margin-top: 20px;
`;

export const StyledH1 = styled.h1`
  font-family: 'Poiret One', cursive;
  color: white;
  margin: 20px ${gutter}px;
`;

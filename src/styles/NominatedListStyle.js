import styled from 'styled-components';
import { gutter, MediumBlue } from '../library';

export const StyledDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: ${gutter}px;
  padding-bottom: 20px;
  @media (max-width: 750px) {
    margin: 0 calc((100% - (100vw - 100px)) / 2);
    div:first-child {
      width: calc(100vw - 100px);
      height: calc((100vw - 100px) * 1.5);
    }
  }
`;

export const StyledH2 = styled.h2`
  font-family: 'Poiret One', cursive;
  color: white;
  margin: 20px ${gutter}px;
`;

export const StyledEmptySlot = styled.div`
  height: 150px;
  width: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  background-color: ${MediumBlue};
  margin: 5px ${gutter}px;
  border-radius: 2px;
  font-size: 40px;
  font-family: 'Poiret One', cursive;
  @media (max-width: 750px) {
    width: calc((100vw - 100px) / 2 - 5px);
    height: calc(((100vw - 100px) / 2 - 5px) * 1.5);
    margin: 5px 0;
  }
`;

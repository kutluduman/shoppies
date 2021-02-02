import styled from 'styled-components';
import { gutter, MediumBlue } from '../library';

export const StyledDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 16px 16px 0 16px;
  padding-bottom: 20px;
  @media (max-width: 750px) {
    padding: 0 calc((100% - 300px) / 2 - 20px) 20px;
    div:first-child {
      width: 300px;
      height: 450px;
    }
  }
`;

export const StyledH2 = styled.h2`
  font-family: 'Poiret One', cursive;
  color: white;
  margin: 20px ${gutter}px;
  @media (max-width: 750px) {
    width: 140px;
    height: 210px;
    /* margin: 5px 0; */
  }
`;

export const StyledEmptySlot = styled.div`
  height: 150px;
  width: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  background-color: ${MediumBlue};
  margin: 5px;
  border-radius: 2px;
  font-size: 40px;
  font-family: 'Poiret One', cursive;
`;

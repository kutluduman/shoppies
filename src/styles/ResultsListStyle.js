import styled from 'styled-components';
import {gutter} from '../library';

export const StyledSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  margin-top: ${gutter}px;
  min-height: 320px;
  max-height: 600px;
  position: relative;
  justify-content: flex-start;
  flex-grow: 1;
  @media (max-width: 750px) {
    justify-content: space-between;
    height: ${(props) => (props.showAll ? '100%' : '320px')};
    overflow: hidden;
    max-height: 100%;
    margin: ${gutter}px ${gutter}px 0 ${gutter}px;
  }
`;

export const StyledEmptyState = styled.div`
  color: white;
  font-family: 'Poiret One', cursive;
  font-size: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;

export const StyledMessage = styled.p`
  color: white;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  margin: 0 auto;
  text-align: center;
`;

export const StyledButton = styled.button`
  display: none;
  @media (max-width: 750px) {
    display: ${(props) => (props.showAll ? 'none' : 'inline-block')};
    border: none;
    position: absolute;
    width: 120px;
    bottom: 10px;
    color: white;
    background: #8e6210;
    border-radius: 2px;
    color: white;
    padding: 10px 30px;
    z-index: 3;
    left: 50%;
    margin-left: -60px;
    box-shadow: 0 1px 2px -2px rgba(0, 0, 0, 0.16),
      0 3px 6px 0 rgba(0, 0, 0, 0.12), 0 5px 12px 4px rgba(0, 0, 0, 0.09);
    font-size: 15px;
  }
`;

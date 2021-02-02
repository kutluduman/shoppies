import styled from 'styled-components';
// import { cardWidth, gutter } from '../library'

export const CardWrapper = styled.div`
  position: relative;
  float: left;
  width: 100px;
  height: 150px;
  margin: 5px;
  border-radius: 2px;
  box-shadow: 0 1px 2px -2px rgba(0, 0, 0, 0.16),
    0 3px 6px 0 rgba(0, 0, 0, 0.12), 0 5px 12px 4px rgba(0, 0, 0, 0.09);
  opacity: ${(props) => (props.disabled ? '0.5' : '1')};
  @media (max-width: 750px) {
    width: 140px;
    height: 210px;
    margin: 5px 0;
  }
  :before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 1) 100%
    );
    z-index: 1;
  }
`;

export const StyledImage = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

export const StyledTitle = styled.p`
  margin: 0.2rem;
  font-size: 18px;
  text-align: center;
  color: white;
`;

export const StyledYear = styled.p`
  color: white;
  font-size: 13px;
  text-align: center;
  margin: 0.5rem;
`;

export const StyledButton = styled.button`
  background-color: transparent;
  border: none;
  position: absolute;
  cursor: pointer;
  top: -10px;
  right: -15px;
  font-size: 25px;
  color: ${(props) => (props.nominated ? '#ffd43b' : 'white')};
  padding: 0;
  @media (max-width: 750px) {
    right: -35px;
  }
`;
export const StyledText = styled.div`
  width: 100%;
  position: absolute;
  bottom: 10px;
  z-index: 2;
`;

import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const StyledModal = styled.div`
  position: fixed;
  z-index: 4;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0,0,0);
  background-color: rgba(0,0,0,0.4);
`;

export const StyledContent = styled.div`
  background-color: #fefefe;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  border-radius: 2px;
  width: 40%;
  height: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  font-family: 'Poiret One', cursive;
  font-size: 20px;
  @media (max-width: 750px) {
    width: 80%;
    margin: 50% auto;
  }
`;

export const StyledIcon = styled(FontAwesomeIcon)`
  position: absolute;
  right: 1rem;
  top: 1rem;
  cursor: pointer;
`;

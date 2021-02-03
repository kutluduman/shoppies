import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { MediumGray, gutter } from '../library';

export const StyledSearchWrap = styled.div`
  display: flex;
  border: 1px solid ${MediumGray};
  background-color: white;
  align-items: center;
  font-size: 1.5rem;
  position: relative;
  margin: 0 ${gutter}px;
`;

export const StyledIcon = styled(FontAwesomeIcon)`
  position: absolute;
  left: 1rem;
  color: ${MediumGray};
`;

export const StyledSearch = styled.input`
  border: none;
  font-size: 1rem;
  font-weight: 500;
  color: ${MediumGray};
  width: 100%;
  padding: 0.8rem;
  padding-left: 3rem;
`;

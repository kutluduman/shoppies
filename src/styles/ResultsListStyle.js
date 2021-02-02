import styled from 'styled-components';

export const StyledSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  margin-top: 16px 16px 0 16px;
  min-height: 320px;
  max-height: 600px;
  justify-content: center;
  position: relative;
  justify-content: space-between;
  flex-grow: 1;
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

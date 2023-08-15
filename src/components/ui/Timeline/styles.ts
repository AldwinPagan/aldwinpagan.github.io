import styled from 'styled-components';
export const Timeline = styled.div`
  display: flex; 
  position: relative; 
  padding: 1rem; 
  flex-direction: column; 
  border-left-width: 1px; 
  border-color: #C7D2FE; 
  width: 100%; 

  @media (min-width: 640px) { 
    flex-direction: row; 
  }

  &:last-child {
    padding-bottom: 0; 
  }
`;

export const Details = styled.div`
  width: 100%; 

  @media (min-width: 640px) { 
    width: 33.333333%; 
  }
`;

export const Content = styled.div`
  margin-top: 1rem; 
  width: 100%; 

  @media (min-width: 640px) { 
    margin-top: 0; 
  width: 66.666667%; 
  }
`;

export const Title = styled.div`
  margin-top: 0.75rem; 
  font-weight: 600; 
`;

export const Subtitle = styled.div`
  font-size: 0.75rem;
  line-height: 1rem; 
`;

export const Date = styled.div`
  padding-left: 0.5rem;
  padding-right: 0.5rem; 
  border-radius: 9999px; 
  border-color: #4fd1c5;
  border-width: 1px; 
  font-size: 0.75rem;
  line-height: 1rem; 
  width: fit-content;
`;

export const Point = styled.span`
  position: absolute; 
  border-radius: 9999px; 
  border-width: 1px; 
  border-color: #C7D2FE; 
  width: 0.75rem; 
  height: 0.75rem; 
  background-color: #E0E7FF; 
  left: -6px;
  top: 20px;
`;

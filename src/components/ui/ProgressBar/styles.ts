import styled from 'styled-components';
export interface StyledProps {
  percentage: number;
}

export const ProgressBar = styled.div`
  padding: 0.75rem; 
`;

export const BarWrapper = styled.div`
  overflow: hidden; 
  margin-top: 0.25rem; 
  border-radius: 0.25rem; 
  width: 100%; 
  height: 0.5rem; 
  background-color: #D1D5DB; 
`;

export const Bar = styled.div<StyledProps>`
  height: 0.5rem; 
  background-color: #4fd1c5;
  width: ${({ percentage }) => `${percentage}%`};
`;

export const Content = styled.div`
  display: flex; 
  justify-content: space-between; 
  width: 100%; 
`;

export const Title = styled.h3`
  font-weight: 600; 
`;

export const Percentage = styled.h3`
font-weight: 600; 
`;

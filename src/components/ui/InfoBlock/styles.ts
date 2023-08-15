import styled from 'styled-components';
export interface StyledProps {
  center?: boolean;
}

export const InfoBlock = styled.div<StyledProps>`
  display: flex; 
  padding: 1rem; 
  margin-left: 0.75rem;
  margin-right: 0.75rem; 
  margin-top: 1rem;
  margin-bottom: 1rem; 
  flex-direction: column; 
  border-radius: 0.5rem; 
  border-width: 1px; 
  border-color: #D1D5DB; 
  background-color: #ffffff; 
  ${({ center }) => center && `align-items: center;`};
`;

export const Icon = styled.span`
  display: flex; 
  margin-bottom: 0.5rem; 
  justify-content: center; 
  align-items: center; 
  border-radius: 9999px; 
  border-width: 1px; 
  border-color: #4fd1c5;
  width: 2.5rem; 
  height: 2.5rem; 
  color: #6366F1; 
`;

export const Wrapper = styled.div<StyledProps>`
  ${({ center }) => center && `text-align: center; `};
`;

export const Title = styled.h3`
  margin-top: 0.25rem; 
  font-weight: 600; 
`;

export const Content = styled.p`
  margin-top: 0.25rem; 
`;

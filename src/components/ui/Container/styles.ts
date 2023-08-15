import styled from 'styled-components';
// import tw from 'tailwind.macro';
export interface StyledProps {
  section?: boolean;
}

export const Container = styled.div<StyledProps>`
  display: flex; 
  padding: 1.25rem; 
  flex-wrap: wrap; 
  width: 100%; 
  max-width: 768px; 
  ${({ section }) => section && `
  padding-top: 2rem;
  padding-bottom: 2rem; 
  
  @media (min-width: 640px) { 
    padding-top: 0.25rem;
    padding-bottom: 0.25rem; 
   }`};
`;

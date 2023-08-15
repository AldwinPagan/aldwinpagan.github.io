import styled from 'styled-components';
export interface StyledProps {
  center?: boolean;
}

export const TitleSection = styled.div`
display: flex; 
flex-direction: column; 
width: 100%; 
`;

export const Title = styled.h2<StyledProps>`
margin-bottom: 1rem; 
width: 100%; 
font-size: 1.125rem;
line-height: 1.75rem; 
font-weight: 700; 
text-align: left; 
text-transform: uppercase; 
  ${({ center }) => center && `text-align: center;`};
`;

export const SubTitle = styled.h4<StyledProps>`
width: 100%; 
font-size: 0.75rem;
line-height: 1rem; 
text-align: left; 
color: #4F46E5; 
  ${({ center }) => center && `text-align: center;`};
`;

export const Separator = styled.h2<StyledProps>`
position: relative; 
margin-bottom: 1.5rem; 
margin-top: -0.5rem; 
width: 0.5rem; 
height: 2rem; 
  ${({ center }) => center && `
  margin-right: auto; margin-left: auto;
  `};

  &:before {
    content: '';
    position: absolute; 
    left: 0; 
    width: 1px; 
    height: 100%; 
    background-color: #6366F1; 
  }

  &:after {
    content: '';
    position: absolute; 
    margin-left: 0.25rem; 
    width: 1px; 
    height: 1.5rem; 
  }
`;

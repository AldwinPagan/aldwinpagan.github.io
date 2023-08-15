import styled from 'styled-components';
import { Link } from 'gatsby';

export const Logo = styled(Link)`
display: flex; 
align-items: center; 
color: #312E81; 
:hover {
  color: #3c366b;
 }
`;

export const Text = styled.h1`
font-size: 1.125rem;
line-height: 1.75rem; 
`;

export const Image = styled.figure`
margin-right: 0.75rem; 
border-radius: 9999px; 
border-width: 1px; 
border-color: #4fd1c5;
width: 4rem; 
height: 4rem; 


img {
    border-radius: 9999px; 
    border-width: 4px; 
    border-color: #ffffff; 
  }
`;

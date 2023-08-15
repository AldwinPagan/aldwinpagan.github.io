import styled from 'styled-components';
export const Footer = styled.footer`
    padding-top: 1rem;
    padding-bottom: 1rem; 
    border-top-width: 1px; 
    border-color: #E5E7EB; 
`;

export const Links = styled.div`
  display: flex; 
  justify-content: center; 
  align-items: center; 
  width: 100%; 


  a {
    margin-left: 0.5rem;
    margin-right: 0.5rem; 
    color: #3c366b;t

    :hover {
    color: #4F46E5; 
    }
  }
`;

export const Link = styled.a`
margin-left: 0.5rem;
margin-right: 0.5rem; 
color: #312E81; 
:hover {
  color: #5a67d8;
 }
`;

import styled from 'styled-components';
export const Posts = styled.div`
    display: flex; 
    flex-wrap: wrap; 
    width: 100%; 
`;

export const Post = styled.div`
    padding: 0.75rem; 
    width: 100%; 

    @media (min-width: 640px) { 
      width: 50%; 
    }
`;

export const Card = styled.div`
    display: flex; 
    overflow: hidden; 
    flex-direction: column; 
    border-radius: 0.5rem; 
    border-width: 1px; 
    border-color: #D1D5DB; 
    width: 100%; 
    height: 100%; 

`;

export const Content = styled.div`
    padding: 1rem; 
    color: #312E81; 
`;

export const Image = styled.figure`
    width: 100%; 
`;

export const Title = styled.h3`
    margin-bottom: 1rem; 
    font-weight: 600; 
`;

export const Description = styled.p``;

export const Date = styled.h3`
    font-size: 0.75rem;
    line-height: 1rem; 
    color: #6366F1; 
`;

export const Tags = styled.div`
    padding: 1rem; 
    padding-top: 0.5rem; 
`;

export const Tag = styled.span`
    padding-top: 0.25rem;
    padding-bottom: 0.25rem; 
    padding-left: 0.5rem;
    padding-right: 0.5rem; 
    margin-right: 0.5rem; 
    border-radius: 9999px; 
    border-width: 1px; 
    font-size: 0.75rem;
    line-height: 1rem; 
    color: #312E81; 
`;

import styled from 'styled-components';
export const Testimonials = styled.div`
    padding-left: 0;
    padding-right: 0; 
    margin-bottom: 1rem; 
    width: 100%; 
    max-width: 640px; 

    @media (min-width: 640px) { 
      padding-left: 4rem;
    padding-right: 4rem; 
    }
`;

export const Testimonial = styled.div`
    display: flex; 
    margin-top: 1rem; 
    flex-direction: column; 
    align-items: center; 
    text-align: center; 
`;

export const Image = styled.figure`
  border-radius: 9999px; 
  border-width: 1px; 
  width: 4rem; 
  height: 4rem; 
  border-color: #4fd1c5;

  img {
    border-radius: 9999px; 
    border-width: 4px; 
    border-color: #ffffff; 
  }
`;

export const Title = styled.h3`
  margin-top: 1rem;
  margin-bottom: 1rem; 
  font-weight: 600; 
`;

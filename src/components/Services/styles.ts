import styled from 'styled-components';
export const Services = styled.div`
    display: flex; 
    margin-left: -0.75rem;
    margin-right: -0.75rem; 
    flex-wrap: wrap; 
`;

export const ServiceItem = styled.div`
    width: 100%; 

    @media (min-width: 640px) { 
      width: 50%; 
    }
`;

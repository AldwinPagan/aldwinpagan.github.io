import { createGlobalStyle } from 'styled-components';
export default createGlobalStyle`
  body {
    margin: 0; 
    color: #3c366b;
    background-color: #ffffff; 
  }

  a {
    color: #3c366b;
    :hover {
      color: #4338CA; 
    }
  }

  p + p {
    margin-top: 0.75rem; 
  }
`;

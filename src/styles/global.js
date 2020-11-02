import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
  }

  body {
    -webkit-font-smoothing: antialiased;
    background-color: #8BC6EC;
    background-image: linear-gradient(135deg, #8BC6EC 0%, #9599E2 100%);
    color: #f3f3f3;
    height: 100vh;
  }

  body, input, button {
    font: 16px 'Roboto Slab', serif;
  }

  #root {
    margin: 0 auto;
    padding: 0 auto;
    overflow-x: hidden;
  }

  button {
    cursor: pointer;
  }
`;
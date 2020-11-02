import styled, { keyframes } from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 200px;

`;

const appearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;


export const CardFront = styled.div`
  border-radius: 20px;
  height: 450px;
  width: 450px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  margin-bottom: 20px;
  text-align: center;
  background: #8286E6;
  -webkit-box-shadow: 12px -7px 16px 0px rgba(0,0,0,0.75);
  -moz-box-shadow: 12px -7px 16px 0px rgba(0,0,0,0.75);
  box-shadow: 12px -7px 16px 0px rgba(0,0,0,0.75);
  animation: ${appearFromLeft} 1s;
  
  h2 {
      color: #fff;
      text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
    }
`;



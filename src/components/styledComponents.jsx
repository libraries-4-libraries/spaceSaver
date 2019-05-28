import styled, { createGlobalStyle } from "styled-components";
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset};
`;

const HourCell = styled.div`
  position: relative;
  display: inline-block;
  height: 10vh;
  width: 15wh;
  justify-content: start;
`

const RoomCell = styled.div`
  position: relative;
  display: inline-block;
  height: 10vh;
  width: 15wh;
  justify-content: center;
`

const BasicCell = styled.div`
  position: relative;
  display: block;
  height: 4vh;
  width: 6wh;
  text-align: ${props => props.alignCell};
  background: ${props => props.backgroundColor};
`



export { GlobalStyle, HourCell, RoomCell, BasicCell }
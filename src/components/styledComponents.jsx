import styled, { createGlobalStyle } from "styled-components";
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset};
`;

const SelectWrap = styled.div`
  position: relative;
  border: solid;
  background: green;
  display: block;
  height: 15vh;
  width: 90vh;
  justify-content: start;
`

const HourCell = styled.div`
  position: relative;
  display: inline-block;
  height: 10vh;
  width: 15vh;
  justify-content: start;
`

const RoomCell = styled.div`
  position: relative;
  display: inline-block;
  height: 10vh;
  width: 15vh;
  justify-content: center;
`

const BasicCell = styled.div`
  position: relative;
  display: block;
  height: 10vh;
  width: 15vh;
  text-align: ${props => props.alignCell};
  background: ${props => props.backgroundColor};
`



export { GlobalStyle, SelectWrap, HourCell, RoomCell, BasicCell }
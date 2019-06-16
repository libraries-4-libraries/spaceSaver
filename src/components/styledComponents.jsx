import styled, { createGlobalStyle } from "styled-components";
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset};
`;

const AppWrap = styled.div`
  position: relative;
  border: solid;
  display: block;
  width: 90vh;
  top: 5vh;
  left: 5vh;
  margin-bottom: 5vh;
`

const SelectWrap = styled.div`
  position: relative;
  border-bottom: solid;
  background: green;
  display: block;
  height: 15vh;
  width: 90vh;
  justify-content: center;
`

const HourCell = styled.div`
  position: relative;
  display: inline-block;
`

const RoomCell = styled.div`
  position: relative;
  display: inline-block;
`

const BasicCell = styled.div`
  position: relative;
  display: block;
  height: 6vh;
  width: 15vh;
  text-align: ${props => props.alignCell};
  background: ${props => props.backgroundColor};
  padding-top: 3vh;
`
const LocationSelectorWrapper = styled.div`
  position: absolute;
  display: inline-block;
  z-index: 1;
  border: solid;
  margin: 4vh;
  padding: 10px;
  background-color: white;
  justify-content: start;
  cursor: pointer;
  font-family: Arial;
`

const LocationItem = styled.div`
  position: relative;
  display: block;
  outline: none;
  border: white;
  border-radius: 0px;
  background-color: white;
  justify-content: start;
  cursor: pointer;
  font-family: Arial;
  :hover {
    background-color: grey;
  }
`

export {
  GlobalStyle,
  AppWrap,
  SelectWrap,
  HourCell,
  RoomCell,
  BasicCell,
  LocationSelectorWrapper,
  LocationItem
}
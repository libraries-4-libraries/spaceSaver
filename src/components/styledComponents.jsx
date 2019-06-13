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
  justify-content: center;
`

const HourCell = styled.div`
  position: relative;
  display: inline-block;
  height: 10vh;
  width: 15vh;
  justify-content: center;
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
  padding-top: 4vh;
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

const DateSelectorWrapper = styled.div`
  position: absolute;
  display: inline-block;
  left: 50vh;
  z-index: 1;
  border: solid;
  margin: 4vh;
  padding: 10px;
  background-color: white;
  justify-content: start;
  cursor: pointer;
  font-family: Arial;
`

const MonthBar = styled.div`
  position: absolute;
  display: block;
  width: 75vh;
  border: solid;
  z-index: 1;
  background-color: white;
  justify-content: center;
  cursor: pointer;
  font-family: Arial;
`

const WeekdayBar = styled.div`
  position: absolute;
  display: block;
  width: 75vh;
  border: solid;
  z-index: 1;
  background-color: white;
  justify-content: center;
  cursor: pointer;
  font-family: Arial;
`

const WeekdayCell = styled.div`
  position: relative;
  display: inline-block;
  height: 5vh;
  width: 3vh;
  z-index: 1;
  margin: 3vh;
  outline: none;
  border: white;
  border-radius: 0px;
  background-color: white;
  justify-content: start;
  cursor: pointer;
  font-family: Arial;
`

const Input = styled.input`
  position: relative;
  display: inline-block;
`

export {
  GlobalStyle,
  SelectWrap,
  HourCell,
  RoomCell,
  BasicCell,
  LocationSelectorWrapper,
  LocationItem,
  DateSelectorWrapper,
  MonthBar,
  WeekdayBar,
  WeekdayCell,
  Input
}
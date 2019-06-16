import styled from "styled-components";

//These styles wrap the DateSelector components
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

const MonthBarWrapper = styled.div`
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

const DateCell = styled.div`
  position: relative;
  display: inline-block;
  height: 5vh;
  width: 5vh;
  z-index: 1;
  margin: 1vh;
  outline: none;
  border: white;
  border-radius: 0px;
  background-color: white;
  color: ${ props => props.textColor};
  cursor: pointer;
  font-family: Arial;
  :hover {
    background-color: grey;
  }
`

const WeekdayBar = styled.div`
  position: relative;
  display: block;
  width: 50vh;
  border: solid;
  z-index: 1;
  background-color: white;
  cursor: pointer;
  font-family: Arial;
`

const WeekdayCell = styled.div`
  position: relative;
  display: inline-block;
  height: 5vh;
  width: 5vh;
  z-index: 1;
  margin: 1vh;
  outline: none;
  border: white;
  border-radius: 0px;
  background-color: white;
  cursor: pointer;
  font-family: Arial;
`

export {
  DateSelectorWrapper,
  MonthBarWrapper,
  DateCell,
  WeekdayBar,
  WeekdayCell
}
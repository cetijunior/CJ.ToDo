import { useState, useEffect } from "react";
import Titles from "../../styles/ruH1";
import styled from "styled-components";
import Inputs from "../../styles/ruInput";

// Define a color palette
const colors = {
  primary: "#274472",
  secondary: "#5885AF",
  background: "#C3E0E5",
  accent: "#BFD7ED",
};



const TymerContainer = styled.div`
  background-color: ${colors.background};
  padding: 1rem;
  display: inline-flex;
  align-items: center;
  flex-direction: column;
  gap: 0.75;
  font-family: "Jua", sans-serif;
  border-radius: 1.25rem;
`;

const TimerContainer = styled.div`
  width: 22.75rem;
  height: auto;
  border-radius: 1.25rem;
  border: 2px solid #274472;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.6rem;
  padding: 1rem 0;
`;

const DivCenter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
`;

const Timer = styled.p`
  font-size: 4rem;
  background-color: ${colors.background};
`

const TimerButtons = styled.button`
    background-color: ${colors.primary};
    border: none;
    box-shadow: 0px 3px 6px 0px 
    #5885AF;
    padding: 8px 20px;
    border-radius: 5px;
    transition: background-color 0.3s ease;
    margin: 0 0.6rem;
    color: ${colors.accent};
    font-family: "Jua", sans-serif;
`;

const Tymer = () => {
  const [selectTime, setSelectTime] = useState(25 * 60);
  const [Running, setRunning] = useState(false);
  const [Break, setBreak] = useState(false)

  useEffect(() => {
    let interval;

    if (Running) {
      interval = setInterval(() => {
        setSelectTime((prevTime) => prevTime - 1);
      }, 1000);
    }

    if (selectTime === 0) {
      setRunning(false);
      setBreak((prevBreak) => !prevBreak);
      setSelectTime(Break ? 25 * 60 : selectTime);
      alert("Your timer has finished!")
    }

    return () => clearInterval(interval);
  }, [Running, selectTime, Break]);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  }

  const handleReset = () => {
    setRunning(false);
    setBreak(false);
    setSelectTime(25 * 60);
  };


const handleTimeChange = (e) => {
  const timeInMinutes = parseInt(e.target.value, 10);
  const timeInSeconds = Math.max(25, Math.min(timeInMinutes * 60, 60 * 60));
  setSelectTime(timeInSeconds);
};

const handleShortBreak = () => {
    setRunning(false);
    setBreak(true);
    setSelectTime(5 * 60);
};

const handleLongBreak = () => {
    setRunning(false);
    setBreak(true);
    setSelectTime(10 * 60);
};

return (
  <TymerContainer id="timer">
    <Titles>Focus Timer</Titles>

    <TimerContainer>
      <Inputs
      placeholder="Timer"
      type="number"
      min="25"
      max="60"
      step="5"
      value={!Running ? selectTime / 60 : ""}
      onChange={handleTimeChange}
      />

    <DivCenter>
      <TimerButtons onClick={handleShortBreak}>Short Break</TimerButtons>
      <TimerButtons onClick={handleLongBreak}>Long Break</TimerButtons>
    </DivCenter>

    <Timer>{formatTime(selectTime)}</Timer>

    <div>
      <TimerButtons onClick={() => setRunning(true)}>Start</TimerButtons>
      <TimerButtons onClick={handleReset}>Reset</TimerButtons>
    </div>
    </TimerContainer>
  </TymerContainer>
  );
};

export default Tymer
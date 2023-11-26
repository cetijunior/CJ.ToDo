import "./App.css";
import { Routes, Route, Navigate } from 'react-router-dom'
import styled from 'styled-components'
import Timer from './components/Timer/Timer'
import Navbar from './components/Navbar/Navbar'
import Todolist from './components/ToDo/toDoList'

const Container = styled.div`
  width: 100%;
  padding-top: 6rem;
`;

const MainPage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

function App() {
  return (
    <Container>
      <Navbar />
      <MainPage>
        <Routes>
          <Route path="/" element={<Todolist />} />
          <Route path="/timer" element={<Timer />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </MainPage>
    </Container>
  );
}

export default App;

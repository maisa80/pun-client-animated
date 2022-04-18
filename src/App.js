import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import Home from './pages/Home';
import Puns from './pages/Puns';
import Pun from './pages/Pun';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      <Wrapper>
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/puns" element={<Puns />} />
            <Route path="/puns/:id" element={<Pun />} />
          </Routes>
        </BrowserRouter>
      </Wrapper>
    </div>
  );
}

const Wrapper = styled.div`
  background-color: papayawhip;
  height: 100vh;
  padding: 4em;
  box-sizing: border-box;
`



export default App;

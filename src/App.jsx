import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from "./pages/Home";
import Header from "./components/Header";
import Arithmetics from "./pages/Arithmetics";
import Fundamentals from "./pages/Fundamentals";
import Rsa from "./pages/Rsa";
import GroupTheory from "./pages/GroupTheory";
import EllipticCurves from "./pages/EllipticCurves";

import './css/App.css';

const App = () => {
  return (
    <BrowserRouter>
      <Header/>
      <main>
        <Routes>
          <Route path="/" element={<Arithmetics />}/>
          <Route path="/arithmetics" element={<Arithmetics/>}/>
          <Route path="/fundamentals" element={<Fundamentals/>}/>
          <Route path="/rsa" element={<Rsa/>}/>
          <Route path="/group-theory" element={<GroupTheory/>}/>
          <Route path="/elliptic-curves" element={<EllipticCurves/>}/>
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App;

import './App.css';
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';

function App() {
  return (
    <div>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/abc' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;

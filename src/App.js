import './App.css';
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import Authentication from './components/Authentication';

function App() {
  return (
    <div>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/abc' element={<Home />} />
        <Route path='/auth' element={<Authentication />} />
      </Routes>
    </div>
  );
}

export default App;

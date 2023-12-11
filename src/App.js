import logo from './logo.svg';
import './App.css';
import Login from './Views/Login/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Tesis from './Views/Tesis/Tesis';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/tesis' element={<Tesis/>}/>
      </Routes>
    </Router>
  );
}

export default App;

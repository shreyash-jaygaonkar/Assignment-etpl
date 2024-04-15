import './App.css';
import Signup from './Signup';
import Login from './login';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/signup' element={<Signup />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import './App.css';
import './css/home.css';
import './css/login.css';
import './css/register.css';
import './css/user.css';
import { Routes, Router, NavLink, Route } from 'react-router-dom';
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
import User from './components/User';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element= {<Home />}/>
        <Route path='/login' element= {<Login />}/>
        <Route path='/register' element= {<Register />}/>
        <Route path='/user' element= {<User />}/>
      </Routes>
    </div>
  );
}

export default App;

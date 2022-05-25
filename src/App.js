import Login from './Container/Login/login';
import { Route, Routes, Link } from 'react-router-dom';
import Signup from './Container/Signup/signup';
import Dashboard from './Container/Dashboard/dashboard';
import './App.css';
import Blogs from './pages/Blogs';
import Home from './pages/Home';

function App() {
  return (
    <>
    <nav>
        <div class="controls">
          <Link to='/'>
           <div class="control">
              <i class="fas fa-home"></i>
           </div>
          </Link>
          <Link to='/blogs'>
            <div class="control">
              <i class="fa-solid fa-brain"></i>
              
            </div>
          </Link>
         

         <Link to='/login'>
           <div class="control">
              <i class="fas fa-fingerprint"></i>
            </div>
          </Link> 
        </div> 
        
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/dash' element={<Dashboard />} />
        <Route path='/login' element={<Login />} />
        <Route path='signup' element={<Signup/>} />
        <Route path="/blogs" element={<Blogs />} />
      </Routes>
     
    </>
  );
}

export default App;

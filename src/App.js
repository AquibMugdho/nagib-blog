import Login from './Container/Login/login';
import { Route, Routes, Link } from 'react-router-dom';

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
         

         
        </div> 
        
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/dash' element={<Dashboard />} />
        <Route path='/login' element={<Login />} />
        
        <Route path="/blogs" element={<Blogs />} />
      </Routes>
     
    </>
  );
}

export default App;

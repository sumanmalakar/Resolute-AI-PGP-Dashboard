import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './Login';
import Navbar from './Components/Navbar';
import Dashboard from './Components/Dashboard';
import  B4 from './Components/B4';
import S10 from './Components/S10';


function App() {
  return (
   <>
   <Router>
    <Routes>
      <Route path= '/' element={<Login />} />
      <Route path= '/dashboard' element={<Dashboard />} />
      <Route path= '/dashboard/s10' element={<S10 />} />
      <Route path= '/dashboard/b4' element={<B4 />} />

    </Routes>
   </Router>
   
   </>
  );
}

export default App;

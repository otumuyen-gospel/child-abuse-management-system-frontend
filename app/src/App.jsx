import {Route, Routes} from 'react-router-dom';
import ProtectedRoute from './Auth/ProtectedRoute';
import Home from './home/home';
import Dashboard from './Dashboard/Dashboard';
import Login from './Auth/Login';
import Signup from './Auth/Signup';
import Forgot from './Auth/Forgot';
import Verification from './Auth/Verification';
import Reset from './Auth/Reset';
function App() {
  return <Routes>
    {/* add all unprotected routes here */}
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route path="/signup" element={<Signup />} />
    <Route path="/ForgotPassword" element={<Forgot />} />
    <Route path="/Verification" element={<Verification />} />
    <Route path='/ChangePassword' element={<Reset/>}/>

    {/* add all protected routes here*/}
     <Route path="/dashboard" element={
      //<ProtectedRoute>
         <Dashboard />
      //</ProtectedRoute>
      
     } />
     
  </Routes>
}

export default App

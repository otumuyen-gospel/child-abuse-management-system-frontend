import {Route, Routes} from 'react-router-dom';
import ProtectedRoute from './Auth/ProtectedRoute';
import Home from './home/home';
import Dashboard from './Dashboard/Dashboard';
function App() {
  return <Routes>
    {/* add all unprotected routes here */}
    <Route path="/" element={<Home />} />
    
    {/* add all protected routes here*/}
     <Route path="/dashboard" element={
      <ProtectedRoute>
         <Dashboard />
      </ProtectedRoute>
      
     } />
     
  </Routes>
}

export default App

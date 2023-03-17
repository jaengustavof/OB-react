
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import NotFoundPage from './pages/404/NotFoundPage';
import LoginPage from './pages/auth/LoginPage';
import DashBoard from './pages/dashboard/DashBoard';


function AppRoutingFinal() {

  let loggedIn = true;

  return (
    <div>
      <Router>
        <Routes>
        {/* Redirections to protect our routes */}

          <Route exact path="/" element={loggedIn ? <Navigate from='/' to="/dashboard" replace />: <Navigate from='/' to="/login" replace /> } />

          <Route exact path='/login' element={<LoginPage/>} />
          <Route exact path="/dashboard" element={loggedIn ? <DashBoard/> : <Navigate from='/' to="/login" replace /> } />
    
          <Route path="/404" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default AppRoutingFinal;

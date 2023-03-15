
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import NotFoundPage from './pages/404/NotFoundPage';

///////////// 37.11 /////////////////
function AppRoutingFinal() {

  return (
    <div>
      <Router>
        <Routes>


          <Route path="/404" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default AppRoutingFinal;

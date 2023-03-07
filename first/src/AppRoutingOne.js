
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';

import HomePage from './pages/home/HomePage';

import Notfoundpage from './pages/404/NotFoundPage';
import Aboutpage from './pages/about-faqs/AboutPage';
import ProfilePage from './pages/profile/ProfilePage';
import TasksPage from './pages/tasks/TastsPage';
import TaskDetailPage from './pages/tasks/TaskDetailPage';


function AppRoutingOne() {

  const logged = false;

  return (
    <Router>
      <div>
        <aside>
          <Link to='/'>|| HOME |</Link>
          <Link to='/about'>| ABOUT |</Link>
          <Link to='/faqs'>| FAQs ||</Link>
          <Link to='/404'>| Does not exist ||</Link>
        </aside>

        <main>

        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/about" element={<Aboutpage />} />
          <Route path="/faqs" element={<Aboutpage />} />
          <Route path="/profile" element={logged? <ProfilePage /> : <Navigate to />}></Route>
          <Route path='/tasks' element={<TasksPage/>} />
          <Route path='tasks/:id' element={<TaskDetailPage />} />
          <Route path="*" element={<Notfoundpage />}/>
        </Routes>

        </main>

      </div>

    </Router>
  );
}

export default AppRoutingOne;

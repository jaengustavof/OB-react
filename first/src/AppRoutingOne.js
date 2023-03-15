
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import { useEffect } from 'react';

import HomePage from './pages/home/HomePage';

import Notfoundpage from './pages/404/NotFoundPage';
import Aboutpage from './pages/about-faqs/AboutPage';
import ProfilePage from './pages/profile/ProfilePage';
import TasksPage from './pages/tasks/TastsPage';
import TaskDetailPage from './pages/tasks/TaskDetailPage';
import LoginPage from './pages/auth/LoginPage';
import StatePage from './pages/home/StatePage';


function AppRoutingOne() {

  let logged = false;

  let taskList = [
    {
      id: 1,
      name: 'Task 1',
      description: 'My First Task'
    },
    {
      id: 1,
      name: 'Task 2',
      description: 'My Second Task'
    }
  ]

  useEffect(() => {
    logged = localStorage.getItem('credentials');
    console.log('User Logged', logged)
  }, []);
  
  return (
    <Router>
      <div>
        <aside>
          <Link to='/'>|| HOME |</Link>
          <Link to='/about'>| ABOUT |</Link>
          <Link to='/faqs'>| FAQs |</Link>
          <Link to='/tasks/1'>| Task 1 |</Link>
          <Link to='/tasks/2'>| Task 2 |</Link>
          <Link to='/404'>| Does not exist |</Link>
          <Link to='/login'>| Login ||</Link>
        </aside>

        <main>

        <Routes>
          <Route exact path="/" element={<HomePage message={false} />} />
          <Route exact path="/online-state" element={<StatePage />} />
          <Route path="/login" element={!logged? <LoginPage />: <Navigate to="/profile" replace /> } />
          <Route path="/about" element={<Aboutpage />} />
          <Route path="/faqs" element={<Aboutpage />} />
          <Route path='/tasks' element={<TasksPage/>} />
          <Route path="/profile" element={!logged ? <HomePage message={true} /> :  <ProfilePage />}  />
          <Route exact path='tasks/:id' element={<TaskDetailPage task={taskList} />} />
          <Route path="/404" element={<Notfoundpage />}/>
          <Route path="/*" element={<Navigate to="/404" replace /> }/>
        </Routes>

        </main>

      </div>

    </Router>
  );
}

export default AppRoutingOne;

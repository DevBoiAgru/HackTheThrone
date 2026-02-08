import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GamificationProvider } from './context/GamificationContext';
import Layout from './components/layout/Layout';
import LessonPage from './pages/LessonPage';
import Home from './pages/Home';
import Login from './components/login/Login';
// import Topicpage from './pages/Topicpage';
import Practice from './pages/Practice';

function App() {
  const username = localStorage.getItem('username');


  return (
    <GamificationProvider>
      <Router>
        <Routes>
          <Route path="/" element={username ? <Layout /> : <Login />}>
            <Route index element={<Home />} />
            <Route path="lesson/:chapterID" element={<LessonPage />} />
            {/* <Route path="lesson/:chapterID/topic/:topicid" element={<Topicpage />} /> */}
            <Route path="leaderboard" element={<div>Leaderboard (Coming Soon)</div>} />
            <Route path="practice" element={<Practice />} />
            <Route path="profile" element={<div>Profile (Coming Soon)</div>} />
          </Route>
        </Routes>
      </Router>
    </GamificationProvider>
  );
}

export default App;

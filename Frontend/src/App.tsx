import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GamificationProvider } from './context/GamificationContext';
import Layout from './components/layout/Layout';
import LessonPage from './pages/LessonPage';
import Home from './pages/Home';

function App() {
  return (
    <GamificationProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="lesson/:id" element={<LessonPage />} />
            <Route path="leaderboard" element={<div>Leaderboard (Coming Soon)</div>} />
            <Route path="practice" element={<div>Practice (Coming Soon)</div>} />
            <Route path="profile" element={<div>Profile (Coming Soon)</div>} />
          </Route>
        </Routes>
      </Router>
    </GamificationProvider>
  );
}

export default App;

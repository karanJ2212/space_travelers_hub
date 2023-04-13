import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Missions from './components/Missions/Missions';
import MyProfile from './components/MyProfile/MyProfile';
import Navbar from './components/Navbar/Navbar';
import Rocket from './components/Rockets/Rocket';

function App() {
  return (
    <>
      <Router>
        <Navbar />

        <div className="main-container">
          <Routes>
            <Route path="/" element={<Rocket />} />
            <Route path="/missions" element={<Missions />} />
            <Route path="/profile" element={<MyProfile />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;

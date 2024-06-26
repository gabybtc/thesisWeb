import './App.css';
import MainPage from './components/MainPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LearnMore from './components/InteractiveComp1'
import HomePage from './components/HomePage';

// change path to "/thesisWeb/"

function App() {

  return (
    <Router>
      <Routes>
      <Route path="/thesisWeb/" element={<MainPage/>} />
      <Route path="/learn-more" element={<LearnMore />} />
      <Route path="/home" element={<HomePage />} />
    </Routes>
    </Router>
  );
}

export default App;
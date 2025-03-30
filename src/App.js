import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WelcomePage from "./Pages/WelocomePage/WelcomePage";
import Larnaca from './Pages/Larnaca/Larnaca';
import Nicosia from './Pages/Nicosia/Nicosia';
import Limassol from './Pages/Limassol/Limassol';

import './App.css';
import Header from "./component/header/Header";


function App() {
    return (
        <Router>
            <Header/>
            <Routes>
                <Route path="/" element={<WelcomePage />} />
                <Route path="/day1" element={<Larnaca />} />
                <Route path="/day2" element={<Nicosia />} />
                <Route path="/day3" element={<Limassol />} />
            </Routes>
        </Router>
    );
}

export default App;

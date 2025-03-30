import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WelcomePage from "./Pages/WelocomePage/WelcomePage";
import Larnaca from './Pages/Larnaca/Larnaca';
import Nicosia from './Pages/Nicosia/Nicosia';
import Limassol from './Pages/Limassol/Limassol';
import Header from "./component/header/Header";
import Footer from "./component/footer/Footer";
import './App.css';


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
            <Footer />
        </Router>
    );
}

export default App;

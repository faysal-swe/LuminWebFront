import Header from './components/Header.jsx';
import Home from './pages/Home.jsx';
import AboutUs from './pages/AboutUs.jsx';
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';

function App() {
    return (
        <Router>
            <div>
                <Header/>
                <Routes>
                    <Route path='/' exact component={<Home/>} />
                    <Route path='/about' exact component={<AboutUs/>} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;

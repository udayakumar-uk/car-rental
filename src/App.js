import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Button } from 'react-bootstrap';

// components
import Header from './components/header';

// pages
import HomePage from './pages/Home';
import AboutPage from './pages/About';

// css | icons | js
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
        
        <BrowserRouter>
          <Header />
          
            <Routes>
                <Route path='/' element={<HomePage />}></Route>
                <Route path='about' element={<AboutPage />}></Route>
            </Routes>
        </BrowserRouter>



    </div>
  );
}

export default App;

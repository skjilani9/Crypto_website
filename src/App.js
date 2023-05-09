import './App.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import Coins from './components/Coins';
import Exchange from './components/Exchange';
import Coinsdetails from './components/Coinsdetails';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/coins' element={<Coins />} />
        <Route path='/exchanges' element={<Exchange />} />
        <Route path='/coin/:id' element={<Coinsdetails />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

import Home from './pages/home/Home';
import MainPage from './pages/home/MainPage'
import './App.css';
import {BrowserRouter as Router,Routes,Route,Navigate} from 'react-router-dom';
import Footer from '../src/components/footer/Footer'
import Header from '../src/components/header/Header'
function App() {
  return (
    <div className="App">
    
    <Router>
    <Header/>
          <Routes path="/" exact element={<MainPage/>} >
           <Route path="/product" exact element={<Home/>}/>
           <Route path='*' element = {<Navigate to='/'/>}/>
          </Routes>
          <Footer/>
        </Router>
      
    </div>
  );
}

export default App;

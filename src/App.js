import logo from './logo.svg';
import './App.css';
//import'bootstrap\dist\css\bootstrap.min.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Education from './components/Education';
import Technologis from './components/Technologis';
import Project from './components/Project';
import Footer from './components/Footer';



function App() {
  return (
   <>
    
    <NavBar/>
    <Home/>
    <Education/>
    <Technologis/>
    <Project/>
    <Footer/>
    

    
    
   </>
  )
}

export default App;

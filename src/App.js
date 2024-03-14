
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './main';
import IndividualPage from './pages/individual';
import  Bottombar  from './components/bottombar/bottombar';
import  Header  from './components/header/header';
import  Sidebar  from './components/sidebar/sidebar';
import Details from './components/Details/index'
import CardPainel from './components/CardPainel/index';

function App() {
  return (
    <Router>
        
      <Header/>
        
    {/**  <Bottombar/>*/} 
     
      <Routes>
      
        <Route path="/" element={<Main />} />
        <Route path="/detalhes/:id" element={<Details />} />
      </Routes>
    </Router>
  );
}

export default App;



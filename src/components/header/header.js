import { Link } from 'react-router-dom';
import './header.css';

function App() {

  return (
    <div className="container">
        <nav class="navbar">
        <div class="navbar-container container">
            
            <div class="hamburger-lines">
                <span class="line line1"></span>
                <span class="line line2"></span>
                <span class="line line3"></span>
            </div>
            <ul class="menu-items">
                <li><Link to={"/"}>Catalogo</Link></li>
                <li><a href="#"></a></li>
                <li><a href="#"></a></li>
                <li><a href="#"></a></li>
                <li><a href="#"></a></li>
                <li><a href="#"></a></li>
            </ul>
            <h1 class="logo">Navbar</h1>
        </div>
    </nav>
    </div>
  );
}

export default App;
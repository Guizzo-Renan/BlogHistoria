//import logo from './../assets/Images/logo.png'
import { IoLogoYoutube } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import './header.css';

function Header() {
  const navigate=useNavigate();
 
  return (
    <div className='header-container'>
      <img  className='logo' alt='Logo' />
      <ul className='nav-list md:flex'>
        <li className='nav-item' onClick={() => navigate('/')}>Home</li>
        <li className='nav-item'>About Us</li>
        <li className='nav-item'>Contact Us</li>
      </ul>
      <button className='subscribe-btn'>
        Subscribe <IoLogoYoutube className='youtube-icon' />
      </button>
    </div>
  );
}

export default Header;

//src={logo}
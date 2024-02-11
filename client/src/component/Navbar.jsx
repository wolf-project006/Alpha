import React, {useState} from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import "./Navbar.css"

const Navbar = () => {
  const [click , setClick] = useState(false)
  const [button, setButton] = useState(true)

  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)

  const showButton = ()=> {
    if(window.innerWidth <= 960) {
      setButton(false)
    } else {
      setButton(true)
    }
  }

  window.addEventListener('resize', showButton)

  return (
    <>
  <header className="site-header">
  <div className="site-identity">
    <Link to="/" className="navbar-logo" onClick={closeMobileMenu}> Team Wolfie </Link>
  </div>  
  <nav className="site-navigation">
    <ul className="navbar-container">
      <li className="menu-icon" onClick={handleClick}> 
        <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
      </li>
      <div>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li className="nav-item">
          <Link to='/' className="nav-links" onClick={closeMobileMenu}>
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/services" className="nav-links" onClick={closeMobileMenu}>
            Services
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/contacts" className="nav-links" onClick={closeMobileMenu}>
            Contact
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/contacts" className="nav-links-mobile" onClick={closeMobileMenu}>
            Sign up
          </Link>
        </li>
      </ul>
      {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
      </div>
    </ul>
  </nav>
</header>
    </>
  );
};

export default Navbar;

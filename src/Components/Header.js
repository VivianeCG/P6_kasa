import logo from "../Assets/headerLogo.png";
import { Link } from "react-router-dom";
function Header() {
  return (
    <header className='header'>
      <div className="logo_link">
      <Link to='/'><img src={logo} alt='logo Kasa' className='logo'></img></Link>
      </div>
      <nav className='navbar'>
        <ul>
          <li>
            <Link to='/'>Accueil</Link>
          </li>
          <li>
            <Link to='/About'>A propos</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Header;

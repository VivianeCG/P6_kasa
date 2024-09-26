import logo from "../Assets/headerLogo.png";
import { Link } from "react-router-dom";
function Header() {
  return (
    <header className='header'>
      <img src={logo} alt='logo Kasa' className='logo'></img>
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

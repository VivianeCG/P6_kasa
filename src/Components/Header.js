import logo from '../Assets/LogoKasa.PNG'
import '../Styles/Header.css'
import { Link } from 'react-router-dom';
function Header() {
    return (<div>
        <header className='header'>
            <img src= {logo} alt="logo Kasa" className='logo'></img>
            <nav className='navbar'>
                <ul>
                    <li><Link to='/'>Accueil</Link></li>
                    <li><Link to='/About'>A propos</Link></li> 
                </ul>
            </nav>
        </header>
    </div>)
}
export default Header;
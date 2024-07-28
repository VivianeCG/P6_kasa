import logo from '../Assets/LogoKasa.PNG'
import '../Styles/Header.css'
function Header() {
    return (<div>
        <header className='header'>
            <img src= {logo} alt="logo Kasa" className='logo'></img>
            <nav className='navbar'>
                <ul>
                    <li><a href='#'>Accueil</a></li>
                    <li><a href='#'>A propos</a></li> 
                </ul>
            </nav>
        </header>
    </div>)
}
export default Header;
import logo from '../Assets/logoFooter.PNG';
import '../Styles/Footer/Footer.css';

function Footer() {
    return (<div>
        <footer className='footer'>
            <img src= {logo} alt='logo Kasa sur fond noir' className='logo-footer'></img>
            <p className='legal-info'>© 2020 Kasa. All rights reserved</p>
        </footer>
    </div>)
}

export default Footer;
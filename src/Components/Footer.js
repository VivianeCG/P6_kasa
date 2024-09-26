import logo from "../Assets/footerLogo.png";
function Footer() {
  return (
    <footer className='footer'>
      <img
        src={logo}
        alt='logo Kasa sur fond noir'
        className='logo-footer'
      ></img>
      <p className='legal-info'>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;

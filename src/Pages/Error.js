import '../Styles/Error/Error.css';
import { Link } from 'react-router-dom';

function Error() {
    return (<div className='error'>
                    <section className='number'>404</section>
                    <section className='sentence'>Oups! La page que vous demandez n'existe pas.</section>
                    <nav className='link'>
                        <Link to='/'>Retourner sur la page d'accueil</Link>
                    </nav>
            </div>);
}
export default Error;
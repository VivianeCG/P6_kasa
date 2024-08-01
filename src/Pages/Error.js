import '../Styles/Error/Error.css';
import { Link } from 'react-router-dom';

function Error() {
    return (<div className='error'>
                <div className='content'>
                    <p className='number'>404</p>
                    <p className='sentence'>Oups! La page que vous demandez n'existe pas.</p>
                    <nav className='link'>
                        <Link to='/'>Retourner sur la page d'accueil</Link>
                    </nav>
                </div>
            </div>);
}
export default Error;
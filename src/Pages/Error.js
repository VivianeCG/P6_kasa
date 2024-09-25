import { Link } from 'react-router-dom';

function Error() {
    return (<div className='error'>
                    <section className='number'>404</section>
                    <section className='sentence'><div>Oups! La page que </div><div> vous demandez n'existe pas.</div></section>
                    <nav className='link'>
                        <Link to='/'>Retourner sur la page d'accueil</Link>
                    </nav>
            </div>);
}
export default Error;
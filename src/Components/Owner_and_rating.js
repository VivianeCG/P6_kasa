import '../Styles/Owner_and_rating/Owner_and_rating.css';

function Owner_and_rating() {
    return(
        <section className='accomodation_owner'>
            <p className='owner_name'>nom propriétaire du fichier</p>
            <img className='owner_photo' src='' alt='photo du propriétaire'></img>
            <p className='accomodation_rating'>nombre d'étoiles</p>
        </section>
    )
}

export default Owner_and_rating;
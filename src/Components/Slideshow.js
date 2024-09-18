function Slideshow({pictures}) {
    return(
        <figure className='slideshow_pictures'>
            {pictures.map((picture, index) => (
                <img 
                    key={index}
                    className='imported_picture'
                    src={picture}
                    alt={`slideshow image ${index + 1}`}
                />
            ))}
            <svg className='previous_arrow' width="48" height="80" viewBox="0 0 48 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M47.04 7.78312L39.92 0.703125L0.359985 40.3031L39.96 79.9031L47.04 72.8231L14.52 40.3031L47.04 7.78312Z" fill="white"/>
            </svg>
            <svg className='next_arrow' width="48" height="80" viewBox="0 0 48 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.960022 72.3458L8.04002 79.4258L47.64 39.8258L8.04002 0.22583L0.960022 7.30583L33.48 39.8258L0.960022 72.3458Z" fill="white"/>
            </svg>
        </figure>
    )
}
//en dessous de la 2e flèche insérer le compteur 1 sur x
//index < rating ? '#FF6060' : '#E3E3E3'
export default Slideshow;
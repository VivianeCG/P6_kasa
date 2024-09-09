function Names_and_tags({title, location, tags}) {
    return (
        <section className='accommodation_elements'>
            <h2 className='accommodation_name'>{title}</h2>
            <h3 className='accommodation_location'>{location}</h3>
            <article className='tag_container'>
                {tags.map((tag, index) => (
                    <span key={index} className='tag'>{tag}</span>
                ))}
                </article>
        </section>
    )
}

export default Names_and_tags;
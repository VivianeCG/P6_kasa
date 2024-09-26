function Owner({ host }) {
  const { name, picture } = host;
  return (
    <section className='accommodation_owner'>
      <p className='owner_name'>{name}</p>
      <img
        className='owner_photo'
        src={picture}
        alt={`Propriétaire: ${name}`}
      />
    </section>
  );
}

export default Owner;

import { useState } from "react";
function Slideshow({ pictures }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const nextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === pictures.length - 1 ? 0 : prevIndex + 1
    );
  };
  const previousImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? pictures.length - 1 : prevIndex - 1
    );
  };
  return (
    <figure className='slideshow_pictures'>
      <img
        className='imported_picture'
        src={pictures[currentIndex]}
        alt={`photo d'appartement ${currentIndex + 1}`}
      />
      {pictures.length > 1 && (
        <>
          <svg
            className='previous_arrow'
            onClick={previousImage}
            width='48'
            height='80'
            viewBox='0 0 48 80'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M47.04 7.78312L39.92 0.703125L0.359985 40.3031L39.96 79.9031L47.04 72.8231L14.52 40.3031L47.04 7.78312Z'
              fill='white'
            />
          </svg>
          <label className='image_counter'>
            {currentIndex + 1}/{pictures.length}
          </label>
          <svg
            className='next_arrow'
            onClick={nextImage}
            width='48'
            height='80'
            viewBox='0 0 48 80'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M0.960022 72.3458L8.04002 79.4258L47.64 39.8258L8.04002 0.22583L0.960022 7.30583L33.48 39.8258L0.960022 72.3458Z'
              fill='white'
            />
          </svg>
        </>
      )}
      ;
    </figure>
  );
}

export default Slideshow;

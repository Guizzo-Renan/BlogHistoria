import { useEffect, useState, useRef } from 'react';
import './carroselNovo.css';
import { Link } from 'react-router-dom';

const Carrosel = ({ chapters }) => {
  const [data, setData] = useState(chapters || []);
  const carousel = useRef(null);

  useEffect(() => {
      setData(chapters);
  
  }, [chapters]);

  const handleLeftClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  };

  const handleRightClick = (e) => {
    e.preventDefault();

    carousel.current.scrollLeft += carousel.current.offsetWidth;
  };

  if (!data || !data.length) return null;

  return (
    <div className="container">
     
      <div className="carousel" ref={carousel}>
        {data.map((item) => {
          const { id, name, image } = item;
          return (
            <div className="item" key={id}>
             
           
              <div className="image">
              <Link key={id} to={`/detalhes/${id}`}> 
              <img src={image} alt={name} />
              </Link>
              
           
           
              </div>
              <div className="info">
                <span className="name">{name}</span>
                        </div>
            </div>
          );
        })}
      </div>
     
  <div className="buttons">
        <button onClick={handleLeftClick}>
          <img src="/download.png" alt="->" />
        </button>
        <button onClick={handleRightClick}>
          <img src="/download.png" alt="->" />
        </button>
      </div>
 
    </div>
  );
}

export default Carrosel;


/**
 * 
 *   <div className="buttons">
        <button onClick={handleLeftClick}>
          <img src="/download.png" alt="->" />
        </button>
        <button onClick={handleRightClick}>
          <img src="/download.png" alt="->" />
        </button>
      </div>
 * 
 */
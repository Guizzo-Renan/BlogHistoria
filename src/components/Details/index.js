import { useParams } from 'react-router-dom';
import contents from '../../content/content';
import Carrosel from '../carrosel/carrosel';
import './Details.css'; // Certifique-se de criar este arquivo CSS para estilizar o componente

const Details = () => {
  const { id } = useParams();
  const productDetails = contents.find(product => product.id === parseInt(id));

  if (!productDetails) {
    return <div>Produto não encontrado.</div>;
  }

  return (
    <>
    <div className="details-container">


      <div className="image-container">
        <img src={productDetails.image} alt={productDetails.name} className="product-image" />
      </div>

      <div className="details-content">
        <div className="details-header">
          <h2>{productDetails.name}</h2>
         {/** <p>Classificação: {productDetails.rating} estrelas</p>*/} 
        </div>

        <div className="description-container">
          <p className="description-text">{productDetails.descricao}</p>
         
        </div>
      </div>
      </div>

      <div >
        <Carrosel chapters={productDetails.semelhantes} />
      </div>
      </>
  );
};

export default Details;

//className="carrosel-container"

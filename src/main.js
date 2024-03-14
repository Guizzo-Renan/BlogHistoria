import { Link } from 'react-router-dom';
import { Products } from './components/catalogo/catalogo';
import contents from './content/content';
import CardPainel from './components/CardPainel/index';

function Main() {
  return (<>
  <CardPainel/>
  
  <div className='App'>

  

  {contents.slice(0, 15).map(content => (
   <>
   
   <Products
    id={content.id}
      image={content.image}

      name={content.name}
      price={content.price}
      totalSales={content.totalSales}
      timeLeft={content.timeLeft}
      rating={content.rating}
      periodo={content.periodo}
    />
   
    </>
) 
) 

} 

</div>
  
  </>
  
  );
}

export default Main;
//<Link key={content.id} to={`/pagina/${content.id}`}> ver o capitulo </Link>

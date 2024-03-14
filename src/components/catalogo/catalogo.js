import { FaShoppingCart, FaRegBookmark, FaStar, FarFireAlt, FaFireAlt } from 'react-icons/fa';
import './catalogo.css'
import { Link } from 'react-router-dom';


export function Products(props) {
    console.log(props.id)
    return(
        <div className='productList'>
         
         <div key={props.id} className='productCard'>
         <Link key={props.id} to={`/detalhes/${props.id}`}> 
 
         <img src={props.image} alt='product-img' className='productImage'></img>

         </Link>

              {/**  
                 <FaShoppingCart className={"productCard__cart"} />
                 <FaRegBookmark className={"productCard__wishlist"} />
                 <FaFireAlt className={"productCard__fastSelling"} />
             
             
              <FaRegBookmark className={"productCard__wishlist"} />
             
             
             */}
              
                 <div className='productCard__content'>
                     <h3 className='productName'>{props.name}</h3>
                     <div className='displayStack__1'>
                         <div className='productPrice'>{props.periodo}</div>
                         <div className='productSales'>Ano-{props.totalSales}</div>
                     </div>
                
                    <div className='displayStack__2'>
                         <div className='productRating'>
                             {[...Array(props.rating)].map((index) => (
                                 <FaStar id={index + 1 } key={index} />
                             ))}
                             
                         </div>
                        
                     {/**  <div className='productTime'>{props.price} Visualizaçoẽs</div>*/} 
                     </div>
                
                   
                </div>
                  
                
                
            </div>
        </div>
    )
}

import React, {useState, useEffect} from 'react';
import Row from 'react-bootstrap/Row';
import ProductCard from './ProductCard';



const ProductList = ()=>{

    const [ productos, setProductos] = useState([])
   
    useEffect( () =>{
                    fetch('http://localhost:8888/productos').then(
                        response => response.json()
                    ).then(
                        data => {
                            setProductos(data);
                        }
                    )
    }

    )


    return(

        <Row className="m-4">

        {

           productos.map( producto =>{
                            return(
                <ProductCard titulo={producto.nombre}
                             imagen={producto.imagen}
                             precio={producto.precio}
                             id={producto.id}
                />
                     )    
           }
           )
            
        }

            

        </Row>

    );
}
       

export default ProductList;

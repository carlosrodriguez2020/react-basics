import {useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';

const rawProducts = [
  {id:1, nombre:'Caminsa Carlos', precio:50},
  {id:2, nombre:'Caminsa Raul', precio:40},
  {id:3, nombre:'Caminsa Marcelo', precio:20},
  {id:4, nombre:'Caminsa Julio', precio:70},
        
];

const App = () => {

  const [products, setProducts]= useState({
    loading: false,
    items: []

  })

  useEffect(()=>{
    const fetchProducts = () => {
      setProducts(prevState => ({...prevState, loading: true}))
      console.log("cargando Producto")
      setProducts(prevState => ({...prevState, loading: false, items: rawProducts}))
    }

    const intervalId = setInterval(fetchProducts, 15000)
      fetchProducts()
      return () => clearInterval(intervalId)

  },[setProducts])  

  const[cart, setCart]=useState({
    count: 0,
    items: []
  });

    const toggleProduct = (product) =>{
      const index = cart.items.findIndex(item => item.id === product.id)
      const currentItems = cart.items;
      if(index >= 0){
        currentItems.splice(index, 1)
      }else{
        currentItems.push(product)
      }
      setCart(
        prevState=>({...prevState, items: currentItems, count: currentItems.length})
      )
    }

    const renderCart = ( ) => {
      if(cart.count === 0) {
        return <div>No hay elementos</div>
      } 
      return ( 
       <ul>
         {cart.items.map(item => (

           <li key={`cart-${cart.id}`}>
             <strong>
               {item.nombre}
             </strong>
             <i>
               {item.precio}
             </i>
             <button type="button" onClick={()=>toggleProduct(item)}>Agregar/Quitar</button>
           </li>
         ))}
       </ul> 
      ) 

    }



    const renderProducts = ( ) => {
      if(products.loading) {
        return <div>Cargando</div>
      } 
      return ( 
       <ul>
         {products.items.map(product => (

           <li key={`product-${product.id}`}>

             <strong>
               {product.nombre}
             </strong>
             <i>
               {product.precio}
             </i>
             <button type="button" onClick={()=>toggleProduct(product)}>Agregar/Quitar</button>
           </li>
         ))}
       </ul> 
      ) 

    }

  const fecha= new Date().getFullYear();

    return (
    <>
      <div className="App App-header">
        
        <Header
        //bollean number strins also functions 
          titulo="Este valor es un props desde app.js a header"
        />
          <h1>Hola mundo</h1>
          <p>Hola mundo se encuentra en app.js, donde se renderizan los demas components</p>
        <div className="carritoCompraMuestra">

          <div >
            {renderProducts() }
          </div>
          <div>
            <h5>Elements cart {cart.count} </h5>
            {renderCart()}
        </div>
     </div>

        <Footer fecha={fecha}/>
      </div>
    </>
  );
}

export default App;

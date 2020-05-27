import React from 'react';
import NavigationBar from './Components/NavigationBar';
//import ProductSearch from './ProductSearch';//
import ProductList from './ProductList';
import Slider from './Components/Slider';
import ProductDetail from './Components/ProductDetail';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  
}from 'react-router-dom';

function App() {
  
  return (

  <Router>


   <NavigationBar  />  
   

    <Switch>
      
      <Route exact path="/" 
      children={
      <>
        <Slider />
        <ProductList />
      </>
               }
     />

      <Route exact path="/productos/:id"
             children={  <ProductDetail /> } 
             
      />
                      


    </Switch>


     
  </Router>

  );

}

export default App;

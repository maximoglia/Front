import React from 'react';

function Header(props){

    
    return(

         <div> 
             <p>Encabezado</p>
             <p>{props.Username} {props.Lastname}</p>
         </div>
               

    )
}

export default Header;
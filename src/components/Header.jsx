import React from 'react';

function Header(props){





return(
 <>  
<h2>{props.titulo} </h2>
<p>Este props (en el header) se recibe como props.titulo desde el App.js</p>
</>

)

};

export default Header;
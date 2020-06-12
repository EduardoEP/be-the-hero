import React, {useState} from 'react';

function Header({ children }) {
  return (
     <header>
       <h1>{ children }</h1>
     </header>
  );
}


export default Header;
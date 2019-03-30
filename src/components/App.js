import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import Menu from './Menu.js';
import Usuarios from './Usuarios/index.js';

class App extends Component {
  render() {
    return (
      <div>
         <BrowserRouter>
           <div>
              <Menu />
              <div className="container">
                <Route exact path='/' component={Usuarios} />
              </div>
           </div>
         </BrowserRouter>
     </div>
    );
  }
}

export default App;

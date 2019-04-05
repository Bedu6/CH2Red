import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import Menu from './Menu.js';
import Usuarios from './Usuarios/index.js';
import UsuariosGuardar from './Usuarios/Guardar.js';

class App extends Component {
  render() {
    return (
      <div>
         <BrowserRouter>
           <div>
              <Menu />
              <div className="container">
                <Route exact path='/' component={Usuarios} />
                <Route exact path='/usuarios/guardar' component={UsuariosGuardar} />
              </div>
           </div>
         </BrowserRouter>
     </div>
    );
  }
}

export default App;

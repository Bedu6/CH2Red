import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import Menu from './Menu.js';

class App extends Component {
  render() {
    return (
      <div>
         <BrowserRouter>
           <div>
              <Menu />
              <div className="container">
                 
              </div>
           </div>
         </BrowserRouter>
     </div>
    );
  }
}

export default App;

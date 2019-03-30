import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as comentariosActions from '../../actions/usuariosActions';
import Cargando from '../General/Cargando.js';
import Tabla from '../Tabla.js';
import Fatal from '../General/Fatal.js';
import { Button, Icon } from 'react-materialize';
import { Link } from 'react-router-dom';
import Guardar from './Guardar';

class index extends Component {

	componentDidMount(){

		/*if(!this.props.comentarios.length)
			this.props.traerComentarios();*/
	}

  	/*desplegar = () =>(
	  this.props.comentarios.map((comentario, key) => (
	   	<tr>
	      <td>{ comentario.email }</td>
	      <td>{ comentario.body }</td>
	      <td>
	      	<Link to={`/comentarios/editar/${comentario.id}`} >
	      		<Icon>edit</Icon>
	      	</Link>
	      </td>
	      <td><Icon>delete</Icon></td>
	    </tr>
	  ))
	);*/

	/*ponerContenido = () => {
		
		if(this.props.cargando)
			return <Cargando/>;

		if(this.props.error)
			return <Fatal mensaje={this.props.error} />;

		return <Tabla desplegar={ this.desplegar() } />
	};*/

  render() {
    return (
      <div> 
      	     	
      </div>
    );
  } //render
} //Class

const mapStateToProps = ({ usuariosReducer }) => usuariosReducer;

export default connect(mapStateToProps, usuariosActions)(index);
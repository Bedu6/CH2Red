import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as usuariosActions from '../../actions/usuariosActions';
import Cargando from '../General/Cargando.js';
import Tabla from '../Tabla.js';
import Fatal from '../General/Fatal.js';
import { Button, Icon, Modal } from 'react-materialize';
import { Link } from 'react-router-dom';
import Guardar from './Guardar';

class index extends Component {

	componentDidMount(){

		if(!this.props.usuarios.length)
			this.props.traerUsuarios();
	}

  	desplegar = () =>(
	  this.props.usuarios.map((usuario, key) => (
	   	<tr key={key}>
	      <td>{ usuario.nombre }</td>
	      <td>{ usuario.apellidos.paterno }</td>
	      <td>{ usuario.apellidos.materno }</td>
	      <td>{ usuario.edad }</td>
	      <td>
	      	<Link to={`/beneficiarios/index/${usuario._id}`} >
	      		<Icon>visibility</Icon>
	      	</Link>
	      </td>
	      <td>
	      	<Link to={`/usuarios/editar/${usuario._id}`} >
	      		<Icon>edit</Icon>
	      	</Link>
	      </td>
	      <td>
	      	<Link to={`/usuarios/eliminar/${usuario._id}`} >
	      		<Icon>delete</Icon>
	      	</Link>
	      </td>
	    </tr>
	  ))
	);

	ponerContenido = () => {
		
		if(this.props.cargando)
			return <Cargando/>;

		if(this.props.error)
			return <Fatal mensaje={this.props.error} />;

		return <Tabla desplegar={ this.desplegar() } />
	};

  render() {
    return (
      <div> 
      	<div className="flex align_center">
	      	<h2>Usuarios</h2>     	
	        <Link 
	        	icon="add" 
	        	to="/usuarios/guardar" 
	        	className="btn waves-effect waves-light btn-large btn-floating red ml">
	      		
	      		<i className="material-icons" >add</i>
	      	</Link>
      	</div>     

      	<br/><br/>
      	{ this.ponerContenido() } 

      </div>
    );
  } //render
} //Class

const mapStateToProps = ({ usuariosReducer }) => usuariosReducer;

export default connect(mapStateToProps, usuariosActions)(index);
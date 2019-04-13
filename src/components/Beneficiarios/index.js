import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as beneficiariosActions from '../../actions/beneficiariosActions';
import Cargando from '../General/Cargando.js';
import Tabla from '../Tabla.js';
import Fatal from '../General/Fatal.js';
import { Button, Icon } from 'react-materialize';
import { Link } from 'react-router-dom';
import Guardar from './Guardar';

class index extends Component {

	componentDidMount(){

		if(!this.props.beneficiarios.length)
			this.props.traerBeneficiarios();
	}

  	desplegar = () =>(
	  this.props.beneficiarios.map((beneficiario, key) => (
	   	<tr key={key}>
	      <td>{ beneficiario.nombre }</td>
	      <td>{ beneficiario.edad }</td>
	      <td>
	      	<Link to={`/beneficiarios/editar/${beneficiario._id}`} >
	      		<Icon>edit</Icon>
	      	</Link>
	      </td>
	      <td>
	      	<Link to={`/beneficiarios/eliminar/${beneficiario._id}`} >
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
	      	<h2>Dependientes</h2>     	
	        <Link 
	        	icon="add" 
	        	to="/beneficiarios/guardar" 
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

const mapStateToProps = ({ beneficiariosReducer }) => beneficiariosReducer;

export default connect(mapStateToProps, beneficiariosActions)(index);
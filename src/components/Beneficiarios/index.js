import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as beneficiariosActions from '../../actions/beneficiariosActions';
import Cargando from '../General/Cargando.js';
import Hola from '../Beneficiarios/Hola';
import Fatal from '../General/Fatal.js';
import { Button, Icon } from 'react-materialize';
import { Link } from 'react-router-dom';
import Guardar from './Guardar';

class index extends Component {

	componentDidMount(){
		
		if(this.props.match.params.id){		
			this.props.traerUnUsuario(this.props.match.params.id);
		}

//		if(!this.props.beneficiarios.length)
			this.props.traerBeneficiarios(this.props.match.params.id);
	}

  	desplegar = () =>(
	  this.props.beneficiarios.map((beneficiario, key) => (
	   	<tr key={key}>
	      <td>{ beneficiario.nombre_completo }</td>
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

		return <Hola desplegar={ this.desplegar() } />
	};

  render() {
    return (
      <div> 
      	<h2>{this.props.nombre}</h2> 
      	<div className="flex align_center">
	      	<h2>Dependientes</h2>     	
	        <Link 
	        	icon="add" 
	        	to={`/beneficiarios/guardar/${this.props.match.params.id}`} 
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
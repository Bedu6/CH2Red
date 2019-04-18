import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as beneficiariosActions from '../../actions/beneficiariosActions';
import Cargando from '../General/Cargando.js';
import Tarjeta from './Tarjeta';
import Fatal from '../General/Fatal.js';
import { Icon, Col, Row, Card, Button, Modal } from 'react-materialize';
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
	      	<a  onClick={ this.eliminarBeneficiario }>
	      		<Icon>edit</Icon>
	      	</a>
	      </td>
	    </tr>
	  ))
	);

	eliminarBeneficiario = () => {
		/*let andy = window.confirm("Eliminar");
		let msg;
		if(andy) {
			msg = "Eliminado";
		}

		alert(msg);*/
		/*<Modal header="Modal Header" trigger={<Button />}>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
			</p>
	    </Modal>*/
	};


	ponerContenido = () => {
		
		if(this.props.cargando)
			return <Cargando/>;

		if(this.props.error)
			return <Fatal mensaje={this.props.error} />;

		return <Tarjeta desplegar={ this.desplegar() } />
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
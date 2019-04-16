import React from 'react';
import { Table } from 'react-materialize';

const Hola = (props) =>(
	<div>
		<Table hoverable>
		  <thead>
		    <tr>
		      <th>Nombre</th>
		     				      
		      <th>Edad</th>				      		
		      <th>Editar</th>		
		      <th>Eliminar</th>		
		    </tr>
		  </thead>
		   <tbody>
		    { props.desplegar }
		  </tbody>
		</Table>
	</div>
);

export default Hola;
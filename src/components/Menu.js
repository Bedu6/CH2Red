import React from 'react';
import {Link} from 'react-router-dom';
import {Navbar, Icon} from 'react-materialize';


const Menu = (props) =>(
	<div>
		<Navbar left>
			<li>				
				<Link to="/" className="flex justify_center" >
				<Icon className="mr" >perm_identity</Icon> Usuarios</Link>
			</li>
		</Navbar>
	</div>
);

export default Menu;
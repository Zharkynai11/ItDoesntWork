import React from 'react';
import {NavLink} from "react-router-dom";
import Menu from '../Menu/Menu';
const MenuItem = (props) => (
<li className="nav-item">
<NavLink to={props.to} className='nav-link' exact>{props.label}</NavLink>
</li>
);
export default MenuItem;
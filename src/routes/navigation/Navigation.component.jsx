import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './Navigation.styles.scss'

import { ReactComponent as CrownImage } from '../../assets/images/crown.svg';

function Navigation() {
	return (
		<React.Fragment>
			<div className="navigation">
				<Link className="logo-container" to="/">
					<CrownImage className='logo' />
				</Link>
				<div className="nav-links-container">
					<Link className="nav-link" to="/shop">
						SHOP
					</Link>
					<Link className="nav-link" to="/sign-in">
						SIGN IN
					</Link>
				</div>
			</div>
			<Outlet />
		</React.Fragment>
	);
}

export default Navigation;

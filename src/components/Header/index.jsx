import React from 'react';
import { NavLink } from 'react-router-dom';
import { slide as Menu } from './Menu/lib/BurgerMenu.js';
import './style.css';

class Example extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			menuOpen: false,
		};
	}

	handleStateChange(state) {
		this.setState({ menuOpen: state.isOpen });
	}

	closeMenu() {
		this.setState({ menuOpen: false });
	}

	toggleMenu() {
		this.setState((state) => ({ menuOpen: !state.menuOpen }));
	}

	render() {
		return (
			<section>
				<Menu
					width="100%"
					right
					isOpen={this.state.menuOpen}
					onStateChange={(state) => this.handleStateChange(state)}
					className="outline-0"
				>
					<NavLink
						onClick={() => this.closeMenu()}
						to="/"
						className="link helvetica white f-5 f1-m fw7 pb5 outline-0"
					>
						Home
					</NavLink>
					<NavLink
						onClick={() => this.closeMenu()}
						to="/work"
						className="link helvetica white f-5 f1-m fw7 pb5 outline-0"
					>
						Work
					</NavLink>
					<NavLink
						onClick={() => this.closeMenu()}
						to="/about"
						className="link helvetica white f-5 f1-m fw7 pb5 outline-0"
					>
						About
					</NavLink>
					<NavLink
						onClick={() => this.closeMenu()}
						to="/contacts"
						className="link helvetica white f-5 f1-m fw7 pb5 outline-0"
					>
						Contacts
					</NavLink>
				</Menu>
			</section>
		);
	}
}

export function Header() {
	return (
		<>
			<section className="w-100 fixed bg-white z-max">
				<NavLink className="logo dim helvetica tracked" to="/">
					Scapin Tobias
				</NavLink>
				<Example />
			</section>
			<div className="header-clearfix" />
		</>
	);
}

export function Footer() {
	return (
		<div className="db bg-gold helvetica f4 fw8 white  w-100 pa2">
			Scapin Tobias ©2020
		</div>
	);
}

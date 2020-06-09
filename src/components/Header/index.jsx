import React from 'react';
import { NavLink } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';
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
			<section className="">
				<Menu
					right
					isOpen={this.state.menuOpen}
					onStateChange={(state) => this.handleStateChange(state)}
				>
					<NavLink
						onClick={() => this.closeMenu()}
						to="/"
						className="link helvetica white f2 fw7 pb4"
					>
						Home
					</NavLink>
					<NavLink
						onClick={() => this.closeMenu()}
						to="/work"
						className="link helvetica white f2 fw7 pb4"
					>
						Work
					</NavLink>
					<NavLink
						onClick={() => this.closeMenu()}
						to="/about"
						className="link helvetica white f2 fw7 pb4"
					>
						About
					</NavLink>
					<NavLink
						onClick={() => this.closeMenu()}
						to="/contacts"
						className="link helvetica white f2 fw7 pb4"
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
		<div className="db bg-black helvetica f4 white tr w-100 pa2">
			Scapin Tobias ©2020
		</div>
	);
}

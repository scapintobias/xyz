import React from 'react';
import { NavLink } from 'react-router-dom';
import { Donald } from './header';
import './style.css';
export function Header() {
	return (
		<>
			<section className="fixed w-100 bg-white z-max">
				<Donald />
				<NavLink className="logo dim helvetica tracked" to="/">
					Scapin Tobias
				</NavLink>
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

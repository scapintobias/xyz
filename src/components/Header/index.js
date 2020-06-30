import React from 'react';
import { NavLink } from 'react-router-dom';
import { Donald } from './header';
import './style.css';
export function Header() {
	return (
		<header className="header">
			<section className="fixed w-100 bg-white z-max">
				<Donald />
				<NavLink className="logo dim helvetica" to="/">
					Scapin Tobias
				</NavLink>
			</section>

			<div className="header-clearfix" />
		</header>
	);
}

export function Footer() {
	return (
		<footer className="left-0 right-0 bottom-0 fixed">
			<div className="bg-gold helvetica f5 fw6 tr white w-100 pa1">
				Scapin Tobias ©2020
			</div>
		</footer>
	);
}

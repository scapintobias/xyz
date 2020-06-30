import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const StyledBurger = styled.button`
	position: absolute;
	top: 0.7rem;
	right: 1rem;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	width: 2rem;
	height: 2rem;
	background: transparent;
	border: none;
	cursor: pointer;
	padding: 0;
	z-index: 10;

	&:focus {
		outline: none;
	}

	div {
		width: 2rem;
		height: 0.25rem;
		background: ${({ open }) => (open ? '#fff' : '#333')};
		border-radius: 10px;
		transition: all 0.3s linear;
		position: relative;
		transform-origin: 1px;

		:first-child {
			transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
		}

		:nth-child(2) {
			opacity: ${({ open }) => (open ? '0' : '1')};
			transform: ${({ open }) => (open ? 'translateX(20px)' : 'translateX(0)')};
		}

		:nth-child(3) {
			transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
		}
	}
`;

const StyledMenu = styled.nav`
	display: flex;
	flex-direction: column;
	justify-content: center;
	background: #000000;
	opacity: 0.9;
	transform: ${({ open }) => (open ? 'translateX(0%)' : 'translateX(100%)')};
	height: 100vh;
	text-align: center;
	padding: 1rem;
	position: absolute;
	top: 0;
	right: 0;
	transition: transform 0.3s ease-in-out;
		width: 100%;
	}



	}
`;

const Burger = ({ open, setOpen }) => {
	return (
		<StyledBurger open={open} onClick={() => setOpen(!open)}>
			<div />
			<div />
			<div />
		</StyledBurger>
	);
};

const useOnClickOutside = (ref, handler) => {
	React.useEffect(() => {
		const listener = (event) => {
			if (!ref.current || ref.current.contains(event.target)) return;
			handler(event);
		};
		document.addEventListener('mousedown', listener);

		return () => {
			document.removeEventListener('mousedown', listener);
		};
	}, [ref, handler]);
};

const Menu = ({ open, setOpen }) => {
	return (
		<StyledMenu open={open}>
			<NavLink
				to="/"
				className="menulink helvetica"
				onClick={() => setOpen(!open)}
			>
				Home
			</NavLink>
			<NavLink
				to="/work"
				className="menulink helvetica"
				onClick={() => setOpen(!open)}
			>
				Work
			</NavLink>

			<NavLink
				to="/contacts"
				className="menulink helvetica"
				onClick={() => setOpen(!open)}
			>
				Contacts
			</NavLink>
		</StyledMenu>
	);
};

export const Donald = () => {
	const [open, setOpen] = React.useState(false);
	const node = React.useRef();
	useOnClickOutside(node, () => setOpen(false));
	return (
		<div>
			<section />
			<div ref={node}>
				<Burger open={open} setOpen={setOpen} />
				<Menu open={open} setOpen={setOpen} />
			</div>
		</div>
	);
};

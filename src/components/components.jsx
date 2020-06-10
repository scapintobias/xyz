import React from 'react';
import { NavLink } from 'react-router-dom';

export function HomeText({ children }) {
	return (
		<div className="vh-100 vh-90-m flex bg-gold">
			<div className="helvetica white fw8 self-center center tracked f-4 f3-m lh-copy">
				{children}
			</div>
		</div>
	);
}

export function HomeProject(props) {
	return (
		<NavLink to={props.link}>
			<section className=" ma3 flex link black  hover-gold">
				<div className=" w-30 mr3 flex flex-column justify-center items-end tr ">
					<div className="helvetica  fw7 f3-m f1 pb3 pb2-m">{props.title}</div>
					<div className="minion f3 f4-m orange">{props.subtitle}</div>
				</div>
				<div className="w-70">
					<img alt="alt" src={props.src} className="mw-100 " />
				</div>
			</section>
		</NavLink>
	);
}

export function HomeProjectVid(props) {
	return (
		<NavLink to={props.link}>
			<section className=" ma3 flex link black  hover-gold">
				<div className=" w-30 mr3 flex flex-column justify-center items-end tr ">
					<div className="helvetica  fw7 f3-m f1 pb3 pb2-m lh-solid">
						{props.title}
					</div>
					<div className="minion f3 f4-m orange">{props.subtitle}</div>
				</div>
				<div className="w-70 resp-container">
					<iframe
						className="resp-iframe"
						title="video"
						width="1920"
						height="1080"
						src={props.video}
						frameborder="0"
					></iframe>
				</div>
			</section>
		</NavLink>
	);
}

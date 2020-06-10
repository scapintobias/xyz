import React from 'react';

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
		<section className="ma3 flex">
			<div className=" w-30 mr3 h6 h5-m flex flex-column justify-center items-end tr">
				<div className="helvetica fw7 f3-m f1 pb3 pb2-m">{props.title}</div>
				<div className="minion f3 f4-m orange">{props.subtitle}</div>
			</div>
			<div className="w-70 h6 h5-m bg-green" />
		</section>
	);
}

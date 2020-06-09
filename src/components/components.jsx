import React from 'react';

export function HomeText({ children }) {
	return (
		<div className="vh-100 vh-90-m flex bg-purple">
			<div className="helvetica white fw8 self-center center f-4 f3-m lh-copy">
				{children}
			</div>
		</div>
	);
}

export function HomeProject(props) {
	return (
		<section className="ma3 flex">
			<div className=" w-30 mr3 h6 flex flex-column justify-center items-end">
				<div className="helvetica fw7 f1 pb3">{props.title}</div>
				<div className="minion f3 orange">{props.subtitle}</div>
			</div>
			<div className="w-70 h6 bg-green" />
		</section>
	);
}

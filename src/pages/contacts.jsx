import React from 'react';

function Mailto({ email, subject, body, ...props }) {
	return (
		<div className="pa5 mb3 gold dim link">
			<a
				href={`mailto:${email}?subject=${encodeURIComponent(subject) ||
					''}&body=${encodeURIComponent(body) || ''}`}
			>
				{props.children}
			</a>
		</div>
	);
}

export function Contacts() {
	return (
		<main style={{ marginTop: '54px' }}>
			<div className="helvetica black f-4 tc pa4 fw6">
				<Mailto email="foo@bar.baz" subject="Hello & Welcome" body="Hello world!">
					Mail me!
				</Mailto>
				<p>+39 340 2100166</p>
			</div>
		</main>
	);
}

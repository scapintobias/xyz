import React from 'react';

import { NavLink } from 'react-router-dom';
import YoutubeBackground from 'react-youtube-background';
import { Parallax } from 'react-parallax';

const styles = {
	textAlign: 'center',
};
const insideStyles = {
	padding: 20,
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%,-50%)',
	width: '100%',
};

export const Home = () => (
	<main style={styles}>
		<NavLink to="/work" className="link">
			<Parallax bgImage="./img/borromeo.png" strength={500}>
				<div
					style={{ height: 600 }}
					className="near-white tracked-tight-title helvetica fw7 f-mega lh-title tracked-l f-6-l f1-m f-6-t tracked-t tracked-m hover-gold"
				>
					<div style={insideStyles}>Borromeo5</div>
				</div>
			</Parallax>
		</NavLink>
		<NavLink to="/work" className="link">
			<Parallax bgImage="./img/corte.png" strength={500}>
				<div
					style={{ height: 600 }}
					className="near-white tracked-tight-title helvetica fw7 f-mega lh-title tracked-l f-6-l f1-m f-6-t tracked-t tracked-m hover-gold"
				>
					<div style={insideStyles}>Corte d'Arte</div>
				</div>
			</Parallax>
		</NavLink>
		<NavLink to="/work">
			<div className="link near-white  w-100 h8 h6-m bw3 bt bb b--gold  flex">
				<YoutubeBackground
					videoId="IhxD--LuNA0?&autoplay=1&mute=1&loop=1"
					className="w-100"
				></YoutubeBackground>
			</div>
		</NavLink>
	</main>
);

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
	<main>
		<Parallax className="bg-gold absolute" strength={600}>
			<div className="vh-30 near-white tracked helvetica fw7 f-7 lh-title tracked-l f-6-l f1-m f-6-t tracked-t tracked-m">
				<div className="pa5">
					<p>
						<NavLink to="/work/photography" className="pb3 link white hover-orange">
							Fotografia
						</NavLink>
					</p>
					<p>
						<NavLink to="/work/video" className="pb3 link white hover-blue">
							Video
						</NavLink>
					</p>
					<p>
						<NavLink to="/work/corporate" className="pb3 link white hover-green">
							Grafica
						</NavLink>
					</p>
				</div>
			</div>
		</Parallax>
		<NavLink to="/work/corporate/2015/borromeo5" className="link">
			<Parallax bgImage="./img/borromeo.png" strength={500} style={styles}>
				<div
					style={{ height: 500 }}
					className="near-white tracked-tight-title helvetica fw7 f-mega lh-title tracked-l f-6-l f1-m f-6-t tracked-t tracked-m hover-gold bb bw3 b--gold"
				>
					<div style={insideStyles}>Borromeo5</div>
				</div>
			</Parallax>
		</NavLink>
		<NavLink to="/work/corporate/2014/corte-darte" className="link">
			<Parallax bgImage="./img/corte.png" strength={500} style={styles}>
				<div
					style={{ height: 500 }}
					className="near-white tracked-tight-title helvetica fw7 f-mega lh-title tracked-l f-6-l f1-m f-6-t tracked-t tracked-m hover-gold"
				>
					<div style={insideStyles}>Corte d'Arte</div>
				</div>
			</Parallax>
		</NavLink>
		<NavLink to="/work/video/2018/ducati-1260-multistrada">
			<div className="link near-white  w-100 h8 h6-m bw3 bt bb b--gold  flex">
				<YoutubeBackground
					videoId="IhxD--LuNA0?&autoplay=1&mute=1&loop=1"
					className="w-100"
				></YoutubeBackground>
			</div>
		</NavLink>
		<NavLink to="/work/photography/2018/mental-coach" className="link">
			<Parallax bgImage="./cat/photo/mc/mch.jpg" strength={500} style={styles}>
				<div
					style={{ height: 500 }}
					className="near-white tracked-tight-title helvetica fw7 f-mega lh-title tracked-l f-6-l f1-m f-6-t tracked-t tracked-m hover-gold"
				>
					<div style={insideStyles}>Mental Coach</div>
				</div>
			</Parallax>
		</NavLink>
	</main>
);

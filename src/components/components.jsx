import React from 'react';
import { NavLink } from 'react-router-dom';
import YoutubeBackground from 'react-youtube-background';
import { Parallax } from 'react-parallax';

export function HomeProject(props) {
	return (
		<NavLink to={props.link}>
			<Parallax
				bgImage={props.background}
				strength={500}
				className="flex link items-center justify-center near-white h8 h7-l h4-t h5-m cover hover-gold"
			>
				<div className="flex  tracked-tight-title helvetica fw7 f-mega  tracked-l f-6-l f1-m f-6-t tracked-t tracked-m ">
					{props.title}
				</div>
			</Parallax>
		</NavLink>
	);
}

export function HomeProjectVid(props) {
	return (
		<NavLink to={props.link}>
			<div className="link near-white  w-100 h8 h6-m bw3 bt bb b--gold  flex">
				<YoutubeBackground
					videoId="IhxD--LuNA0?&autoplay=1&mute=1&loop=1"
					className="w-100"
				></YoutubeBackground>
			</div>
		</NavLink>
	);
}

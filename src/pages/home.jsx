import React from 'react';
import {
	HomeProject,
	HomeText,
	HomeProjectVid,
} from '../components/components';

export const Home = () => (
	<main>
		<HomeText>
			<p>Design for every dimension.</p>
			<p>Design for print.</p>
			<p>Design for screens.</p>
			<p>Design for User Experience.</p>
			<p>Design for durability.</p>
			<p>Design for All.</p>
			<p>Design in every measure.</p>
		</HomeText>
		<HomeProject title="Borromeo5" background="./img/borromeo.png" link="/work" />
		<HomeProject title="Corte d'Arte" background="./img/corte.png" link="/work" />
		<HomeProjectVid
			title="Ducati 1260 Multistrada"
			subtitle="Video"
			video="https://www.youtube.com/embed/IhxD--LuNA0?rel=0&showinfo=0&ecver=1&autoplay=1&mute=1&loop=1"
			link="/work"
		/>
		<HomeProject
			title="Villa Manin"
			background="./img/borromeo.png"
			link="/work"
		/>

		<HomeProject
			title="Villa Manin"
			background="./img/borromeo.png"
			link="/work"
		/>
	</main>
);

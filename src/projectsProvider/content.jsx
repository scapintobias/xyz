import React from 'react';
import {
	Main,
	Par,
	Sec,
	ParImg,
	Iltr,
	Img,
	Br,
	TwoImg,
	Head,
	Tit,
	P,
	Rf,
	Pic,
	Collab,
} from './components.jsx';
import './style.css';

export function Lima() {
	return (
		<Main>
			<Collab href="http://www.aetherotopies.com/" collab="Samuel Iuri" />
			<Img oneimg="/cat/lima/4.png" />

			<Pic img="/cat/lima/limalogo.png" className="mw8 center pv5 pv4-m ph3" />

			<Par>
				The first stage of the process consisted in a vast analysis of all the
				available material of both the existing and the future lines, in order to
				comprehend the vastness and complexity of the system, and its actual
				wayfinding.
				<Br />
				<Br />
				The outcome of this research has shown vast possibilities of improvement,
				from both a design and infrastructural integration perspective, to solve the
				lack of scalability, legibility, and consistency.
				<Br />
				<Br />
				The second stage consisted in the evaluation of the available channels to
				convey information through, which consist in: map, station signage, train
				signage, etc.
				<Br />
				<Br />
				The third stage consisted in the developement of a coherent system, which
				takes advantage of the stations’ architecture, has a inner modularity (hence
				using the pillars), and provides in a clear way the few but essential
				informations (station name, train direction, entries and exits)
			</Par>
			<Iltr img="/cat/lima/simplon.png">
				<Head head="Specimens of the font involved for composing the logo and the rest of the Corporate Image." />
				<Tit tit="Simplon Norm" />
				<P>
					Simplon is a sans-serif typeface that is widely used for traffic,
					administrative and technical applications. It’s based on the German
					standards body DIN - Deutsches Institut für Normung (German Institute for
					Standardization), in the standard typefaces sheet published in 1931.
					Originally designed for industrial uses, the first DIN-type fonts were a
					simplified design that could be applied with limited technical difficulty.
					Due to the design’s legibility and uncomplicated, unadorned design, it has
					become popular for general purpose use in signage and display adaptations.
				</P>
			</Iltr>
			<Img oneimg="/cat/lima/section.png" />

			<Pic
				img="/cat/lima/aeropuerto.png"
				className="ph3 pt3 mw68 center"
				imgClass="ba b--black"
			/>

			<Img oneimg="/cat/lima/salida.png" className="mw68 center" />

			<Img oneimg="/cat/lima/map.png" />

			<Par>
				<Sec title="Map" />
				This kind of representation shows a fictional geography by moving away from
				the concept that transportation maps had to position the underground
				geography directly to the aboveground geography. Such design moves away from
				the idea that the representation has to follow the actual geographical route
				of the lines. By replacing the strict geographically imposed rules, that
				requires that entities represented be placed exactly where they are located
				in the physical world, with a regular pattern of horizontal, vertical or
				diagonal lines the proposed map depicts much more clearly the relative
				locations of the different lines and the sequence of stations. In this way,
				the map turns out to be an useful support in gaining an understanding of the
				complexities of the underground lines, and an aid in travel planning. For
				these reasons it can act as a navigation tool to assist in working one’s way
				through the underground maze of lines and stations and as a reference once a
				journey is underway.
			</Par>
			<Img oneimg="/cat/lima/5.png" />
		</Main>
	);
}

export function Ducati() {
	return (
		<Main>
			<section className="ma3 ma0-m">
				<div className="resp-container">
					<iframe
						className="resp-iframe"
						title="myFrame"
						src="https://www.youtube.com/embed/IhxD--LuNA0"
						allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture allowfullscreen"
					/>
				</div>
				<p className=" mb2 ml3  minion gray tr tl-t tl-m f7">
					In collaboration with e-Novia.
				</p>
			</section>
		</Main>
	);
}
export function Mental() {
	return (
		<Main>
			<section className="grid-3 ph3 pt3">
				<div>
					<img src="/cat/photo/mc/mc4.jpg" alt="mental" />
				</div>

				<div>
					<img src="/cat/photo/mc/mc1.jpg" alt="mental" />
				</div>

				<div>
					<img src="/cat/photo/mc/mc2.jpg" alt="mental" />
				</div>

				<div>
					<img src="/cat/photo/mc/mc3.jpg" alt="mental" />
				</div>

				<div>
					<img src="/cat/photo/mc/mc5.jpg" alt="mental" />
				</div>

				<div>
					<img src="/cat/photo/mc/mc6.jpg" alt="mental" />
				</div>
			</section>
		</Main>
	);
}

export function Pantone() {
	return (
		<Main>
			<Collab href="http://www.aetherotopies.com/" collab="Samuel Iuri" />
			<div className="gridp mh3 mt3">
				<img src="/cat/pantone/cocktails/A.png" alt="cocktail" />

				<img src="/cat/pantone/cocktails/B.png" alt="cocktail" />

				<img src="/cat/pantone/cocktails/C.png" alt="cocktail" />

				<img src="/cat/pantone/cocktails/D.png" alt="cocktail" />
			</div>
			<Par className="pb3">
				Colour schemes became popular in the mid-sixties, purely among printing
				technicians and design professionals. In the last few years, the most
				renowned ink company, <span className="b helvetica fw7">PANTONE</span>,
				decided to widen its audience, gaining a spot into everyday people’s lives.
				Plates, china-ware, phone covers and stationery—labelled with the iconic
				colours—made their way to the masses. We thought this was not enough. Why
				not to take a step forward? Instead of being a mere ornament, why shouldn’t
				it be given the chance to become the essence as well? During one of the
				foremost design-focused events, the Milan Design Week/Salone Del Mobile
				2018, we offer the hundreds of thousands visitors who will gather in the
				city throughout the week the possibility to dive into a whole new coloured
				sociality. The audience will be able to taste six specially crafted
				cocktails, based on cherry-picked swatches in an accurately designed space,
				thoroughly immersed in the electric vibe of the Fuorisalone. For the entire
				week we will transform a completely empty space—in the heart of the
				event—into an incubator of the new{' '}
				<span className="b helvetica fw7">PANTONE</span> experience, where the
				visitors will have the chance to enjoy the peculiar beverages immersed into
				a carefully customised environment. The brand in its decades-long practice
				managed to impose itself as the standard in the design community; which
				focus has shifted from a very technical point of view towards a more liquid
				attitude. It is essential to allow the trademark to propose itself under a
				whole new light, with new communication assets able to ink the way into the
				future of design again.
				<Sec
					title="PANTONE inks marking the nights"
					subtitle="of the brightest Design event."
				/>
				In Milan we see every year all sort of attractions, but our team always
				feels something missing, poorly designed or with bad organization. Therefore
				we decided to take a leap forward, break all the issues to pieces, and
				transform every detail into something specifically designed around people,
				the experience, and the impact it has to generate. We are designers and
				architects, it might be difficult to believe, but we cannot do everything by
				ourselves. So, for the sake of best practices, we endorse collaborations
				with third party companies we trust, who will provide the necessary
				experience and skills not directly available. We have in mind an iconic
				space carefully designed by our team of architects, and furnished by our
				interior designers, with lightweight but essential interventions customised
				according to the company’s needs and identity, but keeping the users in the
				centre. The space we want to build will attract and welcome as many visitors
				as possible, allowing them to fully enjoy what we call the new{' '}
				<span className="b helvetica fw7">PANTONE</span> Experience: they will have
				the chance to taste a selection of carefully prepared drinks, exclusively
				blended for the specific event by a group of inventive bartenders, inspired
				by a trending palette that <span className="b helvetica fw7">PANTONE</span>{' '}
				together with our creatives, will select. #drinkpantone: an immersive
				experience, a bold design, a colourful, tendsetting social event – just like{' '}
				<span className="b helvetica fw7">PANTONE</span>.
			</Par>
			<Img oneimg="/cat/pantone/pantone_2.png" />

			<Img oneimg="/cat/pantone/tram.png" />
		</Main>
	);
}
export function Je() {
	return (
		<Main>
			<section className="grid-3 ph3 pt3">
				<div>
					<img src="/cat/photo/je/je1.jpg" alt="je" />
				</div>

				<div>
					<img src="/cat/photo/je/je2.jpg" alt="je" />
				</div>

				<div>
					<img src="/cat/photo/je/je3.jpg" alt="je" />
				</div>

				<div>
					<img src="/cat/photo/je/je4.jpg" alt="je" />
				</div>

				<div>
					<img src="/cat/photo/je/je5.jpg" alt="je" />
				</div>

				<div>
					<img src="/cat/photo/je/je6.jpg" alt="je" />
				</div>

				<div>
					<img src="/cat/photo/je/je7.jpg" alt="je" />
				</div>

				<div>
					<img src="/cat/photo/je/je8.jpg" alt="je" />
				</div>

				<div>
					<img src="/cat/photo/je/je9.jpg" alt="je" />
				</div>

				<div>
					<img src="/cat/photo/je/je10.jpg" alt="je" />
				</div>

				<div>
					<img src="/cat/photo/je/je11.jpg" alt="je" />
				</div>

				<div>
					<img src="/cat/photo/je/je12.jpg" alt="je" />
				</div>

				<div>
					<img src="/cat/photo/je/je13.jpg" alt="je" />
				</div>

				<div>
					<img src="/cat/photo/je/je14.jpg" alt="je" />
				</div>

				<div>
					<img src="/cat/photo/je/je15.jpg" alt="je" />
				</div>

				<div>
					<img src="/cat/photo/je/je16.jpg" alt="je" />
				</div>

				<div>
					<img src="/cat/photo/je/je17.jpg" alt="je" />
				</div>

				<div>
					<img src="/cat/photo/je/je18.jpg" alt="je" />
				</div>

				<div>
					<img src="/cat/photo/je/je19.jpg" alt="je" />
				</div>

				<div>
					<img src="/cat/photo/je/je20.jpg" alt="je" />
				</div>

				<div>
					<img src="/cat/photo/je/je21.jpg" alt="je" />
				</div>

				<div>
					<img src="/cat/photo/je/je22.jpg" alt="je" />
				</div>

				<div>
					<img src="/cat/photo/je/je23.jpg" alt="je" />
				</div>

				<div>
					<img src="/cat/photo/je/je24.jpg" alt="je" />
				</div>

				<div>
					<img src="/cat/photo/je/je25.jpg" alt="je" />
				</div>

				<div>
					<img src="/cat/photo/je/je26.jpg" alt="je" />
				</div>

				<div>
					<img src="/cat/photo/je/je27.jpg" alt="je" />
				</div>

				<div>
					<img src="/cat/photo/je/je28.jpg" alt="je" />
				</div>

				<div>
					<img src="/cat/photo/je/je29.jpg" alt="je" />
				</div>

				<div>
					<img src="/cat/photo/je/je30.jpg" alt="je" />
				</div>

				<div>
					<img src="/cat/photo/je/je31.jpg" alt="je" />
				</div>

				<div>
					<img src="/cat/photo/je/je32.jpg" alt="je" />
				</div>

				<div>
					<img src="/cat/photo/je/je33.jpg" alt="je" />
				</div>

				<div>
					<img src="/cat/photo/je/je34.jpg" alt="je" />
				</div>

				<div>
					<img src="/cat/photo/je/je35.jpg" alt="je" />
				</div>

				<div>
					<img src="/cat/photo/je/je36.jpg" alt="je" />
				</div>
			</section>
		</Main>
	);
}
export function Mourn() {
	return (
		<Main>
			<Img oneimg="/cat/mourn.png" className="mw8 center" />
		</Main>
	);
}

export function Ideascudo() {
	return (
		<Main>
			<Img oneimg="/cat/ideascudo/ideascudo_1.png" />

			<Iltr img="/cat/ideascudo/ideascudo_2.png">
				<Head head="Specimens of the font involved for composing the logo and the rest of the Corporate Image." />
				<Tit tit="Permanent Headline" />
				<P>
					A bold, highly compressed sans-serif typeface in the neo-grotesque style.
					It was designed by Karlgeorg Hoefer for the type foundry Ludwig & Mayer in
					Frankfurt am Main. It was released from 1964 and later issued by a range of
					companies in phototypesetting and digital versions.
					<Rf
						link="http://www.klingspor-museum.de/KlingsporKuenstler/Schriftdesigner/Hoefer/KGHoefer.pdf"
						rf="1"
					/>
				</P>
			</Iltr>
		</Main>
	);
}
export function Tokyo() {
	return (
		<Main>
			<Pic
				img="/cat/tokyo/tokyo_1.png"
				className="pa3 mw8 center"
				imgClass="ba b--black"
			/>

			<Par>
				<Sec title="Univers" />
				<ParImg oneimg="/cat/tokyo/tokyo_2.png" />
				Univers was designed by Adrian Frutiger on Swiss principles for Charles
				Peignot at Deberny & Peignot.
				<Br />
				<Br />
				Frutiger imposed strict discipline across all elements of the series, from
				light to dark, extra condensed to extended, a concordance of design that was
				possible in the foundry type and photocomposition fonts. Any version may be
				mixed within a word with any other. It may be argued that the design of the
				most popular central series is limited by strict conformity to little used
				extremes. If Helvetica gives us the strongest central designs at some
				sacrifice in uniformity across the series, Univers gives us a uniform series
				by disciplining the central designs.
				<Br />
				<Br />
				Alteration of character widths required by the Monotype caster separates
				Monotype Univers from the original; the Linotype photocomposition version,
				designed by Frutiger, has a more even color across the series, achieved by
				relaxing the original rigid formula for stroke width.
				<Br />
				<Br />
				IBM Selectric Univers, designed by Frutiger, is less successful, since it
				had to be placed on widths tuned for Times Roman.
			</Par>
		</Main>
	);
}
export function Syneco() {
	return (
		<Main>
			<Img oneimg="/cat/syneco/syneco_1.png" />

			<Iltr img="/cat/syneco/syneco_2.png">
				<Head head="Specimens of the font involved for composing the logo and the rest of the Corporate Image." />
				<Tit tit="Neue Haas Grotesk" />
				<P>
					The first weights of Neue Haas Grotesk were designed in 1957-1958 by Max
					Miedinger for the Haas’sche Schriftgiesserei in Switzerland, with art
					direction by the company’s principal, Eduard Hoffmann. Neue Haas Grotesk
					was to be the answer to the British and German grotesques that had become
					hugely popular thanks to the success of functionalist Swiss typography. The
					typeface was soon revised and released as Helvetica by Linotype AG.
				</P>
				<Tit tit="Our Bodoni" />
				<P>
					Commissioned by Bert Di Pamphilis of WTC and designed by Tom Carnase under
					the direction of Massimo Vignelli. The goal of this 1989 Bodoni revival was
					to match the proportions of Neue Haas Grotesk.
				</P>
			</Iltr>
			<TwoImg
				image1="/cat/syneco/syneco_3.png"
				image2="/cat/syneco/syneco_4.png"
			/>
			<TwoImg
				image1="/cat/syneco/syneco_6.png"
				image2="/cat/syneco/syneco_5.png"
			/>
		</Main>
	);
}
export function Timeline() {
	return (
		<Main>
			<Img oneimg="/cat/Timeline.png" />
		</Main>
	);
}
export function Svolta() {
	return (
		<Main>
			<section className="grid-3 ph3 pt3">
				<div>
					<img src="/cat/photo/st/st1.jpg" alt="svolta" />
				</div>

				<div>
					<img src="/cat/photo/st/st2.jpg" alt="svolta" />
				</div>

				<div>
					<img src="/cat/photo/st/st3.jpg" alt="svolta" />
				</div>

				<div>
					<img src="/cat/photo/st/st4.jpg" alt="svolta" />
				</div>

				<div>
					<img src="/cat/photo/st/st5.jpg" alt="svolta" />
				</div>

				<div>
					<img src="/cat/photo/st/st6.jpg" alt="svolta" />
				</div>

				<div>
					<img src="/cat/photo/st/st7.jpg" alt="svolta" />
				</div>

				<div>
					<img src="/cat/photo/st/st8.jpg" alt="svolta" />
				</div>

				<div>
					<img src="/cat/photo/st/st9.jpg" alt="svolta" />
				</div>

				<div>
					<img src="/cat/photo/st/st10.jpg" alt="svolta" />
				</div>

				<div>
					<img src="/cat/photo/st/st11.jpg" alt="svolta" />
				</div>

				<div>
					<img src="/cat/photo/st/st12.jpg" alt="svolta" />
				</div>
			</section>
		</Main>
	);
}
export function Parole() {
	return (
		<Main>
			<Img oneimg="/cat/prigioniere/expo_8.png" className="mw8 center" />

			<Img oneimg="/cat/prigioniere/expo_me.jpg" className="mw8 center" />

			<div className="flex ph3 pt3 flex-column-m">
				<Pic img="/cat/prigioniere/expo_2.jpg" className="pr2 pr0-m pb3-m" />

				<Pic
					img="/cat/prigioniere/expo_3.jpg"
					className="pr2 pl2 pr0-m pl0-m pb3-m"
				/>

				<Pic img="/cat/prigioniere/expo_4.jpg" className="pl2 pl0-m" />
			</div>
			<Img oneimg="/cat/prigioniere/expo_7.jpg" className="mw8 center" />

			<div className="flex ph3 pt3 flex-column-m">
				<Pic img="/cat/prigioniere/expo_4a.jpg" className="pr2 pr0-m pb3-m" />

				<Pic
					img="/cat/prigioniere/expo_5.jpg"
					className="pr2 pl2 pr0-m pl0-m pb3-m"
				/>

				<Pic img="/cat/prigioniere/expo_6.jpg" className="pl2 pl0-m" />
			</div>
		</Main>
	);
}

const Overlay = `{
	background: 'transparent';
	position: 'relative';
	width: '100%';
	height: '650px';
	top: '650px';
	marginTop: '-650px';
	&onClick{pointerEvents:'none';}
}`;

export function Borromeo() {
	return (
		<Main>
			<Img oneimg="/cat/borromeo/borromeo_1.png" />

			<Iltr img="/cat/borromeo/borro_type.png">
				<Head head="Specimens of the font involved for composing the logo and the rest of the Corporate Image." />
				<Tit tit="Didi Didot" />
				<P>
					This showy 1970s take on Didot is credited by various sources to Herb
					Lubalin and Tom Carnase, but an{' '}
					<a
						href="https://fontsinuse.com/uses/9271/didi-typeface-ad"
						target="_blank"
						rel="noopener noreferrer"
						className="link hover-gold b"
					>
						early LSC advertisement
					</a>{' '}
					credits Carnase alone. It’s possible that it was derived directly from{' '}
					<a
						href="https://fontsinuse.com/typefaces/31809/cbs-didot"
						rel="noopener noreferrer"
						className="link hover-gold b"
					>
						CBS Didot.
					</a>
					<Br />
					<Br />
					No official digital version is available, therefore for the purpose of the
					project the entire typeface has been redesigned from scratch based on the
					original drawings, and it's not commercially available.
				</P>
			</Iltr>
			<div className="ph3 mw9 center" style={{ Overlay }}>
				<iframe
					title="map"
					src="https://www.google.com/maps/embed?pb=!4v1593527146194!6m8!1m7!1soRCLTqKyBGT0y6ozxy-H2Q!2m2!1d45.46314368044688!2d9.182473936322225!3f94.38994941469211!4f1.7059391248629936!5f0.7820865974627469"
					width="100%"
					height="650"
					frameborder="0"
					style={{ border: '0' }}
					allowfullscreen=""
					aria-hidden="false"
					tabindex="0"
				></iframe>
			</div>
		</Main>
	);
}

export function Arte() {
	return (
		<Main>
			<Img oneimg="/cat/corte/posters/poster.jpg" className="mw68 center" />

			<Img oneimg="/cat/corte/posters/flyer.jpg" />

			<Img oneimg="/cat/corte/posters/banner.jpg" />
		</Main>
	);
}
export function Corte() {
	return (
		<Main>
			<Img oneimg="/cat/corte/corte_1.png" />

			<Iltr img="/cat/corte/corte_type.png">
				<Head head="Specimens of the font involved for composing the logo and the rest of the Corporate Image." />
				<Tit tit="Gill Sans" />
				<P>
					Gill Sans was designed by Eric Gill: a versatile, brilliant, and
					prolifically successful designer of the early part of the last century. One
					of the main reasons for the enduring success of his namesake design is that
					it is based on Roman character shapes and proportions, making it unlike
					virtually any other sans serif out there. Gill also worked his own warmth
					and humanity into his design, resulting in a typeface in which each weight
					retains a distinct personality of its own.
				</P>
				<Tit tit="Our Bodoni" />
				<P>
					Commissioned by Bert Di Pamphilis of WTC and designed by Tom Carnase under
					the direction of Massimo Vignelli. The goal of this 1989 Bodoni revival was
					to match the proportions of Helvetica.
				</P>
			</Iltr>
			<Img oneimg="/cat/corte/corte_3.png" />

			<Img oneimg="/cat/corte/corte_4.png" />

			<Img oneimg="/cat/corte/corte_2.png" />
		</Main>
	);
}
export function Expo() {
	return (
		<Main>
			<Img oneimg="/cat/expo/expo_1.png" />

			<Img oneimg="/cat/expo/expo_2.jpg" />

			<Img oneimg="/cat/expo/expo_3.jpg" />

			<Img oneimg="/cat/expo/expo_4.jpg" />
		</Main>
	);
}
export function Migrants() {
	return (
		<Main>
			<Img oneimg="/cat/migrants/migrants_1.png" />

			<Iltr img="/cat/migrants/migrants_2.png" />

			<Img oneimg="/cat/migrants/migrants_3.png" />

			<Img oneimg="/cat/migrants/migrants_4.png" />
		</Main>
	);
}

export function Numeriprimi() {
	return (
		<Main>
			<Img oneimg="/cat/numeriprimi/primi_1.png" className="mw8 mw100-m center" />

			<Iltr img="/cat/numeriprimi/primi_4.png">
				<Head head="Specimens of the font involved for composing the Book." />
				<Tit tit="Our Headline" />
				<P>
					Originally drawn by Walter Haettenschweiler in 1954, derived from an
					assignment by Ernst Keller at Kunstgewerbeschule Zürich, and made as an
					improvement over Commercial-Grotesk (Haas, 1940).
					<Br />
					<Br />
					No lowercase.
					<Br />
					<Br />
					<a
						href="http://www.swisstypedesign.ch/schriftfamilie/111/"
						rel="noopener noreferrer"
						target="_blank"
						className="link hover-gold b"
					>
						Swiss Type Design
					</a>{' '}
					Included in Lettera vol. 1, an alphabet source book edited by Alex Stocker
					and Armin Haab. Also known simply as Schmalfette (“Bold Condensed”).
					<Br />
					<Br />
					No official digital version is available, therefore for the purpose of the
					project the entire typeface has been redesigned from scratch based on the
					original drawings, and it's not commercially available.
				</P>
			</Iltr>
			<Par>
				<Sec title="Layout" />
				<ParImg
					oneimg="/cat/numeriprimi/primi_3.png"
					className="ba b--light-silver"
				/>

				<ParImg oneimg="/cat/numeriprimi/primi_cover.png" />
			</Par>
			<Img oneimg="/cat/numeriprimi/primi_6.png" />

			<Img oneimg="/cat/numeriprimi/primi_5.png" />
		</Main>
	);
}

export function Castiglioni() {
	return (
		<Main>
			<Par>
				<Sec title="ACF" />
				The Achille Castiglioni Foundation was set up in 2012 at the initiative of
				Achille’s heirs. It sets out to foster the work carried out in the studio
				museum located on Piazza Castello 27, evidence of the cultural, artistic and
				professional work of Achille Castiglioni. The Foundation is in charge of
				managing and using preserve, communicate and exhibit, objects related to the
				work carried dissemination activities and organises cally, its facilities
				are meant to effectively talents.
			</Par>
			<Img oneimg="/cat/castiglioni/castiglioni_1.png" />

			<Img oneimg="/cat/castiglioni/castiglioni_2.png" />

			<Img oneimg="/cat/castiglioni/castiglioni_3.png" />

			<Img oneimg="/cat/castiglioni/castiglioni_4.png" />

			<Img oneimg="/cat/castiglioni/castiglioni_5.png" />
		</Main>
	);
}

export function Rankin() {
	return (
		<Main>
			<Img oneimg="/cat/rankin/rankin_1.png" className="mw8 center mb4 mb0-m" />

			<Iltr img="/cat/rankin/rankin_2.png">
				<Head head="Specimens of the font involved for composing the logo and the rest of the Corporate Image." />
				<Tit tit="Our Bodoni" />
				<P>
					Commissioned by Bert Di Pamphilis of WTC and designed by Tom Carnase under
					the direction of Massimo Vignelli. The goal of this 1989 Bodoni revival was
					to match the proportions of Neue Haas Grotesk.
				</P>
			</Iltr>
			<Par>
				<Sec title="Color palette" />
			</Par>
			<Img oneimg="/cat/rankin/rankin_3.png" />

			<Img oneimg="/cat/rankin/rankin_4.png" className="mt6" />
		</Main>
	);
}
export function Fearless() {
	return (
		<Main>
			<section className="mw8 center">
				<Img oneimg="/cat/fearless/fearless_1.png" />

				<Img oneimg="/cat/fearless/fearless_5.png" />

				<Img oneimg="/cat/fearless/fearless_2.png" />

				<Img oneimg="/cat/fearless/fearless_3.png" />

				<Img oneimg="/cat/fearless/fearless_4.png" />
			</section>
		</Main>
	);
}

export function ManinP() {
	return (
		<Main>
			<div className="gridp mh3 mt3">
				<img src="/cat/manin/capa.png" alt="poster" />

				<img src="/cat/manin/ciuha.png" alt="poster" />

				<img src="/cat/manin/tiepolo.png" alt="poster" />

				<img src="/cat/manin/munch.png" alt="poster" />
			</div>

			<Img oneimg="/cat/manin/manin_7.png" className="mb2" />
			<TwoImg image1="/cat/manin/manin_8.png" image2="/cat/manin/manin_9.png" />
		</Main>
	);
}

export function Saf() {
	return (
		<Main>
			<Img oneimg="/cat/saf/saf_1.png" />

			<Iltr img="/cat/saf/saf_2.png">
				<Head head="Specimens of the font involved for composing the logo and the rest of the Corporate Image." />
				<Tit tit="Akzidenz Grotesk" />
				<P>
					First issued by Berthold in 1898 as Accidenz-Grotesk. Many loosely related
					styles from various sources were incorporated into the family. Further
					extended and homogenized by G.G. Lange from the late 1950s on. Lange
					regards{' '}
					<a
						href="https://www.bertholdtypes.com/font/royal-grotesk/proplus/"
						rel="noopener noreferrer"
						target="_blank"
						className="link hover-gold b"
					>
						Royal-Grotesk
					</a>{' '}
					the key source and credits it to Ferdinand Theinhardt, but that is
					disputed, see Eckehart Schumacher-Gebler’s article in{' '}
					<a
						href="http://www.tinograss.de/albums/schriftgestalten/"
						target="_blank"
						rel="noopener noreferrer"
						className="link hover-gold b"
					>
						Tino Graß: Schriftgestalten
					</a>{' '}
					and{' '}
					<a
						href="http://kupferschrift.de/cms/2012/04/ag/"
						target="_blank"
						rel="noopener noreferrer"
						className="link hover-gold b"
					>
						Indra Kupferschmid’s blog post
					</a>
					. Distributed in the US and UK as
					<a
						href="https://books.google.it/books?id=AHq-uK6F-PUC&pg=PA10&lpg=PA10&dq=standard+akzidenz-grotesk&source=bl&ots=bh1Bcz8Dbh&sig=QyUqvslwf-PYb_B4upWJKxOTmRk&hl=en&sa=X&ei=s67EUqCXKcP4oATmlYCoDg&redir_esc=y#v=onepage&q=standard%20akzidenz-grotesk&f=false"
						rel="noopener noreferrer"
						className="link hover-gold b"
					>
						Standard
					</a>{' '}
					and commonly used in the 1950s–60s.
				</P>
			</Iltr>
			<Img oneimg="/cat/saf/saf_5.png" className="w-50 w-100-m center" />

			<Img oneimg="/cat/saf/saf_3.png" className="pa0 ph3 pt3" />

			<Img oneimg="/cat/saf/saf_4.png" />
		</Main>
	);
}

export function Manin() {
	return (
		<Main>
			<Img oneimg="/cat/manin/manin_1.png" />

			<Iltr img="/cat/manin/manin_2.png">
				<Head head="Specimens of the font involved for composing the logo and the rest of the Corporate Image." />
				<Tit tit="Neue Haas Grotesk" />
				<P>
					The first weights of Neue Haas Grotesk were designed in 1957-1958 by Max
					Miedinger for the Haas’sche Schriftgiesserei in Switzerland, with art
					direction by the company’s principal, Eduard Hoffmann. Neue Haas Grotesk
					was to be the answer to the British and German grotesques that had become
					hugely popular thanks to the success of functionalist Swiss typography. The
					typeface was soon revised and released as Helvetica by Linotype AG.
				</P>
				<Tit tit="Our Bodoni" />
				<P>
					Commissioned by Bert Di Pamphilis of WTC and designed by Tom Carnase under
					the direction of Massimo Vignelli. The goal of this 1989 Bodoni revival was
					to match the proportions of Neue Haas Grotesk.
				</P>
			</Iltr>
			<Img oneimg="/cat/manin/manin_3.png" />

			<Img oneimg="/cat/manin/manin_5.png" />
		</Main>
	);
}
export function Dp() {
	return (
		<Main>
			<Img oneimg="/cat/dp/dp_1.png" />

			<Iltr img="/cat/dp/dp_2.png">
				<Head head="Specimens of the font involved for composing the logo and the rest of the Corporate Image." />
				<Tit tit="Gill Sans" />
				<P>
					Gill Sans is a humanistic sans serif family that, while is considered by
					many to be quintessentially British in tone and concept, has been used in
					virtually every country and in nearly every application imaginable. Gill
					Sans has reached this level of near-ubiquity for one simple—and very
					good—reason: it is an exceptionally distinctive design with a potential
					range of use that is almost limitless.
					<Br />
					Gill Sans was designed by Eric Gill: a versatile, brilliant, and
					prolifically successful designer of the early part of the last century. One
					of the main reasons for the enduring success of his namesake design is that
					it is based on Roman character shapes and proportions, making it unlike
					virtually any other sans serif out there. Gill also worked his own warmth
					and humanity into his design, resulting in a typeface in which each weight
					retains a distinct personality of its own.
				</P>
				<Tit tit="Century Expanded" />
				<P>
					Theodore Low DeVinne, publisher of Century Magazine, commissioned Linn Boyd
					Benton to design a new typeface for the magazine. The result, in 1894, was
					a roman type called Century Roman; a large x-height gave Century Roman the
					appearance of being condensed. Benton’s son, Morris Fuller Benton, redrew
					Century Roman for American Type Founders in 1900 so it would meet the
					standards of the Typographical Union. Benton’s Century Expanded is only
					slightly wider, but was advertised by DeVinne as allowing for an expansion
					in the number of characters that could fit in a line, “the expansion is
					upward, enabling one to get much matter in a small space.” Century Expanded
					is useful for text settings of magazines, books, newsletters, and
					brochures.
				</P>
			</Iltr>
			<Img oneimg="/cat/dp/dp_4.png" />

			<Img oneimg="/cat/dp/dp_3.png" />
		</Main>
	);
}

export function Richmond() {
	return (
		<Main>
			<Img oneimg="/cat/richmond.png" className="w-50 w-100-m center" />
		</Main>
	);
}
export function Hospital() {
	return (
		<Main>
			<Img oneimg="/cat/stblogo/stb_1.png" />

			<Iltr img="/cat/stblogo/stb_2.png">
				<Head head="Specimens of the font involved for composing the logo and the rest of the Corporate Image." />
				<Tit tit="Neue Haas Grotesk" />
				<P>
					The first weights of Neue Haas Grotesk were designed in 1957-1958 by Max
					Miedinger for the Haas’sche Schriftgiesserei in Switzerland, with art
					direction by the company’s principal, Eduard Hoffmann. Neue Haas Grotesk
					was to be the answer to the British and German grotesques that had become
					hugely popular thanks to the success of functionalist Swiss typography. The
					typeface was soon revised and released as Helvetica by Linotype AG.
				</P>
				<Tit tit="ITC Garamond" />
				<P>
					Drawn by Tony Stan, ITC Garamond was first released in 1975 in Book and
					Ultra weights only. These were intended as display faces to complement
					existing text designs from other foundries. (In fact, many of ITC’s
					interpretations of traditional typefaces began as display counterparts for
					existing text designs.) These first weights of ITC Garamond became so
					popular, however, that ITC released the Light and Bold weights and a suite
					of condensed faces in 1977. Now, the complete ITC Garamond family features
					sixteen members: four weights of roman and italic in normal width and four
					weights of roman and italic in companion condensed versions. The family
					resemblance is there, but ITC Garamond’s unique provenance gives it an
					unmistakable, one-of-a-kind appeal.
				</P>
			</Iltr>
			<Img oneimg="/cat/stblogo/stb_3.png" />

			<Img oneimg="/cat/stblogo/stb_4.png" />
		</Main>
	);
}

export function A() {
	return (
		<Main>
			<Img oneimg="/cat/A.png" className="w-60 w-100-l w-100-t w-100-m center" />
		</Main>
	);
}
export function Abstract() {
	return (
		<Main>
			<Img
				oneimg="/cat/minimal.png"
				className="w-60 w-100-l w-100-t w-100-m center"
			/>
		</Main>
	);
}

export function Craf() {
	return (
		<Main>
			<Img oneimg="/cat/craf/craf_1.png" />

			<Par>
				This logo and Corporate Image have been developed during a workshop with
				Armando Milani giving some fundamental theoric lessons, and his brother
				Maurizio focusing on the production compartment. The very limited group of
				people granted me the possibility to design it four-handedly in a very close
				collaboration with him. Funnily enough, this workshop should have been
				participated by Massimo Vignelli too, but for personal reason had to
				decline.
				<Br />
				Many people feel ashamed showing their first projects. I could dig more into
				the archives and find lots of logos from the 2006-2008 period, but they
				wouldn't be as meaningful as this. And the reason is quite clear. Before
				meeting with Armando and Maurizio, I had a very fond appreciacion of
				everything design-related, but I was skeptical about turning into the core
				business of my profession. So this, rather than the first project at all, is
				the first project I designed with DisciplineDesign in mind, and a remainder
				of a spectacular encounter, where my career started to shape.
			</Par>
			<Iltr img="/cat/craf/craf_fonts.png">
				<Head head="Specimens of the font involved for composing the logo and the rest of the Corporate Image." />
				<Tit tit="Permanent Headline" />
				<P>
					A bold, highly compressed sans-serif typeface in the neo-grotesque style.
					It was designed by Karlgeorg Hoefer for the type foundry Ludwig & Mayer in
					Frankfurt am Main. It was released from 1964 and later issued by a range of
					companies in phototypesetting and digital versions.
					<Rf
						link="http://www.klingspor-museum.de/KlingsporKuenstler/Schriftdesigner/Hoefer/KGHoefer.pdf"
						rf="1"
					/>
				</P>
				<Tit tit="Rotis Sans" />
				<P>
					A typeface developed in 1988 by Otl Aicher, who explores an attempt at
					maximum legibility through a highly unified yet varied typeface family that
					ranges from full serif, glyphic, and sans-serif. The four basic Rotis
					variants are: Rotis Serif, Rotis Semi-Serif, Rotis Semi-Sans, Rotis-Sans.
					In this case we used Rotis semi-sans (semi-grotesque) — with zero serifs
					but with stroke width variation
				</P>
			</Iltr>
			<Img oneimg="/cat/craf/craf_2.png" />

			<TwoImg image1="/cat/craf/craf_4.png" image2="/cat/craf/craf_5.png" />
			<Img oneimg="/cat/craf/craf_7.png" />
		</Main>
	);
}

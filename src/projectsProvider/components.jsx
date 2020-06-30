import React from 'react';
import CN from 'classnames';
import './style.css';

export const Main = ({ children }) => (
	<main style={{ paddingBottom: '3rem' }}>{children}</main>
);
export const Par = ({ className, children }) => (
	<section className="flex justify-center flex-column-l flex-column-t flex-column-m mv3 mh3-m mh4-t mh5-l">
		<section
			className={CN(
				'w-50 w-100-m w-100-l w-100-t f27 f3-m helvetica lh-copy',
				className
			)}
		>
			{children}
		</section>
	</section>
);

export const Sec = ({ title, subtitle }) => (
	<div className="silver helvetica f1 fw7 tracked pt4 pb3 lh-title">
		{title}
		<br></br>
		{subtitle}
	</div>
);

export const Sub = ({ title }) => (
	<div className="silver  helvetica f25 fw6  pt4 pb3 lh-title">{title}</div>
);

export const ParImg = ({ oneimg, className }) => (
	<div className={CN('mv3', className)}>
		<img src={oneimg} alt="img"></img>
	</div>
);

export const Img = ({ oneimg, className }) => (
	<div className={CN('ph3 pt3', className)}>
		<img src={oneimg} alt="img"></img>
	</div>
);

export const Pic = ({ img, className, imgClass }) => (
	<div className={CN(className)}>
		<img src={img} alt="img" className={CN(imgClass)}></img>
	</div>
);

export const TwoImg = ({ image1, image2, className, classNamee }) => (
	<div className="flex-row flex-column-m flex justify-center ph35 overflow-visible ph3-m">
		<div className="pr0-m pb3-m w-100-m pr2 w-50">
			<img src={image1} alt="img"></img>
		</div>
		<div className="pl2 pl0-m w-100-m w-50">
			<img src={image2} alt="img"></img>
		</div>
	</div>
);

export const FourImg = ({ image1, image2, image3, image4 }) => (
	<div className="flex-row flex-column-m flex justify-center ph35 pt3 ph3-m">
		<img src={image1} alt="img" className="pr0-m pb3-m w-100-m pr1 w-25"></img>
		<img src={image2} alt="img" className="ph1 ph0-m pb3-m w-100-m w-25"></img>
		<img src={image3} alt="img" className="ph0-m pb3-m w-100-m ph1 w-25"></img>
		<img src={image4} alt="img" className="pl1 pl0-m w-100-m w-25"></img>
	</div>
);

export const Head = ({ head }) => (
	<p className="f4 ph3 pt3 helvetica silver lh-copy">{head}</p>
);
export const Tit = ({ tit }) => (
	<p className="f2 fw5 pa3 helvetica silver lh-title">{tit}</p>
);
export const P = ({ children }) => (
	<p className="f3 ph3 pb3 helvetica silver lh-copy">{children}</p>
);
export const Rf = ({ link, rf }) => (
	<a href={link}>
		<sup>{rf}</sup>
	</a>
);
export const Iltr = ({ img, children }) => (
	<section className="flex justify-around items-start flex-column-m flex-column-t">
		<div className="w-40 w-100-m w-100-t pa3 sticky-top">
			<img src={img} alt="alt" />
		</div>
		<div className="sticky w-40 w-100-t w-100-m">
			<div>{children}</div>
		</div>
	</section>
);

export const Br = () => <br></br>;

export const Collab = ({ href, collab }) => (
	<div className="f4 fw5 ph3 pv2 helvetica bg-orange white lh-copy">
		This project was developed in close collaboration with:{' '}
		<a
			href={href}
			target="_blank"
			rel="noopener noreferrer"
			className="link fw7 hover-navy"
		>
			{collab}
		</a>
	</div>
);

import React, { useEffect } from 'react';
import CN from 'classnames';
import { NavLink } from 'react-router-dom';

import { useExpanded } from '../../hooks/useExpanded';
import { projectTypes } from '../../projectsProvider';

import './style.css';

export const ProjectFilters = (props) => {
	const [expanded, toggleExpanded] = useExpanded('#controls-container .toggle');
	const filterLabel = props.type ? projectTypes[props.type] : 'All';
	useEffect(() => {
		window.sessionStorage.setItem('currentType', props.type || '');
	});
	return (
		<>
			<div id="controls-container">
				<div className="toggle f4" onClick={toggleExpanded}>
					Currently showing: <b>{filterLabel}</b> projects
				</div>
				<div className={CN('wrapper f5', { expanded })}>
					<section id="controls">
						<ul>
							<li>
								<NavLink exact to="/work">
									All
								</NavLink>
							</li>
							<li>
								<NavLink to="/work/ux">UX/UI</NavLink>
							</li>
							<li>
								<NavLink to="/work/photography">Photography</NavLink>
							</li>
							<li>
								<NavLink to="/work/wayfinding">Wayfinding</NavLink>
							</li>
							<li>
								<NavLink to="/work/corporate">Corporate</NavLink>
							</li>
						</ul>
						<ul>
							<li>
								<NavLink to="/work/poster">Posters</NavLink>
							</li>
							<li>
								<NavLink to="/work/print">Print</NavLink>
							</li>
							<li>
								<NavLink to="/work/video">Video</NavLink>
							</li>
							<li>
								<NavLink to="/work/exhibit">Exhibit</NavLink>
							</li>
							<li>
								<NavLink to="/work/event">Events</NavLink>
							</li>
						</ul>
					</section>
				</div>
			</div>
			<div id="controls-container-clearfix" />
		</>
	);
};

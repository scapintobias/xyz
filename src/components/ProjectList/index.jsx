import React from 'react';
import { Link } from 'react-router-dom';

import { slugify } from '../../utils';
import { getAllProjects, projectTypes } from '../../projectsProvider';

import './style.css';

const projects = getAllProjects();

export const ProjectList = (props) => (
	<ul className="projects-list">
		{projects
			.filter((project) => (props.type ? project.type === props.type : true))
			.map((project, key) => (
				<Link
					key={key}
					to={`/work/${slugify(project.type)}/${project.year}/${slugify(
						project.title
					)}`}
				>
					<li>
						<span className="title">
							<span className="helvetica fw6 f5-m f4">{project.title}</span>
							<br />
							<span className="helvetica f4 f5-m fw3">{project.subtitle}</span>
						</span>
						<span className="type f4 f6-m fw2">{projectTypes[project.type]}</span>
						<span className="year f4 f6-m fw1">{project.year}</span>
					</li>
				</Link>
			))}
	</ul>
);

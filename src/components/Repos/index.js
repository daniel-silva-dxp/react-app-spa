import React from 'react';

const Repos = ({ className, title, repos }) => {
	return (
		<div className={className}>
			<h2>{title}</h2>
			<ul>
				{repos.map((repo) => {
					return (
						<li key={repo.id}>
							<a href={repo.link}>{` - ${repo.name}`}</a>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

Repos.defaultProps = {
	className: ''
};

export default Repos;
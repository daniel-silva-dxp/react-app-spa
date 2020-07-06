import React from 'react';

const Actions = ({ getRepos, getStarreds }) => {
	return (
		<div className="actions">
			<button onClick={getRepos} className="btn btn-medium color-btn">
				Repositórios
			</button>
			<button onClick={getStarreds} className="btn btn-medium color-btn">
				Favoritos
			</button>
		</div>
	);
};

export default Actions;

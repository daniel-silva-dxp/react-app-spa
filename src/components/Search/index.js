import React from 'react';

const Search = ({ handleSearch, isDisabled }) => {
	return (
		<div className="search box-wrapper">
			<input
				type="search"
				placeholder="Digite o nome do usuário do Github"
				onKeyUp={handleSearch}
				disabled={isDisabled}
			/>
		</div>
	);
};

export default Search;
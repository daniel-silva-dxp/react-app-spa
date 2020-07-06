import React from 'react';

import Search from 'components/Search';
import UserInfo from 'components/User-info';
import Actions from 'components/Actions';
import Repos from 'components/Repos';
import Message from 'components/Message'

const Content = ({ userInfo, repos, starred, handleSearch, getRepos, getStarreds, message, isFetching }) => {
    return (
		<div className="app">
			<Search isDisabled={isFetching} handleSearch={handleSearch} />
			<div className="container">
				{isFetching && <div>Carregando...</div>}
				{!!userInfo && <UserInfo userInfo={userInfo} />}
				{!!userInfo && <Actions getRepos={getRepos} getStarreds={getStarreds} />}
				{!!repos.length && <Repos className="repos box-wrapper" title="Repositório:" repos={repos} />}
				{!!starred.length && <Repos className="starred box-wrapper" title="Favoritos:" repos={starred} />}
				{!!!userInfo && <Message>{message}</Message>}
			</div>
		</div>
	);
};

export default Content;
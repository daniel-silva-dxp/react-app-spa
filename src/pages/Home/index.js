import React, { Component } from 'react';
import Content from 'components/Content';

import './style.css';

class Home extends Component {
    constructor() {
		super();
		this.state = {
			userInfo: null,
			repos: [],
			starred: [],
			message: 'nenhum usuário do GitHub pesquisado.',
			isFetching: false
		};
	}
	getGitHubApiUrl(username, type) {
		const internalUser = username ? `/${username}` : '';
		const internalType = type ? `/${type}` : '';
		return `https://api.github.com/users${internalUser}${internalType}`;
	}
	handleSearch(e) {
		const value = e.target.value;
		const keyCode = e.which || e.keyCode;
		const ENTER = 13;

		if (keyCode === ENTER) {
			if (value) {
				this.setState({ isFetching: true });
				fetch(this.getGitHubApiUrl(value))
					.then((data) => data.json())
					.then((data) => {
						this.setState({
							userInfo: {
								username: data.name,
								photo: data.avatar_url,
								login: data.login,
								repos: data.public_repos,
								followers: data.followers,
								following: data.following
							},
							repos: [],
							starred: []
						});
					})
					.finally(() => this.setState({ isFetching: false }));
			} else {
				this.setState({
					userInfo: null,
					repos: [],
					starred: [],
					message: 'insira um nome de usuário do GitHub para pesquisa.'
				});
			}
		}
	}
	getRepos(type) {
		return (e) => {
			const login = this.state.userInfo.login;
			fetch(this.getGitHubApiUrl(login, type)).then((data) => data.json()).then((repo) => {
				this.setState({
					[type]: repo.map((data) => {
						return {
							name: data.name,
							id: data.id,
							link: data.html_url
						};
					})
				});
			});
		};
	}
	render() {
		return (
			<div className="container">
				<Content 
					userInfo={this.state.userInfo}
					repos={this.state.repos}
					starred={this.state.starred}
					isFetching={this.state.isFetching}
					handleSearch={(e) => this.handleSearch(e)}
					getRepos={this.getRepos('repos')}
					getStarreds={this.getRepos('starred')}
					message={this.state.message}
				/>
			</div>
		);
	}
}

export default Home;
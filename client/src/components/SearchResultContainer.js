import React, { Component } from 'react';
import SearchForm from './SearchForm';
import ResultList from './ResultList/ResultList';
import API from '../utils/API';
import CircularIndeterminate from './Loader';

class SearchResultContainer extends Component {
	state = {
		isLoaded: false,
		search: '',
		superheroApi: [],
		results: [],
		stats: [],
	};

	// When this component mounts, search the Giphy API for pictures of kittens
	componentDidMount() {
		this.searchStat('stats');
		this.searchComic('characters');
	}
	//reset state for new search
	resetState = () => {
		this.setState({ loading: false });
		this.setState({ stats: [] });
		this.setState({ results: [] });
	};
	//call match apis and push to stats
	matchNew = () => {
		this.matchStats();
		this.setState({ loading: true });
	};
	//search comicvine for characters
	searchComic = query => {
		API.searchComicVine(query)
			.then(res => {
				this.setState({ results: res.data.results });
			})
			.then(res => {
				this.matchNew();
			})
			.catch(err => console.log(err));
	};
	//search superheroapi for stats
	searchStat = query => {
		API.searchSuperHero(query)
			.then(res => {
				let stat = res.data;
				this.setState({ superheroApi: stat });
			})
			.catch(err => console.log(err));
	};

	// loop through results state and superheroApi match characters and create a stats array in state to hold them
	matchStats = () => {
		const comicRes = this.state.results;
		const superApi = this.state.superheroApi;

		comicRes.forEach(y => {
			const refName = y.name;
			superApi.forEach(x => {
				if (x.name === refName) {
					this.state.stats.push({
						...y,
						appearance: x.appearance,
						stats: x.powerstats,
					});
				}
			});
		});
	};
	//search Comic vine for character by user entered name
	searchName = query => {
		this.resetState();
		API.searchByName(query)
			.then(res => {
				this.setState({ results: res.data.results });
				this.matchNew();
			})
			.catch(err => console.log(err));
	};

	handleInputChange = event => {
		const name = event.target.name;
		const value = event.target.value;
		this.setState({
			[name]: value,
		});
	};

	// When the form is submitted, search the Giphy API for `this.state.search`
	handleFormSubmit = event => {
		event.preventDefault();
		this.searchName(this.state.search);
	};

	render() {
		const { isLoaded, stats } = this.state;
		return (
			<div>
				<SearchForm
					search={this.state.search}
					handleFormSubmit={this.handleFormSubmit}
					handleInputChange={this.handleInputChange}
				/>
				{isLoaded ? (
					<CircularIndeterminate />
				) : (
					<ResultList
						results={this.state.results}
						stats={this.state.superheroApi}
					/>
				)}
			</div>
		);
	}
}

export default SearchResultContainer;

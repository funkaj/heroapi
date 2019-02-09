import React, { Component } from 'react';
import SearchForm from './SearchForm';
import ResultList from './ResultList/ResultList';
import API from '../utils/API';
import CircularIndeterminate from './Loader';
import Bio from './Bio/Bio';

class SearchResultContainer extends Component {
	state = {
		isLoaded: false,
		isBio: false,
		search: '',
		superheroApi: [],
		results: [],
		bio: [],
	};
	loading = () => {
		this.setState({ isLoaded: true });
	};
	// When this component mounts, search the Giphy API for pictures of kittens
	componentDidMount() {
		this.searchStat('stats');
		this.searchComic('characters');
	}
	//reset state for new search
	resetState = () => {
		this.setState({ isLoading: false });
		this.setState({ results: [] });
	};
	//call match apis and push to stats
	matchNew = () => {
		this.matchStats();
		this.setState({ isLoaded: true });
	};
	//search comicvine for characters
	searchComic = query => {
		API.searchComicVine(query)
			.then(res => {
				this.setState({ results: res.data.results });
			})
			.then(res => {
				this.matchNew(this.loading);
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
	matchStats = callback => {
		const comicRes = this.state.results;
		const superApi = this.state.superheroApi;

		comicRes.forEach(y => {
			const refName = y.name;
			superApi.forEach(x => {
				if (x.name === refName) {
					Object.assign(y, {
						slug: x.slug,
						combat: x.powerstats.combat,
						intelligence: x.powerstats.intelligence,
						durability: x.powerstats.durability,
						power: x.powerstats.power,
						speed: x.powerstats.speed,
						strength: x.powerstats.strength,
						work: x.work.occupation,
						base: x.work.base,
						groups: x.connections.groupAffiliation,
						family: x.connections.relatives,
						fullname: x.biography.fullName,
						birth: x.biography.placeOfBirth,
					});
				}
			});
		});
		if (callback) callback();
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

	goToBio = bio => {
		this.setState({ bio: bio });
		console.log(bio);
		this.setState({ isBio: true });
	};

	goToResult = e => {
		console.log('eeeeeeeeeeeeeeeee');
		this.setState({ isBio: false });
	};

	render() {
		const { isLoaded, isBio } = this.state;

		return (
			<div>
				<SearchForm
					search={this.state.search}
					handleFormSubmit={this.handleFormSubmit}
					handleInputChange={this.handleInputChange}
				/>
				{isBio ? (
					<Bio
						bio={this.state.bio}
						isbio={this.state.isBio}
						goToResult={this.goToResult}
					/>
				) : isLoaded ? (
					<ResultList results={this.state.results} goToBio={this.goToBio} />
				) : (
					<CircularIndeterminate />
				)}
			</div>
		);
	}
}

export default SearchResultContainer;

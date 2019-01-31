import React, { Component } from "react";
import SearchForm from "./SearchForm";
import ResultList from "./ResultList";
import API from "../utils/API";

class SearchResultContainer extends Component {
  state = {
	search: "",
	stats: [],
	// stats: [{
	// 	combat: '',
	// 	durability: '',
	// 	intelligence: '',
	// 	power: '',
	// 	speed: '',
	// 	strength: ''
	// }],
	results: [],
  };

  // When this component mounts, search the Giphy API for pictures of kittens
  componentDidMount() {
	this.searchStat('stats');
	this.searchComic("characters");
	
  }
//search comicvine for bios
  searchComic = query => {
    API.searchComicVine(query)
	.then(res => {
		 console.log( res.data.results)
		this.setState({ results: res.data.results })	
		
	})
	.catch(err => console.log(err));
  };
//search superheroapi for stats
  searchStat = query => {

	  API.searchSuperHero(query)
	.then(res => {
		// let stat = res.data
		
		this.setState({ 
			stats: res.data
			// stats: {
				// 	combat: stat.combat,
				// 	durability: stat.durability,
				// 	intelligence: stat.intelligence,
				// 	power: stat.power,
				// 	speed: stat.speed,
				// 	strength: stat.strength
				// }
			})
			console.log(this.state.stats)
		})
		.catch(err => console.log(err));
  };

  searchName = query => {
	  this.setState({ results: []})
    API.searchByName(query)
	.then(res => {
		 console.log(res.data.data.results)
		this.setState({ results: res.data.data.results})
	})
    .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, search the Giphy API for `this.state.search`
  handleFormSubmit = event => {
	event.preventDefault();
	
    this.searchName(this.state.search);
  };

  render() {
    return (
      <div>
        <SearchForm
          search={this.state.search}
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
        />
        <ResultList results={this.state.results} stats={this.state.stats} />
      </div>
    );
  }
}

export default SearchResultContainer;

import React, { Component } from "react";
import SearchForm from "./SearchForm";
import ResultList from "./ResultList";
import API from "../utils/API";
// import AuthService from './AuthService';
import withAuth from "./withAuth";



class SearchResultContainer extends Component {
  state = {
    search: "",
	  results: [],
  };

  // When this component mounts, search the Giphy API for pictures of kittens
  componentDidMount() {
    this.searchGiphy("characters");
  }

  searchGiphy = query => {
    API.search(query)
    .then(res => {
      this.setState({ results: res.data.results })	
      
      console.log(this.state.results)
    })
    .catch(err => console.log(err));
  };

  searchComic = query => {
	  this.setState({ results: []})
	  API.searchComicVine(query)
	.then(res => {
		console.log(res.data.results)
		this.setState({ results: res.data.results })
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
        <ResultList results={this.state.results} />
      </div>
    );
  }
}

export default withAuth(SearchResultContainer);

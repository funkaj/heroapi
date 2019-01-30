import axios from "axios";

const pubAPI = 'a10c22d5644ec350180e248d8943669f'
const comAPI = process.env.REACT_APP_COMIC_VINE_API_KEY


// process.env.REACT_APP_MARVEL_PUBLIC_API_KEY
// Export an object with a "search" method that searches the Marvel API for the passed query
export default {
	// Gets a single user by id
	getUser: (id) => {
		return axios.get(`/api/user/${id}`);
	  },
	// sign up a user to our service
	signUpUser: (username, email, password) => {
		return axios.post('api/signup', {username: username, email: email, password: password});
	  },

	search: (query) => {
		let url = `https://comicvine.gamespot.com/api/search/?api_key=${comAPI}&format=json&resources=character&query=${query}`
		// let marvelUrl = `http://gateway.marvel.com/v1/public/${query}?limit=10&apikey=${pubAPI}`
		return axios.get(`/api/hero/`)
	},
	
	searchByName: function(query) {
		let url =`https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${query}&orderBy=-name&limit=10&apikey=${pubAPI}`
		return axios.get(url)
	},
	
	searchComicVine: function(query) {
    let url = `https://comicvine.gamespot.com/api/search/?api_key=${comAPI}&format=json&resources=character&query=${query}`
    
    return axios.get(url)
   
  }
};

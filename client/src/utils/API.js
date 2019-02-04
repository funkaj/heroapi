import axios from "axios";

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
	// rout to get random comic vine characters on page load
	searchComicVine: (query) => {
		return axios.get(`/api/hero/`)
	},
	// rout to get characters from comic vine by name
	searchByName: function(query) {
		return axios.get(`api/hero/${query}`, {params: {query: query}})
	},
	// rout to get stats from superhero api
	searchSuperHero: (query) => {
		return axios.get('/api/hero/stats')
	},
	
};

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

	searchComicVine: (query) => {
		return axios.get(`/api/hero/`)
	},
	
	searchSuperHero: (query) => {
		return axios.get('/api/hero/stats')
	},

	// searchByName: function(query) {
	// 	return axios.get(url)
	// },
	
};

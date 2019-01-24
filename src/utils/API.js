import axios from "axios";


const pubAPI = ''

// Export an object with a "search" method that searches the Giphy API for the passed query
export default {
  search: function(query) {
    const url = `http://gateway.marvel.com/v1/public/${query}?limit=10&apikey=${pubAPI}`
    //const url = `${BASEURL}${APIKEY}${query}`
    
   return axios.get(url)
  },

  searchByName: function(query) {
	const newUrl =`https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${query}&orderBy=-name&limit=10&apikey=${pubAPI}`
    
   return axios.get(newUrl)
  }
};

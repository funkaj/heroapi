import axios from "axios";


const pubAPI = ''

// Export an object with a "search" method that searches the Giphy API for the passed query
export default {
  search: function(query) {
    const url = `http://gateway.marvel.com/v1/public/${query}?limit=10&apikey=${pubAPI}`
    //const url = `${BASEURL}${APIKEY}${query}`
    console.log(url)
   return axios.get(url)
  }
};

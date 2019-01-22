import axios from "axios";

const BASEURL = "https://superheroapi.com/api/";
const APIKEY = "10158796361293636/";

// Export an object with a "search" method that searches the Giphy API for the passed query
export default {
  search: function(query) {

//     axios.get(`${BASEURL}${APIKEY}${query}`).then(
//   function(response) {
//     // Then we print out the imdbRating
//     console.log(response);
//   }
// );
    return axios.get(`${BASEURL}${APIKEY}${query}`);
  }
};

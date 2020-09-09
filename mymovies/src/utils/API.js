import axios from "axios";
const BASEURL = "https://www.omdbapi.com/?t=";
const APIKEY = "&apikey=523d0e39";

export default {
  search: function(query) {
    return axios.get(BASEURL + query + APIKEY );
  }
};


import axios from 'axios';
const URL = 'https://www.reddit.com/r/reactnative.json';

class ApiService {
  static async fetchPosts() {
    return axios
      .get(URL)
      .then(response => response.data.data.children)
      .catch(error => error);
  }
}

export default ApiService;

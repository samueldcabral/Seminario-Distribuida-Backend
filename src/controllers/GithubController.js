const axios = require('axios');
const BASE_URL = 'https://api.github.com/users';

const GithubController = {
  get: async (req,res) => {
    const { user } = req.query;
  
    const githubResponse = await axios.get(`${BASE_URL}/${user}`);
    const { id, avatar_url, html_url, bio, public_repos,created_at } = githubResponse.data;
    const githubUser = {
      id,
      avatar_url,
      html_url,
      bio,
      public_repos,
      created_at
    }
    res.json(githubUser);
  }
}

module.exports = GithubController;
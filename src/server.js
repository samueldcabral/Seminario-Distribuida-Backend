require('dotenv').config();
const express = require('express');
const cors = require("cors");
const PORT = process.env.PORT || '3003'
const app = express();

const GithubController = require("./controllers/GithubController");
const UserController = require("./controllers/UserController");

app.use(cors());
app.use(express.json());
app.get('/github-info', GithubController.get);
app.get('/places', UserController.getPlaces)
app.post('/places', UserController.storePlaces)

app.listen(PORT, () => {
  console.log('Server running on localhost:' + PORT);
});
const client = require('./client');

function getStargazers(owner,name){
  return client.activity.getStargazersForRepo({owner: owner,repo: name});
}
module.exports = getStargazers;

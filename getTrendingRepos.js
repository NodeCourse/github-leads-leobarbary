const client = require('./client');
const getSearchQuery=require('./getSearchQuery')
function getTrendingRepos(languages,created){
  return client.search.repos({q: getSearchQuery(languages,created),sort: 'stars',order: 'desc'});
}
module.exports = getTrendingRepos;

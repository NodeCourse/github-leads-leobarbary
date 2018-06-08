const program = require('commander');
const flatten = require('flatten-array')
const client = require ('./client');
const getTrendingRepos = require('./getTrendingRepos');
const getStargazers = require('./getStargazers');
const createCSV = require('./createCSV');
// const getStargazers = require('./getStargazers');
// const createCSV = require('./createCSV');
function toList(str){
  return str.split(',');
}
program
  .version('0.1.0')
  .option('-t, --token [token]','GitHub token')
  .option('-o, --output [path]','Path to file extract')
  .option('-l, --languages [languages]','Languages to seach')
  .parse(process.argv)


//console.log(client.activity.getStarredRepos());
if(program.token){
  client.authenticate({type:'token',token: program.token});
  //  console.log(client.search.repos());
}
if(program.languages){
  program.languages=toList(program.languages);
}
//
const created = new Date();
created.setDate(created.getDate()-2);

getTrendingRepos(program.languages, created)
.then(function(repos){
  return Promise.all(
    repos.data.items.map(function(i){
      let owner = i.owner.login;
      let name = i.name;
      return getStargazers(owner,name).
      then(function(reposStargazers){
        users=[];
        reposStargazers.data.forEach(function(u){
          let user={
            login: u.user.login,
            id: u.user.id,
            node_id: u.user.node_id,
            avatar_url: u.user.avatar_url,
            url:u.user.html_url
          };
          users.push(user);
        });
        return users;
      })
    })
  );
})
.then(function(users){
  let usersflat = flatten(users);
  createCSV(usersflat,program.output);
});



//return Promise.all(repos);

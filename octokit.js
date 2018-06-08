const octokit = require('@octokit/rest')()
const fs = require('fs');

var gitToken = "f04eee9e2ece3eec05687acc6f8f708fc1f36fe1"

octokit.authenticate({
    type: 'token',
    token: gitToken
})

const result = await octokit.search.repos({created:<2011-01-01})

var targetProjectRoot = "C:/Users/Krynet/Desktop/NodeJs/github-leads-leobarbary/test"

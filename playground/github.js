require('dotenv').config();
const fs = require('fs');

const fetch = require('node-fetch');

const USERNAME = 'AjanShrestha';
const PASSWORD = process.env.PASSWORD;
const authString = `${USERNAME}:${PASSWORD}`;
const auth = 'Basic ' + Buffer.from(authString).toString('base64');
const CATEGORIES = {
  projects: 'project',
  learnings: 'learning-by-doing',
  forked: 'forked',
};

const options = {
  method: 'get',
  headers: {
    'user-agent': 'AjanShrestha',
    Accept: 'application/json',
  },
};

const getOwned = repo => !repo.archived && !repo.fork;
const getForked = repo => repo.fork && !repo.archived;

const fetchTopics = repoName => {
  const topicUrl = `https://api.github.com/repos/${USERNAME}/${repoName}/topics`;
  // console.log(topicUrl);
  options.headers.Accept = 'application/vnd.github.mercy-preview+json';
  options.headers.Authorization = auth;
  return fetch(topicUrl, options);
};

const getAllRepos = async () => {
  let allRepos = [];
  let pageNum = 1;
  while (pageNum != 0) {
    await fetch(
      `https://api.github.com/users/${USERNAME}/repos?type=all&sort=updated&page=${pageNum}`,
      options
    )
      .then(res => res.json())
      .then(jsonRes => {
        console.log(jsonRes.length);
        if (jsonRes.length) {
          allRepos = [...allRepos, ...jsonRes];
          pageNum++;
        } else {
          pageNum = 0;
        }
      })
      .catch(err => {
        console.error(err);
        pageNum = 0;
      });
  }
  return allRepos;
};

const writeAllRepos = repos =>
  fs.writeFileSync('playground/allRepos.json', JSON.stringify(repos));
const writeAllTopics = repoTopics =>
  fs.writeFileSync('playground/allTopics.json', JSON.stringify(repoTopics));

(async () => {
  console.group('repos');
  let allRepos = await getAllRepos();
  writeAllRepos(allRepos);
  const repos = JSON.parse(
    fs.readFileSync('playground/allRepos.json', 'utf-8')
  );
  const forkedRepos = repos.filter(getForked);
  const ownedRepos = repos.filter(getOwned);
  const repoTopics = {};
  for (let repo of ownedRepos) {
    await fetchTopics(repo.name)
      .then(res => res.json())
      .then(topic => {
        repoTopics[repo.name] = topic.names;
      })
      .catch(console.error);
  }
  writeAllTopics(repoTopics);
  console.log(forkedRepos.length);
  console.log(ownedRepos.length);
  console.groupEnd('repos');
  // created_at, description, language
})();

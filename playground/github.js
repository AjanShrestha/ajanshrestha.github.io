const fs = require('fs');

const fetch = require('node-fetch');

const USERNAME = 'AjanShrestha';

const options = {
  method: 'get',
  headers: {
    'user-agent': 'AjanShrestha',
    Accept: 'application/json',
  },
};

const fetchTopics = repoName => {
  const topicUrl = `https://api.github.com/users/${USERNAME}/${repoName}/topics`;
  options.headers.Accept = 'application/vnd.github.mercy-preview+json';
  fetch();
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

(async () => {
  console.group('repos');
  // let allRepos = await getAllRepos();
  // writeAllRepos(allRepos);
  const repos = JSON.parse(
    fs.readFileSync('playground/allRepos.json', 'utf-8')
  );
  console.log(repos.length);
  console.groupEnd('repos');
})();

// const repos = JSON.parse(fs.readFileSync('playground/allRepos.json', 'utf-8'));
// console.log(repos.length);
// const forked = repos.filter(repo => repo.fork);
// console.log(`Forked: ${forked.length}`);
// let languages = new Set();
// repos.forEach(repo => languages.add(repo.language));
// let languages = new Array();
// repos.forEach(repo => languages.push(repo.language));
// console.log(`Languages: ${languages.length}`);
// console.log(languages);

// let descriptions = new Array();
// repos.forEach(repo => descriptions.push(repo.description));
// console.log(`Descriptions: ${descriptions.length}`);
// console.log(descriptions);

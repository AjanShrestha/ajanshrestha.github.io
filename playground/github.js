require('dotenv').config();
const fs = require('fs');

const fetch = require('node-fetch');

const USERNAME = 'AjanShrestha';
const PASSWORD = process.env.PASSWORD;
const PRODUCTION = process.env.PROD;
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

const getOwned = repo =>
  !repo.archived && !repo.fork && repo.owner.login === USERNAME;
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
  if (PRODUCTION) {
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
  } else {
    allRepos = JSON.parse(fs.readFileSync('playground/allRepos.json', 'utf-8'));
  }

  return allRepos;
};

const getRepoObj = repo => ({
  name: repo.name,
  description: repo.description,
  createdAt: repo.created_at,
  language: repo.language,
  url: repo.html_url,
});

const getForkedRepos = repos => repos.filter(getForked).map(getRepoObj);
const getRepoTopics = async repos => {
  let repoTopics = {};
  if (PRODUCTION) {
    for (let repo of ownedRepos) {
      await fetchTopics(repo.name)
        .then(res => res.json())
        .then(topic => {
          repoTopics[repo.name] = topic.names;
        })
        .catch(console.error);
    }
    writeAllTopics(repoTopics);
  } else {
    repoTopics = JSON.parse(
      fs.readFileSync('playground/allTopics.json', 'utf-8')
    );
  }
  return repoTopics;
};
const getOwnedReposInfo = (repos, repoTopics) => {
  const learningRepos = [];
  const projectRepos = [];
  repos.forEach(repo => {
    const topics = repoTopics[repo.name];
    const repoObj = getRepoObj(repo);
    if (topics.includes(CATEGORIES.projects)) {
      projectRepos.push(repoObj);
    } else {
      learningRepos.push(repoObj);
    }
  });
  return [projectRepos, learningRepos];
};

const writeAllRepos = repos =>
  fs.writeFileSync('playground/allRepos.json', JSON.stringify(repos));
const writeAllTopics = repoTopics =>
  fs.writeFileSync('playground/allTopics.json', JSON.stringify(repoTopics));
const writeRepos = repos =>
  fs.writeFileSync('playground/repoInfos.json', JSON.stringify(repos));

(async () => {
  console.group('repos');
  let allRepos = await getAllRepos();
  writeAllRepos(allRepos);
  const forkedRepos = getForkedRepos(allRepos);
  const ownedRepos = allRepos.filter(getOwned);
  const repoTopics = await getRepoTopics(ownedRepos);
  const [projectRepos, learningRepos] = getOwnedReposInfo(
    ownedRepos,
    repoTopics
  );
  const categories = {
    forkedRepos: forkedRepos.sort(
      (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
    ),
    projectRepos: projectRepos.sort(
      (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
    ),
    learningRepos: learningRepos.sort(
      (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
    ),
  };
  console.log(`Forked: ${categories.forkedRepos.length}`);
  console.log(`Project: ${categories.projectRepos.length}`);
  console.log(`Learning: ${categories.learningRepos.length}`);
  writeRepos(categories);
  console.groupEnd('repos');
})();

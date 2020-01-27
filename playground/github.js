const https = require('https');
const fs = require('fs');

const generateOptions = type => {
  const options = {
    host: 'api.github.com',
    path: '/repos/AjanShrestha',
    method: 'get',
    headers: {
      'user-agent': 'AjanShrestha',
      Accept: 'application/json',
    },
  };

  switch (type) {
    case 'repos': {
      options.path = `${options.path}/repos?type=all&sort=updated`;
      return options;
    }
    case 'topics': {
      options.path = `${options.path}/${repoName}/topics`;
      options.headers.Accept = 'application/vnd.github.mercy-preview+json';
      return options;
    }
    default:
      return options;
  }
};

https.get(options, res => {
  res.setEncoding('utf8');
  let body = '';
  res.on('data', data => {
    body += data;
  });
  res.on('end', () => {
    // body = body);
    console.log(body);
  });
});

// let allRepos = [];
// for (let i = 1; i < 4; i++) {
//   options.path = `${options.path}&page=${i}`;
//   https.get(options, res => {
//     res.setEncoding('utf8');
//     let body = '';
//     res.on('data', data => {
//       body += data;
//     });
//     res.on('end', () => {
//       body = JSON.parse(body);
//       allRepos = [...allRepos, ...body];
//       fs.writeFileSync('playground/repos.json', JSON.stringify(allRepos));
//     });
//   });
// }

// const repos = JSON.parse(fs.readFileSync('playground/repos.json', 'utf-8'));
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

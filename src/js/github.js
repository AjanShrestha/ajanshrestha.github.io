'use strict';

const REPOS = {
  forkedRepos: [
    {
      name: 'fullstack-nanodegree-vm',
      description:
        'Common code for the Relational Databases and Full Stack Fundamentals courses',
      createdAt: '2016-01-10T17:52:23Z',
      language: 'Python',
      url: 'https://github.com/AjanShrestha/fullstack-nanodegree-vm',
    },
    {
      name: 'ngSemantic',
      description: 'Angular 2 building blocks :package: based on Semantic UI',
      createdAt: '2016-11-12T12:30:26Z',
      language: 'TypeScript',
      url: 'https://github.com/AjanShrestha/ngSemantic',
    },
    {
      name: 'webpack-workshop-2018',
      description:
        'Learning resources for the webpack academy workshop series for 2018 ',
      createdAt: '2018-08-17T09:32:35Z',
      language: null,
      url: 'https://github.com/AjanShrestha/webpack-workshop-2018',
    },
    {
      name: 'simple-node-js-react-npm-app',
      description:
        'For an introductory tutorial on how to use Jenkins to build a simple Node.js and React application with npm.',
      createdAt: '2018-08-24T08:21:42Z',
      language: 'JavaScript',
      url: 'https://github.com/AjanShrestha/simple-node-js-react-npm-app',
    },
    {
      name: 'creating-a-pipeline-in-blue-ocean',
      description:
        'For an introductory tutorial on how to use the Blue Ocean feature of Jenkins to create a Pipeline that builds an application.',
      createdAt: '2018-08-27T11:08:14Z',
      language: 'JavaScript',
      url: 'https://github.com/AjanShrestha/creating-a-pipeline-in-blue-ocean',
    },
    {
      name: 'building-a-multibranch-pipeline-project',
      description:
        'For an advanced tutorial on how to use Jenkins to build a multibranch Pipeline project with selectively executed stages.',
      createdAt: '2018-08-28T04:10:30Z',
      language: 'JavaScript',
      url:
        'https://github.com/AjanShrestha/building-a-multibranch-pipeline-project',
    },
    {
      name: 'nginxconfig.io',
      description: '⚙️ NGiИX config generator on steroids 💉',
      createdAt: '2019-04-30T05:57:29Z',
      language: 'HTML',
      url: 'https://github.com/AjanShrestha/nginxconfig.io',
    },
    {
      name: 'glide',
      description:
        'A dependency-free JavaScript ES6 slider and carousel. It’s lightweight, flexible and fast. Designed to slide. No less, no more',
      createdAt: '2019-05-06T05:08:01Z',
      language: 'JavaScript',
      url: 'https://github.com/AjanShrestha/glide',
    },
    {
      name: 'requests-html',
      description: 'Pythonic HTML Parsing for Humans™',
      createdAt: '2019-06-27T01:04:55Z',
      language: 'Python',
      url: 'https://github.com/AjanShrestha/requests-html',
    },
    {
      name: 'devops-essentials-sample-app',
      description:
        'This is a simple sample application intended to be used alongside the labs for DevOps Essentials.',
      createdAt: '2019-10-06T09:15:49Z',
      language: 'HTML',
      url: 'https://github.com/AjanShrestha/devops-essentials-sample-app',
    },
    {
      name: 'deno',
      description: 'A secure JavaScript and TypeScript runtime',
      createdAt: '2020-01-21T11:00:06Z',
      language: null,
      url: 'https://github.com/AjanShrestha/deno',
    },
  ],
  projectRepos: [
    {
      name: 'RAV-WEB-UI',
      description: 'Risk Adjustment Data Validation',
      createdAt: '2019-12-19T14:47:22Z',
      language: 'TypeScript',
      url: 'https://github.com/AjanShrestha/RAV-WEB-UI',
    },
    {
      name: 'nepse-scraper',
      description:
        "Scrapes and serves data from the Nepal Stock Exchange's website",
      createdAt: '2019-12-19T15:13:17Z',
      language: 'JavaScript',
      url: 'https://github.com/AjanShrestha/nepse-scraper',
    },
    {
      name: 'jenkins-client',
      description:
        'A simple in-house desktop app for LogPoint. It is built to handle the Jenkins build process. The UI for Jenkins is tedious, therefore the desktop approach.',
      createdAt: '2019-12-19T17:17:10Z',
      language: 'JavaScript',
      url: 'https://github.com/AjanShrestha/jenkins-client',
    },
    {
      name: 'nfc',
      description:
        'A website to Chautarians (NFC members). It is based on popular fantasy site Fantasy Premier League. Here, members can view FPL winners, score, predict and play SP.',
      createdAt: '2019-12-20T14:43:57Z',
      language: 'JavaScript',
      url: 'https://github.com/AjanShrestha/nfc',
    },
    {
      name: 'nfc-prediction',
      description: 'Prediction data log for NFC',
      createdAt: '2019-12-20T14:53:40Z',
      language: 'JavaScript',
      url: 'https://github.com/AjanShrestha/nfc-prediction',
    },
    {
      name: 'ViberMessageExtractor',
      description:
        "A python 3 script for extracting messages from Viber Desktop's sqlite message database into a csv file.",
      createdAt: '2019-12-20T14:59:52Z',
      language: null,
      url: 'https://github.com/AjanShrestha/ViberMessageExtractor',
    },
    {
      name: 'probates',
      description: 'Web Scraper to scrape probates data',
      createdAt: '2019-12-20T15:38:11Z',
      language: 'Python',
      url: 'https://github.com/AjanShrestha/probates',
    },
    {
      name: 'casesearch-scripts',
      description: 'bash, docker scripts for setting up the project in server',
      createdAt: '2019-12-20T15:42:02Z',
      language: 'Makefile',
      url: 'https://github.com/AjanShrestha/casesearch-scripts',
    },
    {
      name: 'casesearch-scraper',
      description: 'Web Scraper to scrape casesearch data',
      createdAt: '2019-12-20T15:43:23Z',
      language: 'Python',
      url: 'https://github.com/AjanShrestha/casesearch-scraper',
    },
    {
      name: 'casesearch-baseimage',
      description: 'Base Image for case search',
      createdAt: '2019-12-20T15:46:51Z',
      language: 'Dockerfile',
      url: 'https://github.com/AjanShrestha/casesearch-baseimage',
    },
    {
      name: 'casesearch-etl',
      description: 'Extraction, Transformation and Loading',
      createdAt: '2019-12-20T15:49:34Z',
      language: 'Python',
      url: 'https://github.com/AjanShrestha/casesearch-etl',
    },
    {
      name: 'intelius',
      description: 'Intelligent web scraper to scrape data of Intelius',
      createdAt: '2019-12-20T15:54:14Z',
      language: 'JavaScript',
      url: 'https://github.com/AjanShrestha/intelius',
    },
    {
      name: 'casesearch-scraper-older',
      description:
        'Older web scraper to Scrape to fetch the data of case search',
      createdAt: '2019-12-20T15:58:54Z',
      language: 'Python',
      url: 'https://github.com/AjanShrestha/casesearch-scraper-older',
    },
    {
      name: 'intelius-older',
      description: 'Older web scraper to scrape intelius data',
      createdAt: '2019-12-20T16:01:28Z',
      language: 'Python',
      url: 'https://github.com/AjanShrestha/intelius-older',
    },
    {
      name: 'thm',
      description: 'The Right Handyman',
      createdAt: '2019-12-20T16:50:18Z',
      language: 'Python',
      url: 'https://github.com/AjanShrestha/thm',
    },
    {
      name: 'seatkhalichha',
      description:
        'A simple portal for drivers to share their seat with needy riders in this time of crisis.',
      createdAt: '2019-12-20T16:59:08Z',
      language: 'Python',
      url: 'https://github.com/AjanShrestha/seatkhalichha',
    },
    {
      name: 'Questr',
      description:
        'Questr is a crowdshipping service that provides shipping solutions for local businesses in the GTA.',
      createdAt: '2019-12-20T17:09:36Z',
      language: 'CSS',
      url: 'https://github.com/AjanShrestha/Questr',
    },
  ],
  learningRepos: [
    {
      name: 'try_git',
      description: 'First Try at git',
      createdAt: '2012-07-12T15:49:43Z',
      language: null,
      url: 'https://github.com/AjanShrestha/try_git',
    },
    {
      name: 'sample_app',
      description: null,
      createdAt: '2013-06-03T10:56:05Z',
      language: 'CSS',
      url: 'https://github.com/AjanShrestha/sample_app',
    },
    {
      name: 'bitstarter',
      description: 'Startup Engineering -- Assignment 2 ',
      createdAt: '2013-07-11T02:52:30Z',
      language: 'JavaScript',
      url: 'https://github.com/AjanShrestha/bitstarter',
    },
    {
      name: 'learnGoWithTests',
      description:
        'Learning golang from https://quii.gitbook.io/learn-go-with-tests/',
      createdAt: '2019-07-10T03:59:44Z',
      language: 'Go',
      url: 'https://github.com/AjanShrestha/learnGoWithTests',
    },
    {
      name: 'tictactoe',
      description: 'Simple tic-tac-toe game',
      createdAt: '2019-07-13T12:28:53Z',
      language: 'JavaScript',
      url: 'https://github.com/AjanShrestha/tictactoe',
    },
    {
      name: 'game-development',
      description:
        'Based on [Introducing JavaScript Game Development](https://www.apress.com/gp/book/9781484232514)',
      createdAt: '2019-07-20T04:28:35Z',
      language: 'JavaScript',
      url: 'https://github.com/AjanShrestha/game-development',
    },
    {
      name: 'Pro-HTML5-Games',
      description:
        'Based on [Pro HTML5 Games](https://www.apress.com/in/book/9781484229095)',
      createdAt: '2019-07-29T15:13:49Z',
      language: 'JavaScript',
      url: 'https://github.com/AjanShrestha/Pro-HTML5-Games',
    },
    {
      name: 'tetris',
      description:
        'Based on [Write a Tetris Game in Javascript](https://www.youtube.com/watch?v=H2aW5V46khA)',
      createdAt: '2019-08-15T04:08:51Z',
      language: 'JavaScript',
      url: 'https://github.com/AjanShrestha/tetris',
    },
    {
      name: 'youtube-video-player',
      description: 'Build YouTube Clone Application from Scratch using React',
      createdAt: '2019-08-18T15:24:21Z',
      language: 'JavaScript',
      url: 'https://github.com/AjanShrestha/youtube-video-player',
    },
    {
      name: 'amazonScraperv1',
      description: 'Scrape Amazon Product Details and Pricing using Python',
      createdAt: '2019-12-19T15:24:13Z',
      language: 'Python',
      url: 'https://github.com/AjanShrestha/amazonScraperv1',
    },
    {
      name: 'materialize-css',
      description: 'materialize-css-from-scratch',
      createdAt: '2019-12-19T15:29:23Z',
      language: 'HTML',
      url: 'https://github.com/AjanShrestha/materialize-css',
    },
    {
      name: 'BookListApp',
      description: 'Plain JavaScript Booklist App',
      createdAt: '2019-12-19T15:36:13Z',
      language: 'JavaScript',
      url: 'https://github.com/AjanShrestha/BookListApp',
    },
    {
      name: 'react-starter-kit',
      description:
        'React, Redux, Webpack, Material UI, Bootstrap 4, Code Splitting, HMR',
      createdAt: '2019-12-19T15:42:26Z',
      language: 'JavaScript',
      url: 'https://github.com/AjanShrestha/react-starter-kit',
    },
    {
      name: 'create-react-app-from-scratch',
      description:
        'Build something from scratch with React. Understand the tools',
      createdAt: '2019-12-19T16:02:22Z',
      language: 'JavaScript',
      url: 'https://github.com/AjanShrestha/create-react-app-from-scratch',
    },
    {
      name: 'react-redux-firebase',
      description: 'Integrate React Redux and Firebase',
      createdAt: '2019-12-19T16:14:37Z',
      language: 'JavaScript',
      url: 'https://github.com/AjanShrestha/react-redux-firebase',
    },
    {
      name: 'the-nodejs-master-class',
      description: 'Pirple: The Node.JS Master Course',
      createdAt: '2019-12-19T16:27:26Z',
      language: 'JavaScript',
      url: 'https://github.com/AjanShrestha/the-nodejs-master-class',
    },
    {
      name: 'django-newspaper-app',
      description: 'Simple Django app',
      createdAt: '2019-12-19T16:29:52Z',
      language: 'Python',
      url: 'https://github.com/AjanShrestha/django-newspaper-app',
    },
    {
      name: 'django-blog-app-',
      description: 'Simple django blog app',
      createdAt: '2019-12-19T16:36:28Z',
      language: 'Python',
      url: 'https://github.com/AjanShrestha/django-blog-app-',
    },
    {
      name: 'lyricfinder_react',
      description:
        'A Simple React App to find lyrics. Learning to use React Context API.',
      createdAt: '2019-12-19T16:39:24Z',
      language: 'JavaScript',
      url: 'https://github.com/AjanShrestha/lyricfinder_react',
    },
    {
      name: 'es6',
      description: 'JavaScript ES6',
      createdAt: '2019-12-19T17:04:38Z',
      language: 'JavaScript',
      url: 'https://github.com/AjanShrestha/es6',
    },
    {
      name: 'ginit',
      description:
        'Build a JavaScript Command Line Interface (CLI) with Node.js',
      createdAt: '2019-12-19T17:06:43Z',
      language: 'JavaScript',
      url: 'https://github.com/AjanShrestha/ginit',
    },
    {
      name: 'bitbucket-scripting',
      description: 'Building command line tools with Node.js',
      createdAt: '2019-12-19T17:09:54Z',
      language: 'JavaScript',
      url: 'https://github.com/AjanShrestha/bitbucket-scripting',
    },
    {
      name: 'building-products-with-js',
      description: 'Building products with javascript: Question Answer App',
      createdAt: '2019-12-20T00:17:14Z',
      language: 'JavaScript',
      url: 'https://github.com/AjanShrestha/building-products-with-js',
    },
    {
      name: 'bpjs-electron',
      description:
        'Using Electron JS to build a cross-platform desktop app. A video website to stream videos from multiple sites.',
      createdAt: '2019-12-20T00:28:33Z',
      language: 'JavaScript',
      url: 'https://github.com/AjanShrestha/bpjs-electron',
    },
    {
      name: 'webpack-guide',
      description: 'Webpack Guide',
      createdAt: '2019-12-20T00:44:30Z',
      language: 'JavaScript',
      url: 'https://github.com/AjanShrestha/webpack-guide',
    },
    {
      name: 'kanban-app',
      description: 'Kanban App',
      createdAt: '2019-12-20T07:01:15Z',
      language: 'JavaScript',
      url: 'https://github.com/AjanShrestha/kanban-app',
    },
    {
      name: 'hoc-with-functional-patterns-using-recompose',
      description:
        'Master Higher Order Components with Functional Patterns Using Recompose',
      createdAt: '2019-12-20T07:24:00Z',
      language: 'JavaScript',
      url:
        'https://github.com/AjanShrestha/hoc-with-functional-patterns-using-recompose',
    },
    {
      name: 'building-react-applications-with-idiomatic-redux',
      description:
        'Building React Applications with Idiomatic Redux: By Dan Abramov',
      createdAt: '2019-12-20T07:25:31Z',
      language: 'JavaScript',
      url:
        'https://github.com/AjanShrestha/building-react-applications-with-idiomatic-redux',
    },
    {
      name: 'getting-started-with-redux',
      description: 'Getting Started with Redux: By Dan Abramov',
      createdAt: '2019-12-20T07:27:44Z',
      language: 'JavaScript',
      url: 'https://github.com/AjanShrestha/getting-started-with-redux',
    },
    {
      name: 'flask_web_dev',
      description: 'Revising flask',
      createdAt: '2019-12-20T07:32:44Z',
      language: 'Python',
      url: 'https://github.com/AjanShrestha/flask_web_dev',
    },
    {
      name: 'goalcoach',
      description: 'Learning React',
      createdAt: '2019-12-20T07:34:27Z',
      language: 'JavaScript',
      url: 'https://github.com/AjanShrestha/goalcoach',
    },
    {
      name: 'reminderpro',
      description: 'A simple reminder app',
      createdAt: '2019-12-20T07:35:46Z',
      language: 'JavaScript',
      url: 'https://github.com/AjanShrestha/reminderpro',
    },
    {
      name: 'voting-server',
      description: 'Server that hosts the logic for voting',
      createdAt: '2019-12-20T07:36:56Z',
      language: 'JavaScript',
      url: 'https://github.com/AjanShrestha/voting-server',
    },
    {
      name: 'voting-client',
      description: 'Client for the users to vote',
      createdAt: '2019-12-20T07:38:03Z',
      language: 'JavaScript',
      url: 'https://github.com/AjanShrestha/voting-client',
    },
    {
      name: 'musicmaster',
      description: 'Simple music app',
      createdAt: '2019-12-20T07:40:09Z',
      language: 'JavaScript',
      url: 'https://github.com/AjanShrestha/musicmaster',
    },
    {
      name: 'build-your-first-quality-react-app',
      description:
        'Build Your First Production Quality React App: By Andy Van Slaar',
      createdAt: '2019-12-20T07:41:14Z',
      language: 'JavaScript',
      url: 'https://github.com/AjanShrestha/build-your-first-quality-react-app',
    },
    {
      name: 'countdownchamp',
      description: 'Countdown app',
      createdAt: '2019-12-20T07:42:05Z',
      language: 'JavaScript',
      url: 'https://github.com/AjanShrestha/countdownchamp',
    },
    {
      name: 'sockets',
      description: 'Socket app',
      createdAt: '2019-12-20T07:42:53Z',
      language: 'JavaScript',
      url: 'https://github.com/AjanShrestha/sockets',
    },
    {
      name: 'todo-api',
      description: 'API server for todo app',
      createdAt: '2019-12-20T07:43:43Z',
      language: 'JavaScript',
      url: 'https://github.com/AjanShrestha/todo-api',
    },
    {
      name: 'ReactTodo',
      description: 'A simple todo app',
      createdAt: '2019-12-20T07:48:16Z',
      language: 'JavaScript',
      url: 'https://github.com/AjanShrestha/ReactTodo',
    },
    {
      name: 'ReactTimer',
      description: 'A simple time and countdown app ',
      createdAt: '2019-12-20T07:49:58Z',
      language: 'JavaScript',
      url: 'https://github.com/AjanShrestha/ReactTimer',
    },
    {
      name: 'ReactWeather',
      description: 'Weather App in React',
      createdAt: '2019-12-20T07:51:05Z',
      language: 'JavaScript',
      url: 'https://github.com/AjanShrestha/ReactWeather',
    },
    {
      name: 'entry-level-software-jobs',
      description:
        'A simple website that provides filtered jobs for people entering software industry',
      createdAt: '2019-12-22T02:54:31Z',
      language: 'JavaScript',
      url: 'https://github.com/AjanShrestha/entry-level-software-jobs',
    },
    {
      name: 'pwa-complete-guide',
      description:
        'Build a Progressive Web App (PWA) that feels like an iOS & Android App, using Device Camera, Push Notifications and more',
      createdAt: '2019-12-29T12:05:14Z',
      language: 'JavaScript',
      url: 'https://github.com/AjanShrestha/pwa-complete-guide',
    },
    {
      name: 'service-workers-offline',
      description: 'Service Workers / PWA Service Workers & Offline',
      createdAt: '2020-01-08T04:21:19Z',
      language: 'JavaScript',
      url: 'https://github.com/AjanShrestha/service-workers-offline',
    },
    {
      name: 'socket-chat-example',
      description: 'Create a basic chat application',
      createdAt: '2020-01-10T14:53:15Z',
      language: 'HTML',
      url: 'https://github.com/AjanShrestha/socket-chat-example',
    },
    {
      name: 'digging-into-nodejs',
      description: 'Node basics',
      createdAt: '2020-01-11T04:07:07Z',
      language: 'JavaScript',
      url: 'https://github.com/AjanShrestha/digging-into-nodejs',
    },
    {
      name: 'react-burger-builder',
      description: 'Beyond React v16.0.0',
      createdAt: '2020-01-24T23:12:28Z',
      language: null,
      url: 'https://github.com/AjanShrestha/react-burger-builder',
    },
  ],
};

const CATEGORIES = {
  projectRepos: 'gal_a',
  learningRepos: 'gal_b',
  forkedRepos: 'gal_c',
};

const readableDate = date =>
  new Date(date)
    .toDateString()
    .split(' ')
    .slice(1)
    .join(' ');

const repoComponent = (repo, categoryClass) => (
  <div className={`col-md-4 col-sm-6 gallery-grid ${categoryClass}`}>
    <div className="gallery-single fix">
      <div className="portfolio-date">
        <i className="fas fa-pen">{readableDate(repo.createdAt)}</i>
      </div>
      <div>
        <h3 className="portfolio-name">
          <a href={'repo.url'}>{repo.name}</a>
        </h3>
        <p className="portfolio-description">{repo.description}</p>
        <div className="portfolio-language">
          <i className="fas fa-laptop-code">{repo.language}</i>
        </div>
      </div>
    </div>
  </div>
);

class App extends React.Component {
  render() {
    return Object.keys(CATEGORIES).map(key => {
      const categoryClass = CATEGORIES[key];
      return REPOS[key].map(repo => repoComponent(repo, categoryClass));
    });
  }
}
const domContainer = document.querySelector('#main_data_container');
ReactDOM.render(<App />, domContainer);

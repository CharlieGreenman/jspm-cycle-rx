# jspm-react 
[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)

lightweight React.js boilerplate with [JSPM](https://github.com/jspm/jspm-cli) and [hot reloading modules](https://github.com/capaj/jspm-hot-reloader)

### Quickstart to development
```
git clone git@github.com:capaj/jspm-react.git
npm i
npm start
```

## npm scripts available:
```shell
npm start #starts webserver and watcher, the http port is 9080
npm build #build your bundle, use purely for production
npm test #runs mocha/chai/jsdom tests in node.js
```

## Why choose this over webpack boilerplate?
Webpack's offering is good, but it is a big hack which lacks robustness. Even such basic thing as component event listeners is not working properly with webpack hot reloading. JSPMs module system is robust and safe. It will not suprise you-ES6 modules are very predictable when hot reloaded, much more than raw React components. Try it for yourself. Speed is certainly not the issue anymore.

## Styles
Make your own style pipeline, this boilerplate doesn't offer one. Me personally, I am fine with inline styles inside my react components most of the time, but that is just me.

## Includes
- githooks for commit trigerring tests and style check
- airbnb's enzyme for unit testing
- react-router
- standard.js for codestyle checking
- simple tests with Mocha, Chai and JSDOM

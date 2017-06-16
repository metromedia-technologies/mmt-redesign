# MMT Landing Page
[![NPM](https://img.shields.io/badge/npm-4.1.2-blue.svg?style=flat)](https://docs.npmjs.com/cli/install)
[![Development](https://img.shields.io/badge/build-dev-orange.svg?style=flat)](https://metromedia-technologies.github.io)
[![Jekyll](https://img.shields.io/badge/jekyll-3.4.3-blue.svg?style=flat)](https://jekyllrb.com/)
[![Webpack](https://img.shields.io/badge/webpack-2.6.1-blue.svg?style=flat)](https://webpack.github.io/)
[![Sass](https://img.shields.io/badge/Sass-3.4.24-ff69b4.svg?style=flat)](http://sass-lang.com/)

This is the Jekyll project for Metromedia Technologies landing page.

## Installation
Requires NPM

Install dependencies
```
npm install
```

Run dev server

In `_config.yml` set the `baseurl`
```
baseurl: "/" # For Development
```
To start the local server run
```
npm start
```

Build production

In `_config.yml` set the `baseurl`
```
baseurl: "https://metromedia-technologies.github.io/" # For Production
```
To build the site for deployment run
```
npm run build
```

TODO: Describe the installation process for Jekyll and Ruby

## History

TODO: Remove the dependency on Jquery for vanilla JS

TODO: Add object selectors for each category product div instead of a specific classname

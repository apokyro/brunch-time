# Brunch Time

This is a skeleton (or boilerplate) for [Brunch](http://brunch.io), a fast and easy to configure building tool for modern Web development. The skeleton is intended to be a starting point for a static html website.

## Installation

* Clone this git repo `https://github.com/apokyro/brunch-time`
* Run `npm install` to install app dependencies and brunch plugins

## Features

* [jQuery](http://jquery.com)
* Compilation of ECMAScript 2015 (ECMAScript 6) files with [Babel](https://babeljs.io)
* Uglification and concatenation of Javascript files with [UglifyJS](http://lisperator.net/uglifyjs/)
* Extending CSS with [Sass](http://sass-lang.com)
* Autoprefixing, concatenation, minification (and more) of CSS files with [Pleeease (PostCSS)](http://pleeease.io)
* Auto reload of development server
* [ESLint](http://eslint.org) with [AirBnB Javascript Style Guide](https://github.com/airbnb/javascript)
* Ready to format your code with [Prettier](https://prettier.io)
* [Handlebars](http://handlebarsjs.com) Static site templating structure is written in `layouts`, `partials`, and `pages`.
* [html-brunch-static](https://github.com/bmatcuk/html-brunch-static) enables [handlebars](http://handlebarsjs.com/) precompiled templates.
* index.html with essential meta tags for SEO and Social Media

## Getting started with Brunch

* Install (if you don't have them):
  * [Node.js](http://nodejs.org): `brew install node` on OS X
  * [Brunch](http://brunch.io): `npm install -g brunch`
  * Brunch plugins and app dependencies: `npm install`
* Run:
  * `npm start` — watches the project with continuous rebuild. This will also launch HTTP server with [pushState](https://developer.mozilla.org/en-US/docs/Web/Guide/API/DOM/Manipulating_the_browser_history).
  * `npm run build` — builds minified project for production
* Learn:
  * `public/` dir is fully auto-generated and served by HTTP server. Write your code in `app/` dir.
  * [Brunch site](http://brunch.io), [Getting started guide](https://github.com/brunch/brunch-guide#readme)

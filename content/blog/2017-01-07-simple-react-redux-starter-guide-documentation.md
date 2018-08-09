---
id: 1494
title: Simple React Redux Starter Guide / Documentation
date: 2017-01-07T12:40:14+00:00
author: Phong Huynh
layout: post

permalink: /simple-react-redux-starter-guide-documentation/
dsq_thread_id:
  - "5443749084"
image: /wp-content/uploads/2017/01/Screen-Shot-2017-01-07-at-12.36.26-PM.png
categories:
  - Learning
  - Posts
  - Programming
  - Web Development
tags:
  - boilerplate
  - github
  - javascript
  - react
  - redux
  - web application development
  - web development
---
When I started learning React Redux and creating side projects with it, I found it very hard to find a minimal starter/boilerplate package to start with. Picking and learning new tools can be difficult, especially in the current JavaScript ecosystem. The big reason to why I had trouble finding a starter was because a lot of the starter packages had a lot of boilerplate code that I did not want. I was looking for a pure front end application with routing and an API call that I could use as reference or as an example.

<div class="tagline">
  <h3>
    <span class="col-11 text-gray-dark">Simple React Redux Starter/Boilerplate. With ES6, Webpack, Router, Dev Tools, Axios, Thunk</span>
  </h3>
</div>

&nbsp;

<div class="project-action">
  <p>
    <p><a class="button big red  button-icon" href="https://github.com/xphong/simple-react-redux-starter"><i class="fa fa-github"></i>GITHUB</a></p><p><a class="button big blue  button-icon" href="https://github.com/xphong/marvel-app"><i class="fa fa-cloud-download"></i>EXAMPLE PROJECT</a></p>
</div>

<hr />

<h2>
Table of Contents
</h2>

<ul>
<li>
  <a href="#overview">Overview</a>
</li>
<li>
  <a href="#why">Why Should You Use This Starter Boilerplate?</a>
</li>
<li>
  <a href="#how">How Does This Fit Into Your Solution?</a>
</li>
<li>
  <a href="#gettingstarted">Getting Started</a>
</li>
<li>
  <a href="#projectfilestructure">Project File Structure</a>
</li>
<li>
  <a href="#technologies">Technologies</a>
</li>
<li>
  <a href="#technologiesoverview">Technologies Overview</a>
</li>
<li>
  <a href="#faq">FAQ</a>
</li>
</ul>

<h2 id="overview">
Overview
</h2>

<p>
A simple React Redux starter recipe that includes an API call to retrieve a list of countries and displays the data in a table. The starter includes a navigation bar with a home route and an about route, and an animated loading spinner for asynchronous functions.
</p>

<img class="wp-image-1520 size-full" src="/wp-content/uploads/2017/01/Screen-Shot-2017-01-07-at-12.35.37-PM.png"  srcset="/wp-content/uploads/2017/01/Screen-Shot-2017-01-07-at-12.35.37-PM.png 2672w, /wp-content/uploads/2017/01/Screen-Shot-2017-01-07-at-12.35.37-PM-300x169.png 300w, /wp-content/uploads/2017/01/Screen-Shot-2017-01-07-at-12.35.37-PM-768x433.png 768w, /wp-content/uploads/2017/01/Screen-Shot-2017-01-07-at-12.35.37-PM-1024x578.png 1024w, /wp-content/uploads/2017/01/Screen-Shot-2017-01-07-at-12.35.37-PM-150x85.png 150w, /wp-content/uploads/2017/01/Screen-Shot-2017-01-07-at-12.35.37-PM-1300x734.png 1300w, /wp-content/uploads/2017/01/Screen-Shot-2017-01-07-at-12.35.37-PM-720x406.png 720w, /wp-content/uploads/2017/01/Screen-Shot-2017-01-07-at-12.35.37-PM-400x226.png 400w, /wp-content/uploads/2017/01/Screen-Shot-2017-01-07-at-12.35.37-PM-800x451.png 800w" sizes="(max-width: 2672px) 100vw, 2672px" />

<p class="wp-caption-text">
  Production View
</p>

<p>
GitHub Link to Starter: <a href="https://github.com/xphong/simple-react-redux-starter">https://github.com/xphong/simple-react-redux-starter</a>
</p>

<p>
Demo: <a href="https://xphong.github.io/simple-react-redux-starter/">https://xphong.github.io/simple-react-redux-starter/</a>
</p>

<p>
Example project using this starter: <a href="https://github.com/xphong/marvel-app">https://github.com/xphong/marvel-app</a>
</p>

<h2 id="why">
Why Should You Use This Starter Boilerplate?
</h2>

<p>
The main purpose of this package is to create a simple, minimal recipe for a front-end application starter with modern technologies. The objective is to save time when creating new applications and to minimize tooling choices within the modern ecosystem in order to get you up and running quickly. You can take a look at the technologies being used <a href="#technologies">here</a>.
</p>

<h2 id="how">
How Does This Fit Into Your Solution?
</h2>

<p>
This <a href="https://github.com/xphong/simple-react-redux-starter">React Redux starter</a> can fit into your solution by being used for quickly prototyping a front end application.
</p>

<p>
This starter can also be used as a decoupled web client that can be integrated with any back-end. An example, for my <a href="https://github.com/xphong/marvel-app">marvel app</a> that searches the Marvel database for the characters using the <a href="https://developer.marvel.com/">Marvel API</a> and shows the power levels of popular Marvel characters, I used this starter along with a <a href="https://nodejs.org/en/">Node.js</a> server backend and <a href="https://www.mongodb.com/">Mongo</a> Database.
</p>

<hr />

<h2 id="gettingstarted">
Getting Started
</h2>

<p>
Clone the repository <a href="https://github.com/xphong/simple-react-redux-starter">https://github.com/xphong/simple-react-redux-starter</a>:
</p>

<div class="m_6713519142725504516gmail-codehilite">
<pre>git clone https://github.com/xphong/simple-react-redux-starter.git</pre>

<h3 id="m_6713519142725504516gmail-React+Redux-Dependencies">
  Dependencies
</h3>

<p>
  Install Node: <a class="m_6713519142725504516external-link" href="https://nodejs.org/en/" target="_blank" rel="nofollow" data-saferedirecturl="https://www.google.com/url?hl=en&q=https://nodejs.org/en/&source=gmail&ust=1483789009273000&usg=AFQjCNEc4fJ506uvgYpE32CGHl6oJtri2w">https://nodejs.org/en/</a>
</p>

<p>
  Install required dependencies:
</p>

<div class="m_6713519142725504516gmail-codehilite">
  <pre>npm install yarn -g
yarn</pre>
</div>

<h3 id="m_6713519142725504516gmail-React+Redux-Currentversionsattimeofcreation:">
  Current versions at time of creation:
</h3>

<ul>
  <li>
    Node v6.9.1
  </li>
  <li>
    NPM v4.0.2
  </li>
</ul>

<h3 id="m_6713519142725504516gmail-React+Redux-Scripts">
  Scripts
</h3>

<ul>
  <li>
    Run development server (localhost:3000): <code>npm run dev</code>
  </li>
  <li>
    Run production server (localhost:3000): <code>npm run prod</code>
  </li>
  <li>
    Deploy production build (into /dist folder): <code>npm run build</code> <ul>
      <li>
        Creates a <code>bundle.js</code> and <code>bundle.js.map</code>file
      </li>
      <li>
        Copy the <code>/index.html</code> into the root directory on the server and the <code>bundle.js</code> and <code>bundle.js.map</code> file into <code>/static</code> directory on the server
      </li>
    </ul>
  </li>
</ul>
</div>

<h2 id="projectfilestructure">
Project File Structure
</h2>

<div class="m_6713519142725504516gmail-codehilite">
<pre><code>├── README.md
├── index.html
├── package.json
├── server.js
├── webpack.config.dev.js
├── webpack.config.prod.js
├── yarn.lock
├── src/
|   ├── actions
|   |   ├── CountriesActions.js
|   ├── components
|   |   ├── Countries.js
|   |   ├── Country.js
|   |   ├── Navbar.js
|   |   └── Spinner.js
|   ├── constants
|   |   └── ActionTypes.js
|   ├── containers
|   |   ├── About.js
|   |   ├── App.js
|   |   ├── Countries.js
|   |   └── DevTools.js
|   ├── reducers
|   |   ├── countries.js
|   |   └── index.js
|   ├── store
|   |   ├── configureStore.dev.js
|   |   ├── configureStore.prod.js
|   |   └── configureStore.js
|   ├── styles
|   |   └── main.scss
|   ├── index.js
|   ├── routes.js
├── .babelrc
├── .eslintignore
├── .eslintrc
└── .gitignore</code></pre>
</div>

<div class="m_6713519142725504516gmail-codehilite">
<h2 id="technologies">
  Technologies
</h2>

<ul>
  <li>
    <a class="m_6713519142725504516external-link" href="https://github.com/babel/babel" target="_blank" rel="nofollow" data-saferedirecturl="https://www.google.com/url?hl=en&q=https://github.com/babel/babel&source=gmail&ust=1483789009273000&usg=AFQjCNEb7Qi_ZybFZKtuGMpXGDzplMZs_Q">Babel ES2015/ES6 v6.3.15</a>
  </li>
  <li>
    <a class="m_6713519142725504516external-link" href="https://github.com/facebook/react" target="_blank" rel="nofollow" data-saferedirecturl="https://www.google.com/url?hl=en&q=https://github.com/facebook/react&source=gmail&ust=1483789009273000&usg=AFQjCNHw7ExWg6KJWSNFfiF0MrS1NRUWKQ">React v15.3.1</a> <ul>
      <li>
        <a class="m_6713519142725504516external-link" href="https://github.com/reactjs/react-redux" target="_blank" rel="nofollow" data-saferedirecturl="https://www.google.com/url?hl=en&q=https://github.com/reactjs/react-redux&source=gmail&ust=1483789009273000&usg=AFQjCNFIA34ALwXOrZ2Hi8ehnzzwBrwbvA">Redux v4.1.1</a>
      </li>
      <li>
        <a class="m_6713519142725504516external-link" href="https://github.com/ReactTraining/react-router" target="_blank" rel="nofollow" data-saferedirecturl="https://www.google.com/url?hl=en&q=https://github.com/ReactTraining/react-router&source=gmail&ust=1483789009273000&usg=AFQjCNEvCZlrO046qZQ2r7QIEKMuu0lJrg">React Router v3.0.0</a>
      </li>
      <li>
        <a class="m_6713519142725504516external-link" href="https://github.com/reactjs/react-router-redux" target="_blank" rel="nofollow" data-saferedirecturl="https://www.google.com/url?hl=en&q=https://github.com/reactjs/react-router-redux&source=gmail&ust=1483789009273000&usg=AFQjCNGQ2J6dhdTpjbGXBhOLuxrC5tcapw">React Router Redux v4.0.6</a>
      </li>
      <li>
        <a class="m_6713519142725504516external-link" href="https://github.com/gaearon/redux-thunk" target="_blank" rel="nofollow" data-saferedirecturl="https://www.google.com/url?hl=en&q=https://github.com/gaearon/redux-thunk&source=gmail&ust=1483789009273000&usg=AFQjCNHGLaqvRyCDzfnAypL5Sidr8RO5Yw">Redux Thunk Middleware v2.1.0</a>
      </li>
      <li>
        <a class="m_6713519142725504516external-link" href="https://github.com/evgenyrodionov/redux-logger" target="_blank" rel="nofollow" data-saferedirecturl="https://www.google.com/url?hl=en&q=https://github.com/evgenyrodionov/redux-logger&source=gmail&ust=1483789009274000&usg=AFQjCNEZ_m0ccBWdpJ3yyKzDBOUP8Y1TrA">Redux Logger v2.4.0</a>
      </li>
      <li>
        <a href="https://github.com/gaearon/redux-devtools">Redux Dev Tools v3.01</a>
      </li>
    </ul>
  </li>

  <li>
    <a class="m_6713519142725504516external-link" href="https://webpack.github.io/" target="_blank" rel="nofollow" data-saferedirecturl="https://www.google.com/url?hl=en&q=https://webpack.github.io/&source=gmail&ust=1483789009274000&usg=AFQjCNEkPjT5fsbP9OA4qmWxZLziuklYrQ">Webpack v1.2.12</a>
  </li>
  <li>
    <a class="m_6713519142725504516external-link" href="https://github.com/mzabriskie/axios" target="_blank" rel="nofollow" data-saferedirecturl="https://www.google.com/url?hl=en&q=https://github.com/mzabriskie/axios&source=gmail&ust=1483789009274000&usg=AFQjCNGO-RASJD1kkJMraKAEEIjks18-Mg">Axios v0.14.0</a>
  </li>
  <li>
    <a class="m_6713519142725504516external-link" href="http://getbootstrap.com/" target="_blank" rel="nofollow" data-saferedirecturl="https://www.google.com/url?hl=en&q=http://getbootstrap.com/&source=gmail&ust=1483789009274000&usg=AFQjCNE16VVqwAeBA_pA3Xf9cXDz7c8njQ">Bootstrap w/ Sass</a>
  </li>
  <li>
    <a class="m_6713519142725504516external-link" href="https://yarnpkg.com/" target="_blank" rel="nofollow" data-saferedirecturl="https://www.google.com/url?hl=en&q=https://yarnpkg.com/&source=gmail&ust=1483789009274000&usg=AFQjCNEAs2mNTSVJ5iChPEfUkC5sl5k_Ww">Yarn</a>
  </li>
</ul>

<h2 id="technologiesoverview">
  Technologies Overview
</h2>

<h3 id="m_6713519142725504516gmail-React+Redux-React">
  React
</h3>

<p>
  React is a a JavaScript <strong>library</strong> for building user interfaces.
</p>

<p>
  More information: <a class="m_6713519142725504516external-link" href="https://facebook.github.io/react/" target="_blank" rel="nofollow" data-saferedirecturl="https://www.google.com/url?hl=en&q=https://facebook.github.io/react/&source=gmail&ust=1483789009273000&usg=AFQjCNH65ZRvsZNoqHnNieAQuTWmpyORQQ">https://facebook.github.io/react</a>
</p>

<h3 id="m_6713519142725504516gmail-React+Redux-Redux">
  Redux
</h3>

<p>
  Redux is a predictable state container for JavaScript apps. Redux architecture evolves the ideas of <a class="m_6713519142725504516external-link" href="http://facebook.github.io/flux/" target="_blank" rel="nofollow" data-saferedirecturl="https://www.google.com/url?hl=en&q=http://facebook.github.io/flux/&source=gmail&ust=1483789009273000&usg=AFQjCNFDMeXgC3W-arhPyRJlUck4fRelfw">Flux</a> and revolves around a strict <strong>unidirectional data flow</strong>.
</p>

<p>
  More information: <a class="m_6713519142725504516external-link" href="http://redux.js.org/" target="_blank" rel="nofollow" data-saferedirecturl="https://www.google.com/url?hl=en&q=http://redux.js.org/&source=gmail&ust=1483789009273000&usg=AFQjCNGJYqd-2JwMAu8FLyrs-lJDBKUy5A">http://redux.js.org/</a>
</p>

<p>
  <strong>Flux data flow:</strong>
</p>

<p>
  <span class="m_6713519142725504516gmail-confluence-embedded-file-wrapper m_6713519142725504516gmail-confluence-embedded-manual-size"><img class="m_6713519142725504516gmail-confluence-embedded-image m_6713519142725504516gmail-confluence-external-resource CToWUd a6T aligncenter" tabindex="0" src="https://ci3.googleusercontent.com/proxy/58lht93zmDrf_TpStMF3_FzLxOOV9ejL8VcRyfeEV_burd_jRxU5FlwTKQBrwDv5EQXa4062MLeeGW3N7OfW9I9dUztj1FasRjHacKAWy48dnK9PUL_zR1H4q7OPaLWMkE_h_A=s0-d-e1-ft#https://facebook.github.io/flux/img/flux-simple-f8-diagram-explained-1300w.png" height="400" /></span>
</p>

<p>
  <strong>Redux data flow:</strong>
</p>

<p>
  <img class="m_6713519142725504516gmail-confluence-embedded-image m_6713519142725504516gmail-confluence-external-resource CToWUd a6T aligncenter" tabindex="0" src="https://ci3.googleusercontent.com/proxy/V50DNDsGg649-mgRzKAEe7J74RaNicJJM9l5mb6C1HhxLMsX4Mu-4pFOc146Cn9MNppVtzt0KiC_jxjc43cbrD0vtoTVcV4tOH9aEFqFObIvNRVtoVzbWT5AQQYJ-_7yuvQBkewL97DbZ22P8kT6koZnYsxb=s0-d-e1-ft#http://image.slidesharecdn.com/using-redux-160119165259/95/using-redux-13-638.jpg?cb=1453222549" width="638" height="400" />
</p>

<h3 id="m_6713519142725504516gmail-React+Redux-ECMAScript2015/ES6">
  ECMAScript 2015 / ES6
</h3>

<p>
  ECMAScript 2015 is an ECMAScript standard that was ratified in June 2015. Babel is a compiler that transforms your ES2015 code into JavaScript so that the browser can read it.
</p>

<p>
  More information: <a class="m_6713519142725504516external-link" href="http://babeljs.io/" target="_blank" rel="nofollow" data-saferedirecturl="https://www.google.com/url?hl=en&q=http://babeljs.io/&source=gmail&ust=1483789009273000&usg=AFQjCNGIh175qRl19KoEKaRxvk889k0ibw">http://babeljs.io/</a>
</p>

<h3 id="m_6713519142725504516gmail-React+Redux-Webpack">
  Webpack
</h3>

<p>
  Webpack is a module bundler which compacts your JavaScript files into separate modules allowing module loading throughout your application.
</p>

<p>
  More information: <a class="m_6713519142725504516external-link" href="http://webpack.github.io/docs/what-is-webpack.html" target="_blank" rel="nofollow" data-saferedirecturl="https://www.google.com/url?hl=en&q=http://webpack.github.io/docs/what-is-webpack.html&source=gmail&ust=1483789009273000&usg=AFQjCNEx3NyKA4j153ZiOJVI7tHwdAG24w">http://webpack.github.io/docs/what-is-webpack.html</a>
</p>

<h3 id="m_6713519142725504516gmail-React+Redux-Yarn">
  Yarn
</h3>

<p>
  Yarn is a dependency manager built on top of npm allowing for consistent and reliable versioning using a lockfile.
</p>

<p>
  More information: <a class="m_6713519142725504516external-link" href="https://yarnpkg.com/" target="_blank" rel="nofollow" data-saferedirecturl="https://www.google.com/url?hl=en&q=https://yarnpkg.com/&source=gmail&ust=1483789009273000&usg=AFQjCNHiQFLLFFG3vP5xpeVcZHIDJf3XQg">https://yarnpkg.com/</a>
</p>

<h3>
  React Router
</h3>

<p>
  React Router handles the routing, keeping your UI in sync with the URL.
</p>

<p>
  More information: <a href="https://github.com/ReactTraining/react-router">https://github.com/ReactTraining/react-router</a>
</p>

<p>
  This starter currently uses hashHistory to bypass configuring a server to get the application up and running. However, if you do have a server, it is recommended to use browserHistory for cleaner URLs and support for server-side rendering.
</p>

<p>
  More information on React Router&#8217;s history: <a href="https://github.com/ReactTraining/react-router/blob/master/docs/guides/Histories.md">https://github.com/ReactTraining/react-router/blob/master/docs/guides/Histories.md</a>
</p>

<h3>
  Redux Dev Tools
</h3>

<p>
  Redux Dev Tools is a development environment tool that aids in helping with the Redux workflow. Redux dev tools allows developers to inspect every state and action, in addition to &#8220;time-traveling&#8221; by going back and cancelling actions.
</p>
</div>

<img class="wp-image-1521 size-full" src="/wp-content/uploads/2017/01/Screen-Shot-2017-01-07-at-12.36.26-PM.png" srcset="/wp-content/uploads/2017/01/Screen-Shot-2017-01-07-at-12.36.26-PM.png 2504w, /wp-content/uploads/2017/01/Screen-Shot-2017-01-07-at-12.36.26-PM-300x132.png 300w, /wp-content/uploads/2017/01/Screen-Shot-2017-01-07-at-12.36.26-PM-768x337.png 768w, /wp-content/uploads/2017/01/Screen-Shot-2017-01-07-at-12.36.26-PM-1024x450.png 1024w, /wp-content/uploads/2017/01/Screen-Shot-2017-01-07-at-12.36.26-PM-150x66.png 150w, /wp-content/uploads/2017/01/Screen-Shot-2017-01-07-at-12.36.26-PM-1300x571.png 1300w, /wp-content/uploads/2017/01/Screen-Shot-2017-01-07-at-12.36.26-PM-720x316.png 720w, /wp-content/uploads/2017/01/Screen-Shot-2017-01-07-at-12.36.26-PM-400x176.png 400w, /wp-content/uploads/2017/01/Screen-Shot-2017-01-07-at-12.36.26-PM-800x351.png 800w" sizes="(max-width: 2504px) 100vw, 2504px" />

<p class="wp-caption-text">
  Development View with Dev Tools
</p>
</div>

<p>
More information: <a href="https://github.com/gaearon/redux-devtools">https://github.com/gaearon/redux-devtools</a><br />
</p>

<div class="m_6713519142725504516gmail-codehilite">
<hr />

<h2 id="faq">
  FAQ
</h2>

<ul>
  <li>
    Toggle React Dev Tools: <kbd>CTRL</kbd> + <kbd>H</kbd>
  </li>
  <li>
    Based on <a href="https://github.com/tsaiDavid/simple-redux-boilerplate">Simple Redux Boilerplate</a>
  </li>
</ul>

<div class="project-action">
  <p>
    <p><a class="button big red  button-icon" href="https://github.com/xphong/simple-react-redux-starter"><i class="fa fa-github"></i>GITHUB</a></p><p><a class="button big blue  button-icon" href="https://github.com/xphong/marvel-app"><i class="fa fa-cloud-download"></i>EXAMPLE PROJECT</a></p>
</div>

---
id: 1547
title: Angular vs React
date: 2017-03-06T22:21:11+00:00
author: Phong Huynh
layout: post

permalink: /angular-vs-react/
dsq_thread_id:
  - "6273872229"
image: /wp-content/uploads/2017/11/Screen-Shot-2017-11-06-at-10.24.33-PM-e1510026422891.png
categories:
  - Learning
  - Posts
  - Programming
  - Web Development
tags:
  - angular
  - javascript
  - react
---
![](/wp-content/uploads/2017/11/Screen-Shot-2017-11-06-at-10.24.33-PM-e1510026422891.png)
# Demo Links

<div class="project-action">
  <p>
    <p><a class="button big red  button-icon" href="https://github.com/xphong/marvel-angular2"><i class="fa fa-github"></i>ANGULAR</a></p>
    <p><a class="button big blue  button-icon" href="https://github.com/xphong/marvel-react"><i class="fa fa-github"></i>REACT</a></p>
    <p><a class="button big green  button-icon" href="https://www.slideshare.net/PhongHuynh14/angular-vs-react-79536818"><i class="fa fa-eye"></i>SLIDE DECK</a></p>
  </p>
</div>

<p>
  This is based on a lunch and learn presentation that I created, comparing <a href="https://angular.io/">Angular</a> and <a href="https://reactjs.org/">React</a>. First, I will be going through legacy vs future applications as the purpose of the presentation was to talk about the existing issues of the current application (written in AngularJS) and to provide knowledge around the newer frameworks/libraries.
</p>

<h2>
  Legacy Front End
</h2>

<h3>
  Hard to Reuse Across Projects and Teams
</h3>

<p>
  A big issue with having a legacy front end is that it is hard to reuse across projects and teams. As with many legacy applications, there are files that no developer wants to touch. In our case, it is large view-model controllers with lots of mixed logic inside.
</p>

<h3>
  Coupled Architecture
</h3>

<p>
  Along with a tightly coupled architecture. All of the logic is inside these controllers and we depend on large controllers to work. It makes it harder to makes changes without affecting other parts.
</p>

<h3>
  State Issues and Difficult to debug
</h3>

<div>
    You also run into state issues which makes debugging really hard. Multiple controllers using multiple services, no single source of truth, and two-way binding makes it hard to follow a bug trail and find out where the underlying problem is.
</div>

<h3>
  Eventually Outdated
</h3>

<p>
  Older technology will eventually become outdated. Local communities and meetups have also moved on to topics and presentations on the newer frameworks and libraries which makes it harder to learn and improve.
</p>

<h2>
  Present Front End
</h2>

<h3>
  Re-use of components (DRY, SRP)
</h3>

<p>
  Everything is built in components and self-contained, allowing for re-use. Small components over big controllers (legacy apps). These things are on target with Don&#8217;t Repeat Yourself, Single Responsibility Principle.
</p>

<h3>
  Decoupled Architecture
</h3>

<div>
  <div>
    Loosely coupled architecture &#8211; each component has its own HTML, CSS, JS. Easy to change, maintain, grow.
  </div>
</div>

<h3>
  Faster Development
</h3>

<div>
  <div>
    Faster development with new tools, an example is hot module replacement (HMR) which allows developers to save and maintain state while seeing their code changes.
  </div>
</div>

<h3>
  Uni-directional flow
</h3>

<div>
  <div>
    Two-way binding caused problems in scalable apps. There is no two-way binding which makes debugging easier because it is easier to follow the flow of a function.
  </div>
</div>

<div>
</div>

<h2>
  Why Angular and React?
</h2>

<div>
  <div id="attachment_1554" style="width: 660px" class="wp-caption aligncenter">
    <a href="/wp-content/uploads/2017/03/longevity.jpg"><img class="wp-image-1554 size-large" src="/wp-content/uploads/2017/03/longevity-1024x768.jpg" alt="" width="650" height="488" srcset="/wp-content/uploads/2017/03/longevity.jpg 1024w, /wp-content/uploads/2017/03/longevity-300x225.jpg 300w, /wp-content/uploads/2017/03/longevity-768x576.jpg 768w, /wp-content/uploads/2017/03/longevity-150x113.jpg 150w, /wp-content/uploads/2017/03/longevity-720x540.jpg 720w, /wp-content/uploads/2017/03/longevity-400x300.jpg 400w, /wp-content/uploads/2017/03/longevity-800x600.jpg 800w" sizes="(max-width: 650px) 100vw, 650px" /></a>
  </div>
      <p class="wp-caption-text">
      Previous frameworks
    </p>
</div>

<div>
</div>

<div>
  <div id="attachment_1553" style="width: 660px" class="wp-caption aligncenter">
    <a href="/wp-content/uploads/2017/03/chart.png"><img class="wp-image-1553 size-large" src="/wp-content/uploads/2017/03/chart-1024x773.png" alt="" width="650" height="491" srcset="/wp-content/uploads/2017/03/chart-1024x773.png 1024w, /wp-content/uploads/2017/03/chart-300x226.png 300w, /wp-content/uploads/2017/03/chart-768x579.png 768w, /wp-content/uploads/2017/03/chart-150x113.png 150w, /wp-content/uploads/2017/03/chart-1300x981.png 1300w, /wp-content/uploads/2017/03/chart-720x543.png 720w, /wp-content/uploads/2017/03/chart-400x302.png 400w, /wp-content/uploads/2017/03/chart-800x604.png 800w, /wp-content/uploads/2017/03/chart.png 1328w" sizes="(max-width: 650px) 100vw, 650px" /></a>

    <p class="wp-caption-text">
      http://stateofjs.com/2016/frontend/
    </p>
  </div>

  <p>
    The reason for the comparison between Angular and React lies in this chart where they are leading in the columns heard of it, interested and used before, would use again.
  </p>
</div>

<h2>
  Overview
</h2>

<div id="attachment_1586" style="width: 810px" class="wp-caption aligncenter">
  <a href="/wp-content/uploads/2017/03/monkeyuser.png"><img class="size-full wp-image-1586" src="/wp-content/uploads/2017/03/monkeyuser.png" alt="" width="800" height="966" srcset="/wp-content/uploads/2017/03/monkeyuser.png 800w, /wp-content/uploads/2017/03/monkeyuser-248x300.png 248w, /wp-content/uploads/2017/03/monkeyuser-768x927.png 768w, /wp-content/uploads/2017/03/monkeyuser-150x181.png 150w, /wp-content/uploads/2017/03/monkeyuser-720x869.png 720w, /wp-content/uploads/2017/03/monkeyuser-400x483.png 400w" sizes="(max-width: 800px) 100vw, 800px" /></a>

  <p class="wp-caption-text">
    http://www.monkeyuser.com/2017/angular-vs-react/
  </p>
</div>

<h3>
  <a href="https://angular.io/">Angular</a>
</h3>

<ul>
  <li>
    JavaScript Framework
  </li>
  <li>
    TypeScript
  </li>
  <li>
    Final release in 2016
  </li>
  <li>
    Google
  </li>
</ul>

<div>
  <div>
    Angular is a completely new framework from the first framework (AngularJS). Angular was released in beta mode in 2015 and fully released in 2016. It is backed by Google and used in the Google AdWords platform.
  </div>
</div>

<h3>
  <a href="https://reactjs.org/">React</a>
</h3>

<ul>
  <li>
    JavaScript library
  </li>
  <li>
    JavaScript w/ JSX
  </li>
  <li>
    Released in 2013
  </li>
  <li>
    Facebook
  </li>
</ul>

<div>
  <div>
    React is a JavaScript library for building user interfaces (the view in MVC) using pure JavaScript with JSX which is a templating engine. React was released in 2013, created by Facebook, and used in the Facebook platform and also Instagram.
  </div>
</div>

<div>
</div>

<div>
  <img class="size-full wp-image-1558 aligncenter" src="/wp-content/uploads/2017/03/fight1.gif" alt="" width="392" height="259" />
</div>

<div>
</div>

<h2>
  Main Differences
</h2>

<div>
  <a href="/wp-content/uploads/2017/03/Screen-Shot-2017-11-09-at-5.53.18-PM.png"><img class="size-large wp-image-1562 aligncenter" src="/wp-content/uploads/2017/03/Screen-Shot-2017-11-09-at-5.53.18-PM-1024x620.png" alt="" width="650" height="394" srcset="/wp-content/uploads/2017/03/Screen-Shot-2017-11-09-at-5.53.18-PM-1024x620.png 1024w, /wp-content/uploads/2017/03/Screen-Shot-2017-11-09-at-5.53.18-PM-300x182.png 300w, /wp-content/uploads/2017/03/Screen-Shot-2017-11-09-at-5.53.18-PM-768x465.png 768w, /wp-content/uploads/2017/03/Screen-Shot-2017-11-09-at-5.53.18-PM-150x91.png 150w, /wp-content/uploads/2017/03/Screen-Shot-2017-11-09-at-5.53.18-PM-1300x787.png 1300w, /wp-content/uploads/2017/03/Screen-Shot-2017-11-09-at-5.53.18-PM-720x436.png 720w, /wp-content/uploads/2017/03/Screen-Shot-2017-11-09-at-5.53.18-PM-400x242.png 400w, /wp-content/uploads/2017/03/Screen-Shot-2017-11-09-at-5.53.18-PM-800x485.png 800w" sizes="(max-width: 650px) 100vw, 650px" /></a>
</div>

<h3>
  Angular
</h3>

<ul>
  <li>
    Framework
  </li>
  <li>
    Steeper learning curve
  </li>
  <li>
    Opionated
  </li>
  <li>
    Growing community
  </li>
</ul>

<h3>
  React
</h3>

<ul>
  <li>
    Library
  </li>
  <li>
    Easy to learn, difficult ecosystem
  </li>
  <li>
    More autonomy
  </li>
  <li>
    Active/strong community
  </li>
</ul>

<p>
  One of the large differences is that one is a framework and the other is a library. Angular is a large framework, everything comes in the box. Whereas React itself is just a view library. Angular has a steeper learning curve because it comes with everything (router, forms, xhr tools, tests) and React is easier to learn, but the ecosystem is hard. For React you will have to find and evaluate separate modules for use with React (Redux, thunk middleware, react-router, xhr tool).
</p>

<p>
  Angular is more opinionated, similar to Angular 1, Angular wants you to do things a certain way. This gives you less freedom, but a more consistent codebase. React gives you more choice on modules and libraries you choose to use with it.
</p>

<p>
  React has a stronger community because it has been around a bit longer. Referring to the chart before, React also has a lot more people who have used it, and would use it again compared to Angular (meaning it might have a better developer experience). Angular has a growing community, more people have been starting to use it.
</p>

<p>
  <a href="/wp-content/uploads/2017/03/fight2.gif"><img class="size-full wp-image-1559 aligncenter" src="/wp-content/uploads/2017/03/fight2.gif" alt="" width="500" height="281" /></a>
</p>

<h2>
  Code Differences
</h2>

<p>
  <a href="/wp-content/uploads/2017/03/Screen-Shot-2017-11-09-at-5.53.10-PM.png"><img class="size-large wp-image-1561 aligncenter" src="/wp-content/uploads/2017/03/Screen-Shot-2017-11-09-at-5.53.10-PM-1024x684.png" alt="" width="650" height="434" srcset="/wp-content/uploads/2017/03/Screen-Shot-2017-11-09-at-5.53.10-PM-1024x684.png 1024w, /wp-content/uploads/2017/03/Screen-Shot-2017-11-09-at-5.53.10-PM-300x201.png 300w, /wp-content/uploads/2017/03/Screen-Shot-2017-11-09-at-5.53.10-PM-768x513.png 768w, /wp-content/uploads/2017/03/Screen-Shot-2017-11-09-at-5.53.10-PM-150x100.png 150w, /wp-content/uploads/2017/03/Screen-Shot-2017-11-09-at-5.53.10-PM-1300x869.png 1300w, /wp-content/uploads/2017/03/Screen-Shot-2017-11-09-at-5.53.10-PM-720x481.png 720w, /wp-content/uploads/2017/03/Screen-Shot-2017-11-09-at-5.53.10-PM-400x267.png 400w, /wp-content/uploads/2017/03/Screen-Shot-2017-11-09-at-5.53.10-PM-800x535.png 800w" sizes="(max-width: 650px) 100vw, 650px" /></a>
</p>

<p>
  This is a basic repeater. Angular, similar to Angular 1, has its own syntax inside HTML. React uses JSX to allow HTML inside JS.
</p>

<p>
  <a href="/wp-content/uploads/2017/03/Screen-Shot-2017-11-09-at-5.54.09-PM.png"><img class="size-large wp-image-1563 aligncenter" src="/wp-content/uploads/2017/03/Screen-Shot-2017-11-09-at-5.54.09-PM-1024x564.png" alt="" width="650" height="358" srcset="/wp-content/uploads/2017/03/Screen-Shot-2017-11-09-at-5.54.09-PM-1024x564.png 1024w, /wp-content/uploads/2017/03/Screen-Shot-2017-11-09-at-5.54.09-PM-300x165.png 300w, /wp-content/uploads/2017/03/Screen-Shot-2017-11-09-at-5.54.09-PM-768x423.png 768w, /wp-content/uploads/2017/03/Screen-Shot-2017-11-09-at-5.54.09-PM-150x83.png 150w, /wp-content/uploads/2017/03/Screen-Shot-2017-11-09-at-5.54.09-PM-1300x716.png 1300w, /wp-content/uploads/2017/03/Screen-Shot-2017-11-09-at-5.54.09-PM-720x397.png 720w, /wp-content/uploads/2017/03/Screen-Shot-2017-11-09-at-5.54.09-PM-400x220.png 400w, /wp-content/uploads/2017/03/Screen-Shot-2017-11-09-at-5.54.09-PM-800x441.png 800w" sizes="(max-width: 650px) 100vw, 650px" /></a>
</p>

<div class="project-action">
  <p>
    <p><a class="button big red  button-icon" href="https://github.com/xphong/marvel-angular2"><i class="fa fa-github"></i>ANGULAR</a></p>
    <p><a class="button big blue  button-icon" href="https://github.com/xphong/marvel-react"><i class="fa fa-github"></i>REACT</a></p>
    <p><a class="button big green  button-icon" href="https://www.slideshare.net/PhongHuynh14/angular-vs-react-79536818"><i class="fa fa-eye"></i>SLIDE DECK</a></p>
  </p>
</div>

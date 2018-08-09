---
id: 1593
title: Why End-to-End Testing is Important for Your Team
date: 2017-12-16T09:20:12+00:00
author: Phong Huynh
layout: post

permalink: /end-end-testing-important-team/
dsq_thread_id:
  - "6352786865"
image: /wp-content/uploads/2017/12/1_KMFrX776LOznXpsJSfQXVw.jpeg
categories:
  - Posts
tags:
  - testing
  - learning
---
## How our team did it in 4 easy steps {#7add.graf.graf--h4.graf-after--h3.graf--subtitle}

_Originally published at <https://medium.freecodecamp.org/why-end-to-end-testing-is-important-for-your-team-cb7eb0ec1504>_

<p id="7212" class="graf graf--p graf-after--h4">
  At <a class="markup--anchor markup--p-anchor" href="https://www.hubba.com/" target="_blank" rel="noopener noreferrer" data-href="https://www.hubba.com/">Hubba</a>, our business needs are always evolving and the development speed needs to catch up with it. One of the ways to keep the team moving forward without breaking everything is End-to-end Testing (E2E).
</p>

<p id="8382" class="graf graf--p graf-after--p">
  Having a full test suite with E2E tests allows us to move quickly. It allows developers to <strong class="markup--strong markup--p-strong">push code without the worry of breaking things</strong>.<strong class="markup--strong markup--p-strong"> </strong>It enables <strong class="markup--strong markup--p-strong">releases with extra confidence</strong>.<strong class="markup--strong markup--p-strong"> </strong>And, it <strong class="markup--strong markup--p-strong">catches errors that are missed</strong> with manual regression.
</p>

### What is E2E Testing? {#e40d.graf.graf--h3.graf-after--p}

<p id="41a1" class="graf graf--p graf-after--h3">
  End-to-end testing is where you test your whole application performance from start to finish. It involves assuring that all the integrated pieces of an application function and work together as expected.
</p>

<p id="a8e2" class="graf graf--p graf-after--p">
  End-to-end tests simulate real user scenarios, essentially testing how a real user would use the application.
</p><figure id="c7cd" class="graf graf--figure graf-after--p">

<div class="aspectRatioPlaceholder is-locked">
  <div class="aspectRatioPlaceholder-fill">
  </div>

  <div class="progressiveMedia js-progressiveMedia graf-image is-canvasLoaded is-imageLoaded" data-image-id="1*KMFrX776LOznXpsJSfQXVw.jpeg" data-width="1000" data-height="794" data-action="zoom" data-action-value="1*KMFrX776LOznXpsJSfQXVw.jpeg" data-scroll="native">
    <canvas class="progressiveMedia-canvas js-progressiveMedia-canvas" width="75" height="58"></canvas><img class="progressiveMedia-image js-progressiveMedia-image aligncenter" src="https://cdn-images-1.medium.com/max/1600/1*KMFrX776LOznXpsJSfQXVw.jpeg" data-src="https://cdn-images-1.medium.com/max/1600/1*KMFrX776LOznXpsJSfQXVw.jpeg" />
  </div>
</div><figcaption class="imageCaption">

<a class="markup--anchor markup--figure-anchor" href="https://twitter.com/Una/status/850451564527591424" target="_blank" rel="noopener noreferrer" data-href="https://twitter.com/Una/status/850451564527591424">E2E Test</a></figcaption></figure>

<p id="7d83" class="graf graf--p graf-after--figure">
  An example for Hubba’s case would be an E2E test case for a user sign up.
</p>

<p id="c280" class="graf graf--p graf-after--p">
  The test would involve:
</p>

<ul class="postList">
  <li id="6c79" class="graf graf--li graf-after--p">
    Opening Hubba in a browser and searching for certain elements
  </li>
  <li id="555e" class="graf graf--li graf-after--li">
    Then performing a set of clicks and keyboard types
  </li>
  <li id="967f" class="graf graf--li graf-after--li">
    Then ensuring that a user is successfully created
  </li>
</ul>

### Why Should You Care? {#c7ec.graf.graf--h3.graf-after--li}

<p id="2011" class="graf graf--p graf-after--h3">
  At Hubba, we strongly believe in test automation. We currently write unit tests, and integration tests for our code.
</p>

<p id="57e8" class="graf graf--p graf-after--p">
  These tests are used to:
</p>

<ul class="postList">
  <li id="5e16" class="graf graf--li graf-after--p">
    specify our system
  </li>
  <li id="c8ca" class="graf graf--li graf-after--li">
    prevent bugs and regression
  </li>
  <li id="ac0c" class="graf graf--li graf-after--li">
    for continuous integration
  </li>
</ul>

<p id="c243" class="graf graf--p graf-after--li">
  Furthermore, these tests run as frequently as possible to provide feedback and to ensure that our system remains clean.
</p>

<p id="43d9" class="graf graf--p graf-after--p">
  The motivation for an additional layer of E2E tests lies in the benefits of having a fully automated test suite. These benefits include <strong class="markup--strong markup--p-strong">increasing developer velocity</strong>, as well as those previously mentioned.
</p><figure id="a322" class="graf graf--figure graf-after--p">

<div class="aspectRatioPlaceholder is-locked">
  <div class="aspectRatioPlaceholder-fill">
  </div>

  <div align="center" class="progressiveMedia js-progressiveMedia graf-image is-canvasLoaded is-imageLoaded" data-image-id="1*3NAuvsj75Ir0UNSvJf_8pg.gif" data-width="300" data-height="300" data-scroll="native">
    <img class="progressiveMedia-image js-progressiveMedia-image aligncenter" src="https://cdn-images-1.medium.com/max/1600/1*3NAuvsj75Ir0UNSvJf_8pg.gif" data-src="https://cdn-images-1.medium.com/max/1600/1*3NAuvsj75Ir0UNSvJf_8pg.gif" />
  </div>
</div></figure>

<p id="3cdc" class="graf graf--p graf-after--figure">
  E2E tests allow us to cover sections of the application that unit tests and integration tests don’t cover. This is because unit tests and integration tests only take a small piece of the application and assess that piece in isolation.
</p>

<p id="457e" class="graf graf--p graf-after--p">
  Even if these pieces work well by themselves, you don’t necessarily know if they’ll work together as a whole. Thus, having a suite of end-to-end tests on top of unit and integration tests allows us to test our entire application.
</p>

<blockquote id="4b11" class="graf graf--pullquote graf-after--p">
  <p>
    The faster code fails, the less bugs we find in QA, the faster our QA cycles are &#8211;<a class="markup--anchor markup--pullquote-anchor" href="https://medium.com/@earobinson" target="_blank" rel="noopener noreferrer" data-href="https://medium.com/@earobinson">Edward Robinson</a>
  </p>
</blockquote><figure id="b771" class="graf graf--figure graf-after--pullquote">

<div class="aspectRatioPlaceholder is-locked">
  <div class="aspectRatioPlaceholder-fill">
  </div>

  <div class="progressiveMedia js-progressiveMedia graf-image is-canvasLoaded is-imageLoaded" data-image-id="1*YdygJYCSwnXDMbMv7v5bjg.png" data-width="2880" data-height="1582" data-action="zoom" data-action-value="1*YdygJYCSwnXDMbMv7v5bjg.png" data-scroll="native">
    <canvas class="progressiveMedia-canvas js-progressiveMedia-canvas" width="75" height="40"></canvas><img class="progressiveMedia-image js-progressiveMedia-image" src="https://cdn-images-1.medium.com/max/1600/1*YdygJYCSwnXDMbMv7v5bjg.png" data-src="https://cdn-images-1.medium.com/max/1600/1*YdygJYCSwnXDMbMv7v5bjg.png" />
  </div>
</div><figcaption class="imageCaption">

<p id="f860" class="graf graf--p graf-after--figure">
  This is a testing pyramid from <a class="markup--anchor markup--p-anchor" href="https://blog.kentcdodds.com/write-tests-not-too-many-mostly-integration-5e8c7fff591c" target="_blank" rel="noopener noreferrer" data-href="https://blog.kentcdodds.com/write-tests-not-too-many-mostly-integration-5e8c7fff591c">Kent C. Dodd’s blog</a> which is a combination of the pyramids from <a class="markup--anchor markup--p-anchor" href="https://martinfowler.com/bliki/TestPyramid.html" target="_blank" rel="noopener noreferrer" data-href="https://martinfowler.com/bliki/TestPyramid.html">Martin Fowler’s blog</a> and the <a class="markup--anchor markup--p-anchor" href="https://testing.googleblog.com/2015/04/just-say-no-to-more-end-to-end-tests.html" target="_blank" rel="noopener noreferrer" data-href="https://testing.googleblog.com/2015/04/just-say-no-to-more-end-to-end-tests.html">Google Testing Blog</a>.
</p>

<p id="cc89" class="graf graf--p graf-after--p">
  The majority of your tests are at the bottom of the pyramid. As you move up the pyramid, the number of tests gets smaller. Going up the pyramid, tests get slower and more expensive on writing, running, and maintaining the tests.
</p>

<p id="2009" class="graf graf--p graf-after--p">
  We want to write a very little amount of end-to-end tests due to the fact that they are slow to run and are expected to change. This is especially important because as a startup we want to move fast.
</p>

<blockquote id="0b38" class="graf graf--blockquote graf-after--p">
  <p>
    Google often suggests a 70/20/10 split: 70% unit tests, 20% integration tests, and 10% end-to-end tests. The exact mix will be different for each team, but in general, it should retain that pyramid shape. — <a class="markup--anchor markup--blockquote-anchor" href="https://testing.googleblog.com/2015/04/just-say-no-to-more-end-to-end-tests.html" target="_blank" rel="noopener noreferrer" data-href="https://testing.googleblog.com/2015/04/just-say-no-to-more-end-to-end-tests.html">Google Testing Blog</a>
  </p>
</blockquote>

### 4 Steps to Get Started {#f019.graf.graf--h3.graf-after--blockquote}

#### 1. Choose a Testing Framework {#50d2.graf.graf--h4.graf-after--h3}

<p id="783b" class="graf graf--p graf-after--h4">
  The first action we took to get started was to evaluate various E2E testing frameworks. Our evaluation does not include looking at all of a framework’s features, but more of a high-level impression. The main criteria was to pick a framework that was easy to set up and quick to get started.
</p>

<p id="200e" class="graf graf--p graf-after--p">
  We did a quick run through of the following frameworks: <a class="markup--anchor markup--p-anchor" href="http://casperjs.org/" target="_blank" rel="noopener noreferrer" data-href="http://casperjs.org/">CasperJS</a>, <a class="markup--anchor markup--p-anchor" href="http://www.protractortest.org/#/" target="_blank" rel="noopener noreferrer" data-href="http://www.protractortest.org/#/">Protractor</a>, <a class="markup--anchor markup--p-anchor" href="http://nightwatchjs.org/" target="_blank" rel="noopener noreferrer" data-href="http://nightwatchjs.org/">Nightwatch</a>, and <a class="markup--anchor markup--p-anchor" href="https://devexpress.github.io/testcafe/" target="_blank" rel="noopener noreferrer" data-href="https://devexpress.github.io/testcafe/">Testcafe</a>.
</p>

<p id="a5b7" class="graf graf--p graf-after--p">
  We made the decision to go with TestCafe because of the easy installation and launch. It is fairly new but getting popular. Most noteworthy, it is easy to set up because it doesn’t require WebDriver.
</p>

<p id="9166" class="graf graf--p graf-after--p">
  Due to the fact that WebDriver wasn’t required, there was no need to install and maintain additional products and browser plugins. Tests can be run right after npm install. This allowed us to quickly write a proof of concept/prototype that gets us up and running.
</p><figure id="4568" class="graf graf--figure graf-after--p">

<div class="aspectRatioPlaceholder is-locked">
  <div class="aspectRatioPlaceholder-fill">
  </div>

  <div class="progressiveMedia js-progressiveMedia graf-image is-canvasLoaded is-imageLoaded" data-image-id="1*uOUpO4KsborihaHt62roHA.gif" data-width="939" data-height="590" data-action="zoom" data-action-value="1*uOUpO4KsborihaHt62roHA.gif" data-scroll="native">
    <canvas class="progressiveMedia-canvas js-progressiveMedia-canvas" width="75" height="46"></canvas><img class="progressiveMedia-image js-progressiveMedia-image" src="https://cdn-images-1.medium.com/max/1600/1*uOUpO4KsborihaHt62roHA.gif" data-src="https://cdn-images-1.medium.com/max/1600/1*uOUpO4KsborihaHt62roHA.gif" />
  </div>
</div></figure>

<p id="b5ad" class="graf graf--p graf-after--figure">
  TestCafe uses async/await and ES2017 code for the tests files. It also has an implicit auto-waits mechanism which means TestCafe automatically waits for XHR requests and page loads. So you don’t need to take care of it in your code.
</p>

<p id="0ea0" class="graf graf--p graf-after--p">
  <a class="markup--anchor markup--p-anchor" href="http://devexpress.github.io/testcafe/blog/introducing-testcafe-open-source-testing-framework.html" target="_blank" rel="noopener noreferrer" data-href="http://devexpress.github.io/testcafe/blog/introducing-testcafe-open-source-testing-framework.html">TestCafe</a>:<br /> Pure Node.js — TestCafe doesn’t use Selenium and doesn’t need plugins to run tests in real browsers. It’s built on top of Node.js so it integrates and works great with modern development tools
</p>

<p id="03cc" class="graf graf--p graf-after--p">
  No additional setup or configuration — TestCafe is all set to run tests right after <code class="markup--code markup--p-code">npm install</code>
</p>

<p id="1c70" class="graf graf--p graf-after--p">
  Complete test harness — With a single launch command, TestCafe starts the browsers, runs tests, gathers the results and generates the reports
</p>

#### 2. Pick the Important Tests {#2a8e.graf.graf--h4.graf-after--p}

<p id="58e4" class="graf graf--p graf-after--h4">
  The second step was to determine the core test cases we would write for our application.
</p>

<p id="1664" class="graf graf--p graf-after--p">
  One of our pain points revolves around QA regression testing. Our quality assurance (QA) cycle consists of manual testing that includes a regression test at the end.
</p>

<p id="dba3" class="graf graf--p graf-after--p">
  These regression tests take a long time and can potentially miss things because they are manual — which allow for human errors.
</p><figure id="e9e4" class="graf graf--figure graf-after--p">

<div class="aspectRatioPlaceholder is-locked">
  <div class="aspectRatioPlaceholder-fill">
  </div>

  <div class="progressiveMedia js-progressiveMedia graf-image is-canvasLoaded is-imageLoaded" data-image-id="1*I6DfCH4nXdWvkdsFIcd2fA.png" data-width="1502" data-height="1006" data-action="zoom" data-action-value="1*I6DfCH4nXdWvkdsFIcd2fA.png" data-scroll="native">
    <canvas class="progressiveMedia-canvas js-progressiveMedia-canvas" width="75" height="50"></canvas><img class="progressiveMedia-image js-progressiveMedia-image" src="https://cdn-images-1.medium.com/max/1600/1*I6DfCH4nXdWvkdsFIcd2fA.png" data-src="https://cdn-images-1.medium.com/max/1600/1*I6DfCH4nXdWvkdsFIcd2fA.png" />
  </div>
</div></figure>

<p id="9f9d" class="graf graf--p graf-after--figure">
  We decided on writing test cases related to those regression tests. For Hubba, this included basic — but important — functionality like user sign up/login, and creating a product.
</p>

<p id="1a97" class="graf graf--p graf-after--p">
  The initial batch of test cases:
</p>

<ul class="postList">
  <li id="4fc0" class="graf graf--li graf-after--p">
    Brand/Buyer/Influencer sign up
  </li>
  <li id="2906" class="graf graf--li graf-after--li">
    Login
  </li>
  <li id="eea5" class="graf graf--li graf-after--li">
    Create a product
  </li>
</ul>

#### 3. Integrate into a CI/CD Pipeline {#f79f.graf.graf--h4.graf-after--li}

<p id="a8f3" class="graf graf--p graf-after--h4">
  The next step was to integrate this into a Continuous Integration and Continuous Deployment, or CI/CD pipeline. The goal of adding E2E tests to our pipeline is to catch any errors or failing tests before code is shipped to production.
</p>

<p id="a36b" class="graf graf--p graf-after--p">
  We thought of two different ways of integrating this into our system. The first, having these tests run every time new code gets pushed to the project. The second, running the tests periodically.
</p><figure id="eb66" class="graf graf--figure graf-after--p">

<div class="aspectRatioPlaceholder is-locked">
  <div class="aspectRatioPlaceholder-fill">
  </div>

  <div class="progressiveMedia js-progressiveMedia graf-image is-canvasLoaded is-imageLoaded" data-image-id="1*IGPnsCHPZIMvMT9XO1xdaw.png" data-width="2352" data-height="794" data-action="zoom" data-action-value="1*IGPnsCHPZIMvMT9XO1xdaw.png" data-scroll="native">
    <canvas class="progressiveMedia-canvas js-progressiveMedia-canvas" width="75" height="25"></canvas><img class="progressiveMedia-image js-progressiveMedia-image" src="https://cdn-images-1.medium.com/max/1600/1*IGPnsCHPZIMvMT9XO1xdaw.png" data-src="https://cdn-images-1.medium.com/max/1600/1*IGPnsCHPZIMvMT9XO1xdaw.png" />
  </div>
</div></figure>

<p id="0433" class="graf graf--p graf-after--figure">
  We decided on running our E2E tests on a periodically — nightly/weekly — basis versus executing on every code change as part of the CD pipeline. The reason for this is because E2E tests are slow to run.
</p>

<p id="4186" class="graf graf--p graf-after--p">
  We don’t want these tests to slow down our pipeline since it will delay our process and cycle. For example: pull requests, merges, and deployment to different environments.
</p>

<p id="f6cf" class="graf graf--p graf-after--p">
  We wanted a set of core end to end tests we can run on a regular basis that lets us know if anything is off or broken. This is why we decided on running these tests on a nightly basis via a Jenkins <a class="markup--anchor markup--p-anchor" href="https://code.tutsplus.com/tutorials/scheduling-tasks-with-cron-jobs--net-8800" target="_blank" rel="noopener noreferrer" data-href="https://code.tutsplus.com/tutorials/scheduling-tasks-with-cron-jobs--net-8800">cron job</a>.
</p>

#### 4. Create a Proof of Concept/Prototype {#3331.graf.graf--h4.graf-after--p}

<p id="a405" class="graf graf--p graf-after--h4">
  Finally, the last step was to create a proof of concept or prototype to show the E2E tests running. Then incorporate it into our system.
</p>

<p id="589b" class="graf graf--p graf-after--p">
  Additionally, we had to decide to either completely integrate the E2E tests into our current code base or to have a one-off project that is separate from the main code base.
</p>

<p id="d24b" class="graf graf--p graf-after--p">
  For the initial prototype, we went with having a new repository isolated from our main code base and running our tests in the staging environment.
</p>

<p id="cdf5" class="graf graf--p graf-after--p">
  In conclusion, while E2E tests are very expensive to maintain, we believe that they are highly valuable as they are an excellent analogue to user behavior which helps us test basic user functionality on Hubba.
</p>

<p id="27b8" class="graf graf--p graf-after--p graf--trailing">
  <a class="markup--anchor markup--p-anchor" href="https://medium.com/@xphong" target="_blank" rel="noopener noreferrer" data-href="https://medium.com/@xphong">Phong Huynh<br /> </a>Software Developer<br /> <a class="markup--anchor markup--p-anchor" href="https://twitter.com/xphong" target="_blank" rel="noopener noreferrer" data-href="https://twitter.com/xphong">@xphong</a>
</p>

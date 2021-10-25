---
layout: post
title: Getting Started with Cypress
date: 2021-03-31T18:50:34.789Z
categories:
  - Posts
tags:
  - testing
  - javascript
---
### How our team implemented end to end testing in 4 easy steps

At [Taplytics](https://taplytics.com/), our business needs are always evolving and the speed of development needs to catch up with it. One of the ways to keep the team moving forward without breaking things along the way is End to End (E2E) Testing.

Having an additional layer and test suite with E2E tests allows us to move quickly. It allows developers to push code without worrying about breaking things. It enables releases with extra confidence. And, it catches errors that are missed during manual regression testing.

What is E2E Testing?
====================

End-to-end testing is where you test your whole application, performed from start to finish. It involves assuring that all of the integrated pieces of an application function and work together as expected.

End-to-end tests simulate real user scenarios, essentially testing how a real user would use the application.

[![](https://taplytics.com/wp-content/uploads/2021/03/wsi-imageoptim-image2-300x238.jpg)](https://twitter.com/Una/status/850451564527591424)

E2E Test.

An example for Taplytics' case would be an E2E test for a user login.

Scenario: Login with valid email address and password

    Given I am registered Taplytics user

    When I enter my email address

    And I enter my password

    Then I should be logged in

The test would involve:

-   opening the [Taplytics Login Page](https://taplytics.com/login) in a browser and searching for certain elements
-   performing a set of keyboard types and clicks
-   ensuring that a user has successfully logged in

Why Should You Care?

At Taplytics, we strongly believe in test automation. We currently write unit tests and integration tests for our code.

These tests are used to:

-   specify our system
-   prevent bugs and regression
-   perform continuous integration

Furthermore, these tests run as frequently as possible to provide feedback and to ensure that our system remains clean.

The motivation for an additional layer of E2E tests lies in the benefits of having a fully automated test suite. These benefits include increasing developer velocity, as well as other benefits previously mentioned.

[![](https://taplytics.com/wp-content/uploads/2021/03/wsi-imageoptim-image5-300x300.gif)](https://giphy.com/gifs/fail-technology-i5RWkVZzVScmY)

E2E tests allow us to cover sections of the application that unit tests and integration tests don't cover. This is because unit tests and integration tests only take a small piece of the application and assess that piece in isolation.

Even if these pieces work well by themselves, you don't necessarily know if they'll work together as a whole. Having a suite of end-to-end tests on top of unit and integration tests allows us to test our entire application.

![](https://taplytics.com/wp-content/uploads/2021/03/wsi-imageoptim-image8-300x165.jpg)

Test Automation Pyramid.

Above is a testing pyramid from[ Kent C. Dodd's blog](https://blog.kentcdodds.com/write-tests-not-too-many-mostly-integration-5e8c7fff591c) which is a combination of the pyramids from[ Martin Fowler's blog](https://martinfowler.com/bliki/TestPyramid.html) and the[ Google Testing Blog](https://testing.googleblog.com/2015/04/just-say-no-to-more-end-to-end-tests.html).

The majority of your tests are at the bottom of the pyramid. As you move up the pyramid, the number of tests gets smaller. Going up the pyramid, tests get slower and more expensive pertaining to writing, running, and maintaining the tests.

We want to write a very little amount of end-to-end tests due to the fact that they are slow to run and are suspected to change. This is especially important because as a startup we want to move fast.

> [Google often suggests ](https://testing.googleblog.com/2015/04/just-say-no-to-more-end-to-end-tests.html)a 70/20/10 split: 70% unit tests, 20% integration tests, and 10% end-to-end tests. The exact mix will be different for each team, but in general, it should retain that pyramid shape.

4 Steps to Get Started
======================

1\. Set up Cypress Testing Framework
------------------------------------

The first action we took to get started was to evaluate various E2E testing frameworks. Our evaluation does not include looking at all of a framework's features, but more of a high-level impression. The main criteria was to pick a framework that was easy to set up and quick to get started.

As a result, we made the decision to go with Cypress because of the easy installation and launch. Most noteworthy, it is easy to set up because it doesn't require WebDriver. Due to the fact that WebDriver wasn't required, there was no need to install and maintain additional products and browser plugins. Tests can be run right after an `npm install`. This allowed us to quickly write a proof of concept/prototype that gets us up and running.

Another plus is Cypress is written in JavaScript, which is our main programming language, making it easier for any developer from our team to start writing automated tests.

![](https://user-images.githubusercontent.com/1271364/31740846-7bf607f0-b420-11e7-855f-41c996040d31.gif)

Installing and running a sample test in Cypress.

[Cypress](https://docs.cypress.io/guides/overview/why-cypress#In-a-nutshell)) is a next-generation front-end testing tool built for the modern web. Cypress addresses the key pain points developers and QA engineers face when testing modern applications.

Furthermore, Cypress comes with a handful of [features](https://docs.cypress.io/guides/overview/why-cypress#Features) that make it easy and reliable to use.

These features include:

-   Time Travel
-   Debuggability
-   Automatic Waiting
-   Spies, Stubs, and Clocks
-   Network Traffic Control
-   Consistent Results
-   Screenshots and Videos
-   Cross Browser Testing

More on [Installing Cypress](https://docs.cypress.io/guides/getting-started/installing-cypress) and [Writing Your First Test.](https://docs.cypress.io/guides/getting-started/writing-your-first-test)

2\. Identify Core Test Cases and Pick the Important Tests
---------------------------------------------------------

The second step was to determine the core test cases we would write for our application.

One of our pain points revolves around QA regression testing. Our quality assurance (QA) cycle consists of manual testing that includes regression tests at the end.

These regression tests are a manual process that take a long time and can potentially miss things due to human error.

![](https://taplytics.com/wp-content/uploads/2021/03/wsi-imageoptim-image4-276x300.jpg)

We decided on writing test cases related to those regression tests. For Taplytics, this included basic -- but important functionality like user log in, creating and deleting an experiment.

The initial batch of test cases:

-   Login
-   Create an Experiment
-   Delete an Experiment

3\. Integrate into a CI/CD Pipeline
-----------------------------------

The next step was to integrate this into a Continuous Integration and Continuous Deployment, or CI/CD pipeline. The goal of adding E2E tests to our pipeline is to catch any errors or failing tests before code is shipped to production.

We tried two different ways of integrating this into our system:

1.  Running the tests every time new code gets pushed to the project.
2.  Running the tests periodically.

We preferred running our E2E tests on a periodic (hourly/nightly/weekly) basis versus executing on every code change as part of the CD pipeline. The reason for this is because E2E tests are slow (there is a way around this with [Cypress Parallelization](https://docs.cypress.io/guides/guides/parallelization)) and sometimes flaky to run. We don't want these tests to slow down our pipeline since it will delay our process and cycle (ex: pull requests, merges, deployment to different environments).

We wanted a set of core end-to-end tests we can run on a regular basis that lets us know if anything is off or broken. This is why we decided on running these tests on a nightly basis via a [Circle CI cron job](https://circleci.com/docs/2.0/workflows/#scheduling-a-workflow).

![](https://taplytics.com/wp-content/uploads/2021/03/wsi-imageoptim-nightlies2-e1617137275583.jpg)

4\. Create a Proof of Concept/Prototype
---------------------------------------

Finally, the last step was to create a proof of concept/prototype to show the E2E tests running and to incorporate it into our system.

Current State and Conclusion
============================

![](https://taplytics.com/wp-content/uploads/2021/03/wsi-imageoptim-cypress-dashboard-1024x705.jpg)

Our current state of E2E tests includes a suite of over 119 test specs over 3 different environments that run on a more hourly basis.

![](https://taplytics.com/wp-content/uploads/2021/03/wsi-imageoptim-image3-1-300x107.png)![](http://taplytics.com/wp-content/uploads/2021/03/wsi-imageoptim-image6-1-300x104.png)

Furthermore, we have also included [Visual Testing with Percy](https://percy.io/visual-testing) within our E2E tests.

In conclusion, while E2E tests are very expensive to maintain, we believe that they are highly valuable as they are an excellent analogue to user behaviour which helps us test basic user functionality on Taplytics.
---
id: 380
title: Little Things are Merely the Cause of Great Problems?
date: 2012-11-17T21:05:25+00:00
author: Phong Huynh
layout: post

permalink: /little-things-are-merely-the-cause-of-great-problems/
dsq_thread_id:
  - "4281617727"
image: /wp-content/uploads/2012/11/slider-455x270.jpg
categories:
  - Web Development
tags:
  - jQuery
  - web development
  - weekly blog
---
Have you ever had that little error that messed up your whole project? Back in programming, I remember when I used to miss variable names and the program would not run. However, Java would tell you exactly where the error is. This week I was working on my second assignment for Digital Design, which requires me to code my mock-up website from assignment 1 into html/css. I made the mistake of putting a pretty looking slider in the mock-up because I did not know this assignment was coming&#8230; So for the website I had to use a jQuery slider plugin for my slider. It was my first time using a jQuery plugin so I had no idea what I was doing. I ended up having a problem with the navigation arrows not showing up. At first, I thought it was most likely the referencing to the arrow pictures. In the provided CSS file it was:

_background: url(images/right-arrow.png); _

### The Problem

This seemed correct to me. I actually spent hours trying to google this problem, searching things like jQuery slider arrows not showing and jQuery navigation problem. After hours of googling, I finally found an example of the jQuery slider except the person used _../images/right-arrow.png_. I remember from my old Unix class that .. is the parent directory, and I realized that the css file was in a separate folder called css. This means that the reference _images/right-arrow.png_ refers to the currect directory where there is no images folder. So using _../images_ would correctly reference the navigation arrows, and of course fix the **whole problem.**

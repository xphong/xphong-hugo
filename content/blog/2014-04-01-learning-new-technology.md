---
id: 1149
title: Learning a New Technology
date: 2014-04-01T08:27:06+00:00
author: Phong Huynh
layout: post
guid: http://www.phonghuynh.ca/?p=1149
permalink: /learning-new-technology/
dsq_thread_id:
  - "2900223195"
image: /wp-content/uploads/2014/05/yeomanyo.jpg
categories:
  - Learning
  - Web Development
tags:
  - development
  - experience
  - learning
---
It&#8217;s tough learning a new technology because you have no idea where to start, so you end up procrastinating and saying that you will learn it later or &#8220;tomorrow&#8221; and then it never happens. This still happens to me, but I have found a solution! The best way to learn a new library or framework is to use it on an existing project or use it on a new project. However, it depends on the person you are, everyone is different and you may learn better through videos, tutorials, or reading without using it on a project. For myself, I have found that I have the most fun when I am learning through an interesting and exciting project.

<div class="tagline">
  <h3>
    The best way to learn a new library or framework is to use it on an existing project or use it on a new project.
  </h3>
</div>

In this post, I am going to go through the process of how I learned a few of the new and emerging technologies in web, which includes:

  * [Zurb Foundation](#Zurb)
  * [Sass with Compass](#Zurb)
  * [NPM/Bower](#Grunt)
  * [Grunt](#Grunt)
  * [Mustache/Handlebars](#Mustache)

<a id="Zurb" title="Zurb Foundation" href="http://foundation.zurb.com/" target="_blank"><img class="alignnone wp-image-1161 size-full" src="/wp-content/uploads/2014/04/foundationsasscompass.png" alt="foundationsasscompass" width="650" height="231" srcset="/wp-content/uploads/2014/04/foundationsasscompass.png 650w, /wp-content/uploads/2014/04/foundationsasscompass-300x106.png 300w, /wp-content/uploads/2014/04/foundationsasscompass-150x53.png 150w, /wp-content/uploads/2014/04/foundationsasscompass-400x142.png 400w" sizes="(max-width: 650px) 100vw, 650px" /></a>

## Zurb Foundation with Sass & Compass

I have already went through these technologies in an older blog post (<a title="Internship Learning Experience" href="http://www.phonghuynh.ca/internship-learning-experience/ " target="_blank">http://www.phonghuynh.ca/internship-learning-experience/</a>) so I won&#8217;t go into too much detail.

I got to learn Foundation with Sass and Compass through The Santa Claus Parade website, which was an awesome project that I am glad to have worked on. I was forced to learn these technologies because the team was using it as their main stack, but it was great because there is a sense of urgency that further motivates you to learn.

<a id="Grunt" title="Grunt" href="http://gruntjs.com/" target="_blank"><img class="alignnone wp-image-1166 size-full" src="/wp-content/uploads/2014/04/gruntlogo.png" alt="gruntlogo" width="550" height="200" srcset="/wp-content/uploads/2014/04/gruntlogo.png 550w, /wp-content/uploads/2014/04/gruntlogo-300x109.png 300w, /wp-content/uploads/2014/04/gruntlogo-150x54.png 150w, /wp-content/uploads/2014/04/gruntlogo-400x145.png 400w" sizes="(max-width: 550px) 100vw, 550px" /></a>

## Grunt, NPM, and Bower

It took me a while to learn Grunt, it was one of those things I have heard a lot about but I never bothered to learn because of laziness and procrastination. I remember visiting the main website, looking at the documentation I was just thinking what the fuck is going on here? So I left it off for a while.

A great project came along: <a title="ING DIRECT Infographic" href="http://www.phonghuynh.ca/portfolio/ing-direct-interactive-infographic/" target="_blank">The ING DIRECT Interactive Infographic</a>. It is a bilingual interactive app for users to see what kind of saver they are. I was told that I had to do the front end coding for this project, but I ended up doing the most of the project because there is really no need for a back end for this kind of app. The project came at wonderful  timing because Chris Coyier had just wrote a blog post on Grunt called <a title="Grunt for People Who Think Things Like Grunt are Weird and Hard" href="http://24ways.org/2013/grunt-is-not-weird-and-hard/" target="_blank">Grunt for People Who Think Things Like Grunt are Weird and Hard</a>. So I asked the team if I could use Grunt on this project since I was doing most of it myself.

Some documentation can be pretty confusing, so I find it best just to find articles that help lead you through the learning process. By the way, that article by Chris Coyier is fucking awesome. I learned most of Grunt through it so check it out!

> My mind was blown when I was using Grunt.<cite></cite>

### The Results

Grunt is an amazing tool that makes front end development easier. LiveReload (not ever having to press F5) with automated concatenation and minification, in addition image minification?! Can&#8217;t go wrong with that.

It is also an incredible tool to use in a team because all your settings are saved into files. There was a time where I had taken a day off to go skiing so one of the team members had to hop on the project. He got Grunt up and running easily because everything is all set up in the package.json, bower.json, and Gruntfile.js. All you have to do after checking out the file from version control is go into the command line:

<pre class="prettyprint linenums">npm install
bower install
grunt
</pre>

The most satisfying experience was when I ran into a previous co-worker at the FITC conference. Though I am no longer with the team, I talked to my previous co-worker and they now use Grunt on their projects.

<div class="project-action">
  <a target="_blank" class="button big blue  button-icon" href="http://apps.dashboard.ca/ing/rsptfsa_infographic/"><i class="fa fa-eye"></i>VIEW WEBSITE</a><a target="_blank" class="button big green  button-icon" href="http://www.phonghuynh.ca/portfolio/ing-direct-interactive-infographic/"><i class="fa fa-star"></i>VIEW PORTFOLIO PROJECT</a>
</div>

[<img class="alignnone size-full wp-image-1188" src="/wp-content/uploads/2014/04/handlebars.png" alt="handlebars" width="705" height="205" srcset="/wp-content/uploads/2014/04/handlebars.png 705w, /wp-content/uploads/2014/04/handlebars-300x87.png 300w, /wp-content/uploads/2014/04/handlebars-150x43.png 150w, /wp-content/uploads/2014/04/handlebars-400x116.png 400w" sizes="(max-width: 705px) 100vw, 705px" />](/wp-content/uploads/2014/04/handlebars.png){#Mustache}

## Mustache, Handlebars.js

<a title="Mustache" href="http://mustache.github.io/" target="_blank">Mustache </a>and <a title="Handlebars.js" href="http://handlebarsjs.com/" target="_blank">Handlebars</a> are templating tools that helps separate code and views allowing for dynamic generation of HTML. They are approximately the same thing, except that Handlebars has extra features such as if statements, loops and other various helpers.

I had decided to learn Mustache and Handlebars when I saw that a job I had applied to said it would be nice if you knew Handlebars. At the time, I currently had a <a href="https://github.com/xphong/ForecastVideo-app" target="_blank">learning project</a> that I was working on and after reading what templating tools do, I thought it would be very beneficial for this project. There wasn&#8217;t much logic in my application so I decided to learn Mustache.

Learning Mustache was not very hard, I think I got it down in a few hours. The <a title="Mustache Docs" href="http://mustache.github.io/mustache.5.html" target="_blank">documentation</a> is clear and understandable, but if you need something with more detail <a title="HTML templates with mustache" href="http://www.sitepoint.com/creating-html-templates-with-mustachejs/" target="_blank">this article</a> can help you out.

I have found that the main benefit to using templating tools is that you can have dynamic HTML, and prevent yourself from accessing the DOM so much.

### Code Before:

forecast.js

<pre class="prettyprint linenums"><div id="LC38" class="line">
    <span class="c1" style="font-style: italic; color: #999988;">// jQuery selectors</span>
</div>


<div id="LC39" class="line">
    <span class="nx">f</span><span class="p">.</span><span class="nx">$temperature</span> <span class="o" style="font-weight: bold;">=</span> <span class="nx">$</span><span class="p">(</span><span class="s1" style="color: #dd1144;">'#temperature'</span><span class="p">);</span>
</div>


<div id="LC40" class="line">
    <span class="nx">f</span><span class="p">.</span><span class="nx">$aTemperature</span> <span class="o" style="font-weight: bold;">=</span> <span class="nx">$</span><span class="p">(</span><span class="s1" style="color: #dd1144;">'#atemperature'</span><span class="p">);</span>
</div>


<div id="LC41" class="line">
    <span class="nx">f</span><span class="p">.</span><span class="nx">$summary</span> <span class="o" style="font-weight: bold;">=</span> <span class="nx">$</span><span class="p">(</span><span class="s1" style="color: #dd1144;">'#summary'</span><span class="p">);</span>
</div>


<div id="LC42" class="line">
    <span class="nx">f</span><span class="p">.</span><span class="nx">$icon</span> <span class="o" style="font-weight: bold;">=</span> <span class="nx">$</span><span class="p">(</span><span class="s1" style="color: #dd1144;">'#icon'</span><span class="p">);</span>
</div>


<div id="LC43" class="line">
    <span class="nx">f</span><span class="p">.</span><span class="nx">$wind</span> <span class="o" style="font-weight: bold;">=</span> <span class="nx">$</span><span class="p">(</span><span class="s1" style="color: #dd1144;">'#wind'</span><span class="p">);</span>
</div>


<div id="LC44" class="line">
    <span class="nx">f</span><span class="p">.</span><span class="nx">$pop</span> <span class="o" style="font-weight: bold;">=</span> <span class="nx">$</span><span class="p">(</span><span class="s1" style="color: #dd1144;">'#pop'</span><span class="p">);</span>
</div>


<div id="LC45" class="line">
    <span class="nx">f</span><span class="p">.</span><span class="nx">$humidity</span> <span class="o" style="font-weight: bold;">=</span> <span class="nx">$</span><span class="p">(</span><span class="s1" style="color: #dd1144;">'#humidity'</span><span class="p">);</span>
</div>


<div class="line">

</div>


<div id="LC238" class="line">
    <span class="c1" style="font-style: italic; color: #999988;">// updates the display after making the call to forecast.io</span>
</div>


<div id="LC239" class="line">
    <span class="nx">f</span><span class="p">.</span><span class="nx">updateDisplay</span> <span class="o" style="font-weight: bold;">=</span> <span class="kd" style="font-weight: bold;">function</span><span class="p">(){</span>
</div>


<div id="LC240" class="line">
      <span class="nx">f</span><span class="p">.</span><span class="nx">_temperature</span> <span class="o" style="font-weight: bold;">=</span> <span class="nx">f</span><span class="p">.</span><span class="nx">getCelsius</span><span class="p">(</span><span class="nx">f</span><span class="p">.</span><span class="nx">_currentTemperature</span><span class="p">.</span><span class="nx">temperature</span><span class="p">);</span>
</div>


<div id="LC241" class="line">
      <span class="nx">f</span><span class="p">.</span><span class="nx">_aTemperature</span> <span class="o" style="font-weight: bold;">=</span> <span class="nx">f</span><span class="p">.</span><span class="nx">getCelsius</span><span class="p">(</span><span class="nx">f</span><span class="p">.</span><span class="nx">_currentTemperature</span><span class="p">.</span><span class="nx">apparentTemperature</span><span class="p">);</span>
</div>


<div id="LC242" class="line">
      <span class="nx">f</span><span class="p">.</span><span class="nx">_summary</span> <span class="o" style="font-weight: bold;">=</span> <span class="nx">f</span><span class="p">.</span><span class="nx">_currentTemperature</span><span class="p">.</span><span class="nx">summary</span><span class="p">;</span>
</div>


<div id="LC243" class="line">
      <span class="nx">f</span><span class="p">.</span><span class="nx">_icon</span> <span class="o" style="font-weight: bold;">=</span> <span class="nx">f</span><span class="p">.</span><span class="nx">_currentTemperature</span><span class="p">.</span><span class="nx">icon</span><span class="p">;</span>
</div>


<div id="LC244" class="line">
      <span class="nx">f</span><span class="p">.</span><span class="nx">_windSpeed</span> <span class="o" style="font-weight: bold;">=</span> <span class="nx">f</span><span class="p">.</span><span class="nx">getWindSpeed</span><span class="p">(</span><span class="nx">f</span><span class="p">.</span><span class="nx">_currentTemperature</span><span class="p">.</span><span class="nx">windSpeed</span><span class="p">);</span>
</div>


<div id="LC245" class="line">
      <span class="nx">f</span><span class="p">.</span><span class="nx">_windDir</span> <span class="o" style="font-weight: bold;">=</span> <span class="nx">f</span><span class="p">.</span><span class="nx">getWindDir</span><span class="p">(</span><span class="nx">f</span><span class="p">.</span><span class="nx">_currentTemperature</span><span class="p">.</span><span class="nx">windBearing</span><span class="p">);</span>
</div>


<div id="LC246" class="line">
      <span class="nx">f</span><span class="p">.</span><span class="nx">_pop</span> <span class="o" style="font-weight: bold;">=</span> <span class="nx">f</span><span class="p">.</span><span class="nx">getPOP</span><span class="p">(</span><span class="nx">f</span><span class="p">.</span><span class="nx">_currentTemperature</span><span class="p">.</span><span class="nx">precipProbability</span><span class="p">);</span>
</div>


<div id="LC247" class="line">
      <span class="nx">f</span><span class="p">.</span><span class="nx">_humidity</span> <span class="o" style="font-weight: bold;">=</span> <span class="nx">f</span><span class="p">.</span><span class="nx">getHumidity</span><span class="p">(</span><span class="nx">f</span><span class="p">.</span><span class="nx">_currentTemperature</span><span class="p">.</span><span class="nx">humidity</span><span class="p">);</span>
</div>


<div id="LC248" class="line">

</div>


<div id="LC249" class="line">
      <span class="nx">f</span><span class="p">.</span><span class="nx">displayBG</span><span class="p">(</span><span class="nx">f</span><span class="p">.</span><span class="nx">_icon</span><span class="p">);</span>
</div>


<div id="LC250" class="line">
      <span class="nx">f</span><span class="p">.</span><span class="nx">$temperature</span><span class="p">.</span><span class="nx">html</span><span class="p">(</span><span class="nx">f</span><span class="p">.</span><span class="nx">_temperature</span> <span class="o" style="font-weight: bold;">+</span> <span class="s1" style="color: #dd1144;">'&lt;sup&gt;°&lt;/sup&gt;'</span><span class="p">);</span>
</div>


<div id="LC251" class="line">
      <span class="nx">f</span><span class="p">.</span><span class="nx">$aTemperature</span><span class="p">.</span><span class="nx">html</span><span class="p">(</span><span class="s1" style="color: #dd1144;">'&lt;strong&gt;Feels like '</span> <span class="o" style="font-weight: bold;">+</span> <span class="nx">f</span><span class="p">.</span><span class="nx">_aTemperature</span> <span class="o" style="font-weight: bold;">+</span> <span class="s1" style="color: #dd1144;">'&lt;/strong&gt;'</span><span class="p">);</span>
</div>


<div id="LC252" class="line">
      <span class="nx">f</span><span class="p">.</span><span class="nx">$summary</span><span class="p">.</span><span class="nx">html</span><span class="p">(</span><span class="nx">f</span><span class="p">.</span><span class="nx">_summary</span><span class="p">);</span>
</div>


<div id="LC253" class="line">
      <span class="nx">f</span><span class="p">.</span><span class="nx">$wind</span><span class="p">.</span><span class="nx">html</span><span class="p">(</span><span class="s1" style="color: #dd1144;">'Wind '</span> <span class="o" style="font-weight: bold;">+</span> <span class="nx">f</span><span class="p">.</span><span class="nx">_windDir</span> <span class="o" style="font-weight: bold;">+</span> <span class="s1" style="color: #dd1144;">' '</span> <span class="o" style="font-weight: bold;">+</span> <span class="nx">f</span><span class="p">.</span><span class="nx">_windSpeed</span> <span class="o" style="font-weight: bold;">+</span> <span class="s1" style="color: #dd1144;">' km/h'</span><span class="p">);</span>
</div>


<div id="LC254" class="line">
      <span class="nx">f</span><span class="p">.</span><span class="nx">$pop</span><span class="p">.</span><span class="nx">html</span><span class="p">(</span><span class="s1" style="color: #dd1144;">'P.O.P. '</span> <span class="o" style="font-weight: bold;">+</span> <span class="nx">f</span><span class="p">.</span><span class="nx">_pop</span><span class="p">);</span>
</div>


<div id="LC255" class="line">
      <span class="nx">f</span><span class="p">.</span><span class="nx">$humidity</span><span class="p">.</span><span class="nx">html</span><span class="p">(</span><span class="s1" style="color: #dd1144;">'Humidity '</span> <span class="o" style="font-weight: bold;">+</span> <span class="nx">f</span><span class="p">.</span><span class="nx">_humidity</span><span class="p">);</span>
</div>


<div id="LC256" class="line">
    <span class="p">};</span>
</div>
</pre>

index.html

<pre class="prettyprint linenums"><div id="LC21" class="line">
      <span class="nt" style="color: navy;"><div</span> <span class="na" style="color: teal;">class=</span><span class="s" style="color: #dd1144;">"container"</span><span class="nt" style="color: navy;">></span>
</div>


<div id="LC22" class="line">
        <span class="nt" style="color: navy;"><div</span> <span class="na" style="color: teal;">class=</span><span class="s" style="color: #dd1144;">"row"</span><span class="nt" style="color: navy;">></span>
</div>


<div id="LC23" class="line">
          <span class="nt" style="color: navy;"><div</span> <span class="na" style="color: teal;">class=</span><span class="s" style="color: #dd1144;">"weather-container small-12 small-centered medium-10 medium-centered large-8 large-centered columns"</span><span class="nt" style="color: navy;">></span>
</div>


<div id="LC24" class="line">
            <span class="nt" style="color: navy;"><div</span> <span class="na" style="color: teal;">class=</span><span class="s" style="color: #dd1144;">"dateicon-container row"</span><span class="nt" style="color: navy;">></span>
</div>


<div id="LC25" class="line">
              <span class="nt" style="color: navy;"><div</span> <span class="na" style="color: teal;">class=</span><span class="s" style="color: #dd1144;">"large-4 medium-4 small-8 columns"</span><span class="nt" style="color: navy;">></span>
</div>


<div id="LC26" class="line">
                <span class="nt" style="color: navy;"><h3</span> <span class="na" style="color: teal;">id=</span><span class="s" style="color: #dd1144;">"date"</span><span class="nt" style="color: navy;">></span>01/01/2014<span class="nt" style="color: navy;"></h3></span>
</div>


<div id="LC27" class="line">
                <span class="nt" style="color: navy;"><h5</span> <span class="na" style="color: teal;">id=</span><span class="s" style="color: #dd1144;">"day"</span><span class="nt" style="color: navy;">></span>MONDAY<span class="nt" style="color: navy;"></h5></span>
</div>


<div id="LC28" class="line">
                <span class="nt" style="color: navy;"><h5</span> <span class="na" style="color: teal;">id=</span><span class="s" style="color: #dd1144;">"time"</span><span class="nt" style="color: navy;">></span>
</div>


<div id="LC29" class="line">
                  <span class="nt" style="color: navy;"><span</span> <span class="na" style="color: teal;">id=</span><span class="s" style="color: #dd1144;">"hours"</span><span class="nt" style="color: navy;">></span>12<span class="nt" style="color: navy;"></span></span>
</div>


<div id="LC30" class="line">
                  <span class="nt" style="color: navy;"><span</span> <span class="na" style="color: teal;">id=</span><span class="s" style="color: #dd1144;">"point"</span><span class="nt" style="color: navy;">></span>:<span class="nt" style="color: navy;"></span></span>
</div>


<div id="LC31" class="line">
                  <span class="nt" style="color: navy;"><span</span> <span class="na" style="color: teal;">id=</span><span class="s" style="color: #dd1144;">"minutes"</span><span class="nt" style="color: navy;">></span>00<span class="nt" style="color: navy;"></span></span>
</div>


<div id="LC32" class="line">
                <span class="nt" style="color: navy;"></h5></span>
</div>


<div id="LC33" class="line">
              <span class="nt" style="color: navy;"></div></span>
</div>


<div id="LC34" class="line">
              <span class="nt" style="color: navy;"><div</span> <span class="na" style="color: teal;">class=</span><span class="s" style="color: #dd1144;">"large-2 medium-2 small-4 columns right"</span><span class="nt" style="color: navy;">></span>
</div>


<div id="LC35" class="line">
                <span class="nt" style="color: navy;"><h3</span> <span class="na" style="color: teal;">id=</span><span class="s" style="color: #dd1144;">"icon"</span> <span class="na" style="color: teal;">data-icon=</span><span class="s" style="color: #dd1144;">"R"</span><span class="nt" style="color: navy;">></h3></span>
</div>


<div id="LC36" class="line">
              <span class="nt" style="color: navy;"></div></span>
</div>


<div id="LC37" class="line">
            <span class="nt" style="color: navy;"></div></span>
</div>


<div id="LC38" class="line">
            <span class="nt" style="color: navy;"><div</span> <span class="na" style="color: teal;">class=</span><span class="s" style="color: #dd1144;">"temperature-container row"</span><span class="nt" style="color: navy;">></span>
</div>


<div id="LC39" class="line">
              <span class="nt" style="color: navy;"><h1</span> <span class="na" style="color: teal;">id=</span><span class="s" style="color: #dd1144;">"temperature"</span><span class="nt" style="color: navy;">></span>24<span class="nt" style="color: navy;"><sup></span>°<span class="nt" style="color: navy;"></sup></h1></span>
</div>


<div id="LC40" class="line">
              <span class="nt" style="color: navy;"><h2</span> <span class="na" style="color: teal;">id=</span><span class="s" style="color: #dd1144;">"summary"</span><span class="nt" style="color: navy;">></span>Rain<span class="nt" style="color: navy;"></h2></span>
</div>


<div id="LC41" class="line">
            <span class="nt" style="color: navy;"></div></span>
</div>


<div id="LC42" class="line">
            <span class="nt" style="color: navy;"><div</span> <span class="na" style="color: teal;">class=</span><span class="s" style="color: #dd1144;">"forecast-container row"</span><span class="nt" style="color: navy;">></span>
</div>


<div id="LC43" class="line">
              <span class="nt" style="color: navy;"><h4</span> <span class="na" style="color: teal;">id=</span><span class="s" style="color: #dd1144;">"atemperature"</span><span class="nt" style="color: navy;">></span>Feels like 30<span class="nt" style="color: navy;"></h4></span>
</div>


<div id="LC44" class="line">
              <span class="nt" style="color: navy;"><h5</span> <span class="na" style="color: teal;">id=</span><span class="s" style="color: #dd1144;">"pop"</span><span class="nt" style="color: navy;">></span>P.O.P 80%<span class="nt" style="color: navy;"></h5></span>
</div>


<div id="LC45" class="line">
              <span class="nt" style="color: navy;"><h5</span> <span class="na" style="color: teal;">id=</span><span class="s" style="color: #dd1144;">"wind"</span><span class="nt" style="color: navy;">></span>Wind SW 25 km/h<span class="nt" style="color: navy;"></h5></span>
</div>


<div id="LC46" class="line">
              <span class="nt" style="color: navy;"><h5</span> <span class="na" style="color: teal;">id=</span><span class="s" style="color: #dd1144;">"humidity"</span><span class="nt" style="color: navy;">></span>Humidity 80%<span class="nt" style="color: navy;"></h5></span>
</div>


<div id="LC47" class="line">
            <span class="nt" style="color: navy;"></div></span>
</div>


<div id="LC48" class="line">
          <span class="nt" style="color: navy;"></div></span>
</div>


<div id="LC49" class="line">
        <span class="nt" style="color: navy;"></div></span>
</div>


<div id="LC50" class="line">
      <span class="nt" style="color: navy;"><span class="nt" style="color: navy;"></div>
  </pre>


  <p>
    For the code before using Mustache, I had a bunch of jQuery selectors which were accessing the DOM and every time I wanted to change a DOM element I had to use the selector to change it. In addition, I also had a bunch of default placeholder text in the HTML file.</span></span>
  </p>


  <h2>
    Code After:
  </h2>


  <p>
    forecast.js
  </p>


  <pre class="prettyprint linenums">


<div id="LC343" class="line">
    <span class="c1" style="font-style: italic; color: #999988;">// updates the display after making the call to forecast.io</span>
</div>


<div id="LC344" class="line">
    <span class="nx">f</span><span class="p">.</span><span class="nx">updateDisplay</span> <span class="o" style="font-weight: bold;">=</span> <span class="kd" style="font-weight: bold;">function</span><span class="p">(){</span>
</div>


<div id="LC345" class="line">
      <span class="c1" style="font-style: italic; color: #999988;">// JSON object for data</span>
</div>


<div id="LC346" class="line">
      <span class="kd" style="font-weight: bold;">var</span> <span class="nx">data</span> <span class="o" style="font-weight: bold;">=</span> <span class="p">{</span>
</div>


<div id="LC347" class="line">
        <span class="s1" style="color: #dd1144;">'date'</span><span class="o" style="font-weight: bold;">:</span> <span class="nx">f</span><span class="p">.</span><span class="nx">getDate</span><span class="p">(),</span>
</div>


<div id="LC348" class="line">
        <span class="s1" style="color: #dd1144;">'day'</span><span class="o" style="font-weight: bold;">:</span> <span class="nx">f</span><span class="p">.</span><span class="nx">getDay</span><span class="p">(),</span>
</div>


<div id="LC349" class="line">
        <span class="s1" style="color: #dd1144;">'hour'</span><span class="o" style="font-weight: bold;">:</span> <span class="nx">f</span><span class="p">.</span><span class="nx">getHour</span><span class="p">(),</span>
</div>


<div id="LC350" class="line">
        <span class="s1" style="color: #dd1144;">'minute'</span><span class="o" style="font-weight: bold;">:</span> <span class="nx">f</span><span class="p">.</span><span class="nx">getMinute</span><span class="p">(),</span>
</div>


<div id="LC351" class="line">
        <span class="s1" style="color: #dd1144;">'icon'</span><span class="o" style="font-weight: bold;">:</span> <span class="nx">f</span><span class="p">.</span><span class="nx">displayBG</span><span class="p">(</span><span class="nx">f</span><span class="p">.</span><span class="nx">_currentTemperature</span><span class="p">.</span><span class="nx">icon</span><span class="p">),</span>
</div>


<div id="LC352" class="line">
        <span class="s1" style="color: #dd1144;">'temperature'</span><span class="o" style="font-weight: bold;">:</span> <span class="nx">f</span><span class="p">.</span><span class="nx">getCelsius</span><span class="p">(</span><span class="nx">f</span><span class="p">.</span><span class="nx">_currentTemperature</span><span class="p">.</span><span class="nx">temperature</span><span class="p">),</span>
</div>


<div id="LC353" class="line">
        <span class="s1" style="color: #dd1144;">'aTemperature'</span><span class="o" style="font-weight: bold;">:</span> <span class="s1" style="color: #dd1144;">'Feels like '</span> <span class="o" style="font-weight: bold;">+</span> <span class="nx">f</span><span class="p">.</span><span class="nx">getCelsius</span><span class="p">(</span><span class="nx">f</span><span class="p">.</span><span class="nx">_currentTemperature</span><span class="p">.</span><span class="nx">apparentTemperature</span><span class="p">),</span>
</div>


<div id="LC354" class="line">
        <span class="s1" style="color: #dd1144;">'summary'</span><span class="o" style="font-weight: bold;">:</span> <span class="nx">f</span><span class="p">.</span><span class="nx">_currentTemperature</span><span class="p">.</span><span class="nx">summary</span><span class="p">,</span>
</div>


<div id="LC355" class="line">
        <span class="s1" style="color: #dd1144;">'windSpeed'</span><span class="o" style="font-weight: bold;">:</span> <span class="nx">f</span><span class="p">.</span><span class="nx">getWindSpeed</span><span class="p">(</span><span class="nx">f</span><span class="p">.</span><span class="nx">_currentTemperature</span><span class="p">.</span><span class="nx">windSpeed</span><span class="p">)</span> <span class="o" style="font-weight: bold;">+</span> <span class="s1" style="color: #dd1144;">' km/h'</span><span class="p">,</span>
</div>


<div id="LC356" class="line">
        <span class="s1" style="color: #dd1144;">'windDir'</span><span class="o" style="font-weight: bold;">:</span> <span class="s1" style="color: #dd1144;">'Wind '</span> <span class="o" style="font-weight: bold;">+</span> <span class="nx">f</span><span class="p">.</span><span class="nx">getWindDir</span><span class="p">(</span><span class="nx">f</span><span class="p">.</span><span class="nx">_currentTemperature</span><span class="p">.</span><span class="nx">windBearing</span><span class="p">),</span>
</div>


<div id="LC357" class="line">
        <span class="s1" style="color: #dd1144;">'pop'</span><span class="o" style="font-weight: bold;">:</span> <span class="s1" style="color: #dd1144;">'P.O.P. '</span> <span class="o" style="font-weight: bold;">+</span> <span class="nx">f</span><span class="p">.</span><span class="nx">getPOP</span><span class="p">(</span><span class="nx">f</span><span class="p">.</span><span class="nx">_currentTemperature</span><span class="p">.</span><span class="nx">precipProbability</span><span class="p">),</span>
</div>


<div id="LC358" class="line">
        <span class="s1" style="color: #dd1144;">'humidity'</span><span class="o" style="font-weight: bold;">:</span> <span class="s1" style="color: #dd1144;">'Humidity '</span> <span class="o" style="font-weight: bold;">+</span> <span class="nx">f</span><span class="p">.</span><span class="nx">getHumidity</span><span class="p">(</span><span class="nx">f</span><span class="p">.</span><span class="nx">_currentTemperature</span><span class="p">.</span><span class="nx">humidity</span><span class="p">)</span>
</div>


<div id="LC359" class="line">
      <span class="p">};</span>
</div>


<div id="LC360" class="line">

</div>


<div id="LC361" class="line">
      <span class="nx">$</span><span class="p">(</span><span class="s1" style="color: #dd1144;">'.weather-container'</span><span class="p">).</span><span class="nx">html</span><span class="p">(</span><span class="nx">Mustache</span><span class="p">.</span><span class="nx">render</span><span class="p">(</span><span class="nx">template</span><span class="p">,</span> <span class="nx">data</span><span class="p">));</span>
</div>


<div id="LC362" class="line">
    <span class="p">};</span>
</div>
</pre>


  <p>
    index.html
  </p>


  <pre class="prettyprint linenums">


<div id="LC27" class="line">
      <span class="nt" style="color: navy;">&lt;div</span> <span class="na" style="color: teal;">class=</span><span class="s" style="color: #dd1144;">"container"</span><span class="nt" style="color: navy;">&gt;</span>
</div>


<div id="LC28" class="line">
        <span class="nt" style="color: navy;">&lt;div</span> <span class="na" style="color: teal;">class=</span><span class="s" style="color: #dd1144;">"row"</span><span class="nt" style="color: navy;">&gt;</span>
</div>


<div id="LC29" class="line">
          <span class="nt" style="color: navy;">&lt;div</span> <span class="na" style="color: teal;">class=</span><span class="s" style="color: #dd1144;">"weather-container small-12 small-centered medium-10 medium-centered large-8 large-centered columns"</span><span class="nt" style="color: navy;">&gt;</span>
</div>


<div id="LC30" class="line">
            <span class="nt" style="color: navy;">&lt;script </span><span class="na" style="color: teal;">type=</span><span class="s" style="color: #dd1144;">"text/html"</span> <span class="na" style="color: teal;">id=</span><span class="s" style="color: #dd1144;">"template"</span><span class="nt" style="color: navy;">&gt;</span>
</div>


<div id="LC31" class="line">
             <span class="o" style="font-weight: bold;">&lt;</span><span class="nx">div</span> <span class="kr" style="font-weight: bold;">class</span><span class="o" style="font-weight: bold;">=</span><span class="s2" style="color: #dd1144;">"dateicon-container row"</span><span class="o" style="font-weight: bold;">&gt;</span>
</div>


<div id="LC32" class="line">
                <span class="o" style="font-weight: bold;">&lt;</span><span class="nx">div</span> <span class="kr" style="font-weight: bold;">class</span><span class="o" style="font-weight: bold;">=</span><span class="s2" style="color: #dd1144;">"large-4 medium-4 small-8 columns"</span><span class="o" style="font-weight: bold;">&gt;</span>
</div>


<div id="LC33" class="line">
                  <span class="o" style="font-weight: bold;">&lt;</span><span class="nx">h3</span><span class="o" style="font-weight: bold;">&gt;</span><span class="p">{</span><span class="nx">date</span><span class="p">}</span><span class="o" style="font-weight: bold;">&lt;</span><span class="err" style="color: #a61717;">/h3&gt;</span>
</div>


<div id="LC34" class="line">
                  <span class="o" style="font-weight: bold;">&lt;</span><span class="nx">h5</span> <span class="kr" style="font-weight: bold;">class</span><span class="o" style="font-weight: bold;">=</span><span class="s2" style="color: #dd1144;">"day"</span><span class="o" style="font-weight: bold;">&gt;</span><span class="p">{</span><span class="nx">day</span><span class="p">}</span><span class="o" style="font-weight: bold;">&lt;</span><span class="err" style="color: #a61717;">/h5&gt;</span>
</div>


<div id="LC35" class="line">
                  <span class="o" style="font-weight: bold;">&lt;</span><span class="nx">h5</span><span class="o" style="font-weight: bold;">&gt;</span>
</div>


<div id="LC36" class="line">
                    <span class="o" style="font-weight: bold;">&lt;</span><span class="nx">span</span><span class="o" style="font-weight: bold;">&gt;</span><span class="p">{</span><span class="nx">hour</span><span class="p">}</span><span class="o" style="font-weight: bold;">&lt;</span><span class="err" style="color: #a61717;">/span&gt;</span>
</div>


<div id="LC37" class="line">
                    <span class="o" style="font-weight: bold;">&lt;</span><span class="nx">span</span> <span class="kr" style="font-weight: bold;">class</span><span class="o" style="font-weight: bold;">=</span><span class="s2" style="color: #dd1144;">"point"</span><span class="o" style="font-weight: bold;">&gt;:&lt;</span><span class="err" style="color: #a61717;">/span&gt;</span>
</div>


<div id="LC38" class="line">
                    <span class="o" style="font-weight: bold;">&lt;</span><span class="nx">span</span><span class="o" style="font-weight: bold;">&gt;</span><span class="p">{</span><span class="nx">minute</span><span class="p">}</span><span class="o" style="font-weight: bold;">&lt;</span><span class="err" style="color: #a61717;">/span&gt;</span>
</div>


<div id="LC39" class="line">
                  <span class="o" style="font-weight: bold;">&lt;</span><span class="err" style="color: #a61717;">/h5&gt;</span>
</div>


<div id="LC40" class="line">
                <span class="o" style="font-weight: bold;">&lt;</span><span class="err" style="color: #a61717;">/div&gt;</span>
</div>


<div id="LC41" class="line">
                <span class="o" style="font-weight: bold;">&lt;</span><span class="nx">div</span> <span class="kr" style="font-weight: bold;">class</span><span class="o" style="font-weight: bold;">=</span><span class="s2" style="color: #dd1144;">"large-2 medium-2 small-4 columns right"</span><span class="o" style="font-weight: bold;">&gt;</span>
</div>


<div id="LC42" class="line">
                  <span class="o" style="font-weight: bold;">&lt;</span><span class="nx">h3</span> <span class="kr" style="font-weight: bold;">class</span><span class="o" style="font-weight: bold;">=</span><span class="s2" style="color: #dd1144;">"icon"</span> <span class="nx">data</span><span class="o" style="font-weight: bold;">-</span><span class="nx">icon</span><span class="o" style="font-weight: bold;">=</span><span class="p">{</span><span class="nx">icon</span><span class="p">}</span><span class="o" style="font-weight: bold;">&gt;&lt;</span><span class="err" style="color: #a61717;">/h3&gt;</span>
</div>


<div id="LC43" class="line">
                <span class="o" style="font-weight: bold;">&lt;</span><span class="err" style="color: #a61717;">/div&gt;</span>
</div>


<div id="LC44" class="line">
              <span class="o" style="font-weight: bold;">&lt;</span><span class="err" style="color: #a61717;">/div&gt;</span>
</div>


<div id="LC45" class="line">
              <span class="o" style="font-weight: bold;">&lt;</span><span class="nx">div</span> <span class="kr" style="font-weight: bold;">class</span><span class="o" style="font-weight: bold;">=</span><span class="s2" style="color: #dd1144;">"temperature-container row"</span><span class="o" style="font-weight: bold;">&gt;</span>
</div>


<div id="LC46" class="line">
                <span class="o" style="font-weight: bold;">&lt;</span><span class="nx">h1</span><span class="o" style="font-weight: bold;">&gt;</span><span class="p">{</span><span class="nx">temperature</span><span class="p">}</span><span class="o" style="font-weight: bold;">&lt;</span><span class="nx">sup</span><span class="o" style="font-weight: bold;">&gt;</span><span class="err" style="color: #a61717;">°</span><span class="o" style="font-weight: bold;">&lt;</span><span class="err" style="color: #a61717;">/sup&gt;&lt;/h1&gt;</span>
</div>


<div id="LC47" class="line">
                <span class="o" style="font-weight: bold;">&lt;</span><span class="nx">h2</span><span class="o" style="font-weight: bold;">&gt;</span><span class="p">{</span><span class="nx">summary</span><span class="p">}</span><span class="o" style="font-weight: bold;">&lt;</span><span class="err" style="color: #a61717;">/h2&gt;</span>
</div>


<div id="LC48" class="line">
              <span class="o" style="font-weight: bold;">&lt;</span><span class="err" style="color: #a61717;">/div&gt;</span>
</div>


<div id="LC49" class="line">
              <span class="o" style="font-weight: bold;">&lt;</span><span class="nx">div</span> <span class="kr" style="font-weight: bold;">class</span><span class="o" style="font-weight: bold;">=</span><span class="s2" style="color: #dd1144;">"forecast-container row"</span><span class="o" style="font-weight: bold;">&gt;</span>
</div>


<div id="LC50" class="line">
                <span class="o" style="font-weight: bold;">&lt;</span><span class="nx">h4</span><span class="o" style="font-weight: bold;">&gt;</span><span class="p">{</span><span class="nx">aTemperature</span><span class="p">}</span><span class="o" style="font-weight: bold;">&lt;</span><span class="err" style="color: #a61717;">/h4&gt;</span>
</div>


<div id="LC51" class="line">
                <span class="o" style="font-weight: bold;">&lt;</span><span class="nx">h5</span><span class="o" style="font-weight: bold;">&gt;</span><span class="p">{</span><span class="nx">pop</span><span class="p">}</span><span class="o" style="font-weight: bold;">&lt;</span><span class="err" style="color: #a61717;">/h5&gt;</span>
</div>


<div id="LC52" class="line">
                <span class="o" style="font-weight: bold;">&lt;</span><span class="nx">h5</span><span class="o" style="font-weight: bold;">&gt;</span><span class="p">{</span><span class="nx">windDir</span><span class="p">}</span> <span class="p">{</span><span class="nx">windSpeed</span><span class="p">}</span><span class="o" style="font-weight: bold;">&lt;</span><span class="err" style="color: #a61717;">/h5&gt;</span>
</div>


<div id="LC53" class="line">
                <span class="o" style="font-weight: bold;">&lt;</span><span class="nx">h5</span><span class="o" style="font-weight: bold;">&gt;</span><span class="p">{</span><span class="nx">humidity</span><span class="p">}</span><span class="o" style="font-weight: bold;">&lt;</span><span class="err" style="color: #a61717;">/h5&gt;</span>
</div>


<div id="LC54" class="line">
              <span class="o" style="font-weight: bold;">&lt;</span><span class="err" style="color: #a61717;">/div&gt;</span>
</div>


<div id="LC55" class="line">
            <span class="nt" style="color: navy;">&lt;/script&gt;</span>
</div>


<div id="LC56" class="line">
          <span class="nt" style="color: navy;">&lt;/div&gt;</span>
</div>


<div id="LC57" class="line">
        <span class="nt" style="color: navy;">&lt;/div&gt;</span>
</div>


<div id="LC58" class="line">
      <span class="nt" style="color: navy;">&lt;/div&gt;</span>
</div>
</pre>


  <p>
    The code after gets rid of all the jQuery selectors and placeholder text for cleaner looking code.
  </p>


  <div class="tagline">
    <h3>
      The Results? &#8211; Got the job!
    </h3>

  </div>


  <p>
    Yep, I got the job just because I learned how to use Mustache. Kidding, there were many other factors involved, but during the interview I had mentioned that I learned Mustache because it was on the job application, I felt like that played a role in the offer. Even if I did not get the job it was still worth it to learn a technology that will help me in the future.
  </p>


  <div class="project-action">
    <a target="_blank" class="button big blue  button-icon" href="http://forecastvideo.phonghuynh.ca/"><i class="fa fa-eye"></i>VIEW WEBSITE</a><a target="_blank" class="button big red  button-icon" href="https://github.com/xphong/forecastvideo-app-v2"><i class="fa fa-github"></i>VIEW GITHUB REPO</a>

  </div>


  <h2>
    Conclusion
  </h2>


  <p>
    In conclusion, learning a new technology is fun and can be very beneficial. Personally, I find it even more fun when you are learning it with a cool project.
  </p>

---
id: 1149
title: Learning a New Technology
date: 2014-04-01T08:27:06+00:00
author: Phong Huynh
layout: post

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
![](/wp-content/uploads/2014/05/yeomanyo.jpg)
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

I have already went through these technologies in an older blog post (<a title="Internship Learning Experience" href="https://phong.io/blog/2013-10-20-internship-learning-experience/ " target="_blank">https://phong.io/blog/2013-10-20-internship-learning-experience/</a>) so I won&#8217;t go into too much detail.

I got to learn Foundation with Sass and Compass through The Santa Claus Parade website, which was an awesome project that I am glad to have worked on. I was forced to learn these technologies because the team was using it as their main stack, but it was great because there is a sense of urgency that further motivates you to learn.

<a id="Grunt" title="Grunt" href="http://gruntjs.com/" target="_blank"><img class="alignnone wp-image-1166 size-full" src="/wp-content/uploads/2014/04/gruntlogo.png" alt="gruntlogo" width="550" height="200" srcset="/wp-content/uploads/2014/04/gruntlogo.png 550w, /wp-content/uploads/2014/04/gruntlogo-300x109.png 300w, /wp-content/uploads/2014/04/gruntlogo-150x54.png 150w, /wp-content/uploads/2014/04/gruntlogo-400x145.png 400w" sizes="(max-width: 550px) 100vw, 550px" /></a>

## Grunt, NPM, and Bower

It took me a while to learn Grunt, it was one of those things I have heard a lot about but I never bothered to learn because of laziness and procrastination.

A great project came along: The ING DIRECT Interactive Infographic. It is a bilingual interactive app for users to see what kind of saver they are. I was told that I had to do the front end coding for this project, but I ended up doing the most of the project because there is really no need for a back end for this kind of app. The project came at wonderful  timing because Chris Coyier had just wrote a blog post on Grunt called <a title="Grunt for People Who Think Things Like Grunt are Weird and Hard" href="http://24ways.org/2013/grunt-is-not-weird-and-hard/" target="_blank">Grunt for People Who Think Things Like Grunt are Weird and Hard</a>. So I asked the team if I could use Grunt on this project since I was doing most of it myself.

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

[<img class="alignnone size-full wp-image-1188" src="/wp-content/uploads/2014/04/handlebars.png" alt="handlebars" width="705" height="205" srcset="/wp-content/uploads/2014/04/handlebars.png 705w, /wp-content/uploads/2014/04/handlebars-300x87.png 300w, /wp-content/uploads/2014/04/handlebars-150x43.png 150w, /wp-content/uploads/2014/04/handlebars-400x116.png 400w" sizes="(max-width: 705px) 100vw, 705px" />](/wp-content/uploads/2014/04/handlebars.png){#Mustache}

## Mustache, Handlebars.js

<a title="Mustache" href="http://mustache.github.io/" target="_blank">Mustache </a>and <a title="Handlebars.js" href="http://handlebarsjs.com/" target="_blank">Handlebars</a> are templating tools that helps separate code and views allowing for dynamic generation of HTML. They are approximately the same thing, except that Handlebars has extra features such as if statements, loops and other various helpers.

I had decided to learn Mustache and Handlebars when I saw that a job I had applied to said it would be nice if you knew Handlebars. At the time, I currently had a <a href="https://github.com/xphong/ForecastVideo-app" target="_blank">learning project</a> that I was working on and after reading what templating tools do, I thought it would be very beneficial for this project. There wasn&#8217;t much logic in my application so I decided to learn Mustache.

Learning Mustache was not very hard, I think I got it down in a few hours. The <a title="Mustache Docs" href="http://mustache.github.io/mustache.5.html" target="_blank">documentation</a> is clear and understandable, but if you need something with more detail <a title="HTML templates with mustache" href="http://www.sitepoint.com/creating-html-templates-with-mustachejs/" target="_blank">this article</a> can help you out.

I have found that the main benefit to using templating tools is that you can have dynamic HTML, and prevent yourself from accessing the DOM so much.

### Code Before:

forecast.js:
```
  // jQuery selectors
  f.$temperature = $('#temperature');
  f.$aTemperature = $('#atemperature');
  f.$summary = $('#summary');
  f.$icon = $('#icon');
  f.$wind = $('#wind');
  f.$pop = $('#pop');
  f.$humidity = $('#humidity');
  // updates the display after making the call to forecast.io
  f.updateDisplay = function(){
    f._temperature = f.getCelsius(f._currentTemperature.temperature);
    f._aTemperature = f.getCelsius(f._currentTemperature.apparentTemperature);
    f._summary = f._currentTemperature.summary;
    f._icon = f._currentTemperature.icon;
    f._windSpeed = f.getWindSpeed(f._currentTemperature.windSpeed);
    f._windDir = f.getWindDir(f._currentTemperature.windBearing);
    f._pop = f.getPOP(f._currentTemperature.precipProbability);
    f._humidity = f.getHumidity(f._currentTemperature.humidity);
    f.displayBG(f._icon);
    f.$temperature.html(f._temperature + '<sup>°</sup>');
    f.$aTemperature.html('<strong>Feels like ' + f._aTemperature + '</strong>');
    f.$summary.html(f._summary);
    f.$wind.html('Wind ' + f._windDir + ' ' + f._windSpeed + ' km/h');
    f.$pop.html('P.O.P. ' + f._pop);
    f.$humidity.html('Humidity ' + f._humidity);
  };
```

index.html:
```
  <div class="container">
    <div class="row">
      <div class="weather-container small-12 small-centered medium-10 medium-centered large-8 large-centered columns">
        <div class="dateicon-container row">
          <div class="large-4 medium-4 small-8 columns">
            <h3 id="date">01/01/2014</h3>
            <h5 id="day">MONDAY</h5>
            <h5 id="time">
              <span id="hours">12</span>
              <span id="point">:</span>
              <span id="minutes">00</span>
            </h5>
          </div>
          <div class="large-2 medium-2 small-4 columns right">
            <h3 id="icon" data-icon="R"></h3>
          </div>
        </div>
        <div class="temperature-container row">
          <h1 id="temperature">24<sup>°</sup></h1>
          <h2 id="summary">Rain</h2>
        </div>
        <div class="forecast-container row">
          <h4 id="atemperature">Feels like 30</h4>
          <h5 id="pop">P.O.P 80%</h5>
          <h5 id="wind">Wind SW 25 km/h</h5>
          <h5 id="humidity">Humidity 80%</h5>
        </div>
      </div>
    </div>
  </div>
```

  <p>
    For the code before using Mustache, I had a bunch of jQuery selectors which were accessing the DOM and every time I wanted to change a DOM element I had to use the selector to change it. In addition, I also had a bunch of default placeholder text in the HTML file.</span></span>
  </p>


  <h2>
    Code After:
  </h2>


  <p>
    forecast.js:
  </p>

```
  // updates the display after making the call to forecast.io
  f.updateDisplay = function(){
    // JSON object for data
    var data = {
      'date': f.getDate(),
      'day': f.getDay(),
      'hour': f.getHour(),
      'minute': f.getMinute(),
      'icon': f.displayBG(f._currentTemperature.icon),
      'temperature': f.getCelsius(f._currentTemperature.temperature),
      'aTemperature': 'Feels like ' + f.getCelsius(f._currentTemperature.apparentTemperature),
      'summary': f._currentTemperature.summary,
      'windSpeed': f.getWindSpeed(f._currentTemperature.windSpeed) + ' km/h',
      'windDir': 'Wind ' + f.getWindDir(f._currentTemperature.windBearing),
      'pop': 'P.O.P. ' + f.getPOP(f._currentTemperature.precipProbability),
      'humidity': 'Humidity ' + f.getHumidity(f._currentTemperature.humidity)
    };
    $('.weather-container').html(Mustache.render(template, data));
  };
```


  <p>
    index.html:
  </p>
```
  <div class="container">
    <div class="row">
      <div class="weather-container small-12 small-centered medium-10 medium-centered large-8 large-centered columns">
        <script type="text/html" id="template">
          <div class="dateicon-container row">
            <div class="large-4 medium-4 small-8 columns">
              <h3>{{date}}</h3>
              <h5 class="day">{{day}}</h5>
              <h5>
                <span>{{hour}}</span>
                <span class="point">:</span>
                <span>{{minute}}</span>
              </h5>
            </div>
            <div class="large-2 medium-2 small-4 columns right">
              <h3 class="icon" data-icon={{icon}}></h3>
            </div>
          </div>
          <div class="temperature-container row">
            <h1>{{temperature}}<sup>°</sup></h1>
            <h2>{{summary}}</h2>
          </div>
          <div class="forecast-container row">
            <h4>{{aTemperature}}</h4>
            <h5>{{pop}}</h5>
            <h5>{{windDir}} {{windSpeed}}</h5>
            <h5>{{humidity}}</h5>
          </div>
        </script>
      </div>
    </div>
  </div>
```



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
  <a target="_blank" class="button big red  button-icon" href="https://github.com/xphong/forecastvideo-app-v2"><i class="fa fa-github"></i>VIEW GITHUB REPO</a>

</div>


<h2>
  Conclusion
</h2>


<p>
  In conclusion, learning a new technology is fun and can be very beneficial. Personally, I find it even more fun when you are learning it with a cool project.
</p>

---
id: 199
title: Unix Commands 2
date: 2012-03-09T00:09:12+00:00
author: Phong Huynh
layout: post
guid: http://www.phonghuynh.ca/?p=199
permalink: /unix-commands-2/
dsq_thread_id:
  - "3086741844"
categories:
  - Programming
tags:
  - blog
  - unix
---
<div>
  Unix Assignment problem for Operating Systems class
</div>

<div>
  <p>
     <a href="http://www.phonghuynh.ca/wp-content/uploads/2012/03/Paldo-logo.png"><img class="size-full wp-image-417 aligncenter" title="Unix" src="http://www.phonghuynh.ca/wp-content/uploads/2012/03/Paldo-logo.png" alt="Unix" width="150" height="116" /></a>
  </p>
</div>

<div>
  <p>
    <span style="text-decoration: underline;">Problem:</span>
  </p>
</div>

<div>
  <p>
    Display the calendar for the winter season (November, December, January, February, March and
  </p>
</div>

<div>
  <p>
    April).
  </p>
</div>

<div>
</div>

<div>
  <p>
    <span style="text-decoration: underline;">Impact:</span>
  </p>
</div>

<div>
  <p>
    The calendar dates need to be displayed at the same time
  </p>
</div>

<div>
  <p>
    &nbsp;
  </p>
</div>

<div>
  <p>
    <span style="text-decoration: underline;">Solution:</span>
  </p>
</div>

<div>
  <p>
    <em><span lang="EN-US">cal -3 12 2012 | cal -3 3 2012</span></em>
  </p>
</div>

<div>
  <p>
    does not work because piping will cause the calendar to only show the January to april months
  </p>
</div>

<div>
  <p>
    &nbsp;
  </p>
</div>

<div>
  <p>
    <em><span lang="EN-US">cal -3 12 2012 ; cal -3 3 2012</span></em>
  </p>
</div>

<div>
  <p>
    works because it inputs both the commands into the system which shows all of the calendar months for the winter season
  </p>
</div>

<div>
</div>
---
id: 197
title: Unix Commands
date: 2012-03-03T18:06:07+00:00
author: Phong Huynh
layout: post
guid: http://www.phonghuynh.ca/?p=197
permalink: /unix-commands/
dsq_thread_id:
  - "3015911379"
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
  <a href="/wp-content/uploads/2012/03/Tux.svg_.png"><img class="size-medium wp-image-419 aligncenter" title="Unixp" src="/wp-content/uploads/2012/03/Tux.svg_-258x300.png" alt="Unixp" width="258" height="300" srcset="/wp-content/uploads/2012/03/Tux.svg_-258x300.png 258w, /wp-content/uploads/2012/03/Tux.svg_.png 500w" sizes="(max-width: 258px) 100vw, 258px" /></a>
</div>

<div>
  <p>
    <span style="text-decoration: underline;">Problem:</span>
  </p>
</div>

<div>
  <p>
    Display the current time (format: hours:minutes:seconds (can be 24-hour clock)) Save it to the end of the file caldate.txt.
  </p>
</div>

<div>
  <p>
    &nbsp;
  </p>
</div>

<div>
  <p>
    <span style="text-decoration: underline;">Impact:</span>
  </p>
</div>

<div>
  <p>
    The time will not save to the file caldate.txt
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
    Pipe the cat command to the date command in order to save to the file caldate.txt
  </p>
</div>

<div>
  <p>
    &nbsp;
  </p>
</div>

<div>
  <p>
    <em><span lang="EN-US">date +”%T” | cat >> caldate.txt</span></em>
  </p>
</div>

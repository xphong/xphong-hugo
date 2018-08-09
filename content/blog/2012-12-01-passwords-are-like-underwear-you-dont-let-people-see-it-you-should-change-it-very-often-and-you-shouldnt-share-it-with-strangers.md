---
id: 435
title: '“Passwords are like underwear: you don’t let people see it, you should change it very often, and you shouldn&#8217;t share it with strangers.”'
date: 2012-12-01T14:08:01+00:00
author: Phong Huynh
layout: post
guid: http://www.phonghuynh.ca/?p=435
permalink: /passwords-are-like-underwear-you-dont-let-people-see-it-you-should-change-it-very-often-and-you-shouldnt-share-it-with-strangers/
dsq_thread_id:
  - "3985166948"
categories:
  - Programming
  - Web Development
tags:
  - exploits
  - hackers
  - plugins
  - presentation
  - security
  - web development
  - weekly blog
---
## [<img class="aligncenter" title="Password Icon" src="http://www.phonghuynh.ca/wp-content/uploads/2012/12/Password.svg_.png" alt="Password Icon" width="200" height="200" />](http://www.phonghuynh.ca/wp-content/uploads/2012/12/Password.svg_.png)

I have been meaning to talk about security and hackers for while, but I was waiting for a time when I have nothing to talk about, like today! I recently have had some hack attempts on this website. My first thought was people actually visit my website? My second thought was time to ban that asshole. It was a good thing that I installed a security plugin because it shows all the incorrect login attempts on the back-end on this website. Additionally, it shows their IP address so I was able to permanently ban the person making these login attempts since the default ban only bans the person for about 15 minutes. The hack attempt was pretty stupid, they tried the generic logins like admin &#8211; admin, admin &#8211; password so I was not too worried, but it did make me paranoid enough to change my password and username.

### Exploits

What actually got me worried was this exploit using Uploadify.php. Security warns me about 404 errors so I know which URLs are being attempted on my website.

Example: /wp-content/themes/wp-eden/admin/uploadify/uploadify.php

At first I obviously had no idea what this was, so I searched it up. Uploadify is a file that allows people to upload multiple files to your website. It is used a lot, especially with wordpress, but apparently there is an exploit in the code that lets hackers upload scripts to your website. From there they can use the scripts to control your website. To not get hacked by this exploit, there is a list of plugins and themes that use uploadify, so just stay away from those plugins and themes.

<p style="text-align: center;">
  <a href="http://www.phonghuynh.ca/wp-content/uploads/2012/12/200px-Wordpress.svg_.png"><img class="aligncenter" title="Wordpress Logo" src="http://www.phonghuynh.ca/wp-content/uploads/2012/12/200px-Wordpress.svg_.png" alt="Wordpress Logo" width="200" height="200" /></a>
</p>

### Presentation

My presentation for Project Management is coming up soon, and it is starting to stress me out. I don&#8217;t think I&#8217;m too bad with presenting, anxiety and hyperhidrosis just seems to always screw me over during presentations and even small discussions. If you are wondering what hyperdirosis is, it is a simply a condition that makes a person sweat randomly. It is usually triggered by something, I am still trying to figure out what&#8230; &#8220;A common complaint of patients is they get nervous because they sweat, then sweat more because they are nervous.&#8221; (Wiki)

<div>
</div>
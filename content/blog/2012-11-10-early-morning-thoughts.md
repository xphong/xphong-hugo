---
id: 326
title: Early Morning Thoughts
date: 2012-11-10T13:59:06+00:00
author: Phong Huynh
layout: post

permalink: /early-morning-thoughts/
dsq_thread_id:
  - "2979833530"
categories:
  - Web Development
tags:
  - web development
  - weekly blog
  - school
---
[<img class="size-full wp-image-421 aligncenter" title="SQL" src="/wp-content/uploads/2012/11/Sql_database_shortcut_icon_.png" alt="SQL" width="128" height="128" />](/wp-content/uploads/2012/11/Sql_database_shortcut_icon_.png)

### ASP.NET

The assignment asked to make two separate .aspx pages. The first page uses a data bound control loaded with information from a table in the database. When the user clicks on the data, it essentially loads the full details of the selected data. The second page uses templates to allow for INSERT, UPDATE, and DELETE for the table. I spent all day googling how to create a button that dynamically loads another data bound control without using the autogenerate button. The problem here was that I was relying too much on google and not on my own thoughts. In any case, most of the google results I kept getting had things like loading the database programmatically using a different and old way (_SQLConnection myConn = new SqlConnection();)_ which we never learned. I just went to sleep that night because I still had two more days to finish it. The next morning, for some reason, I woke up at 5am and could not fall back asleep. It was like my body was telling me something haha, I had 3 more hours until work so I decided to work on the ASP.NET assignment. The thought just came to me, what if I just make another data bound control, make it invisible, and make it so that it only shows the row I want when the user clicks on the record. That’s what I ended up doing and it worked.

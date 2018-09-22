---
layout: post
title: Why Migrate from WordPress to a Static Site Generator
date: 2018-09-22T13:02:47.806Z
categories:
  - Learning
  - Posts
  - Web Development
tags:
  - static site
  - wordpress
  - migration
  - portfolio
---
![Migration](/img/uploads/barth-bailey-534083-unsplash.jpg)

The initial choice for WordPress was because of the content management system (CMS) and ease of use. WordPress also powers more than [31% of the web](https://wordpress.org/about/features/).

The key reasons to migrate from WordPress to a static site generator like Hugo are **cost savings and speed.** Other reasons include security, less complex customizations, and scalability/maintainability.

## Cost Savings

One of the main reasons for migration would be cost. With WordPress you will need a domain, and web hosting which includes a web server, PHP and a database. Most hosting plans will give you a good deal for the first year but after a couple years, it does get pricey.

For me, because I had hosting for many years this came out to CAD $14.99/year for the domain and CAD $120/year for hosting. With a static site, the **costs go down to $0/year or only $14.99/year** if you want a custom domain. Because static sites only require HTML/CSS and JavaScript you can host your website for free using platforms like [GitHub Pages](https://pages.github.com/) or [Netlify](https://www.netlify.com/).

## Speed

Another reason to switch to a static site is page load speed. WordPress websites take longer to load because the pages are dynamically loaded. Whenever a user loads a WordPress website, it has to build the page from a template, grab the content and data from the database and then send the completed page to the user.

With a static site generator, you are hosting the static files with the content already inside of it. Whenever a user loads a static website, the content is already on the file so all the server needs to do is find the matching file and display it. The improves the page load speed significantly.

Below are tests I ran using [Pingdom Website Speed Test](https://tools.pingdom.com/) on my WordPress and static site.

**WordPress Test:**

![WordPress Performance](/img/uploads/screen-shot-2018-08-09-at-6.59.31-am.png)

**Static Site Test:**

![Static Site Performance](/img/uploads/screen-shot-2018-08-09-at-6.59.12-am.png)

## Security

With static sites, there is no dynamic data storage which means there's nothing a hacker can exploit. With WordPress, there are known exploits and with every WordPress plugin you install introduces a potential access point for hackers.

# Conclusion

In conclusion, moving to a static site from a dynamic site like WordPress has many benefits including cost savings, quick page load times, and increased security.

Check out Part 2 (In Progress) for steps on how to get started with the migration.

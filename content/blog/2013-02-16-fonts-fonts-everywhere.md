---
id: 468
title: Fonts. Fonts Everywhere.
date: 2013-02-16T09:35:53+00:00
author: Phong Huynh
layout: post

permalink: /fonts-fonts-everywhere/
dsq_thread_id:
  - "2984176081"
image: /wp-content/uploads/2013/02/phpinterfacenew-455x270.jpg
categories:
  - Web Development
tags:
  - fonts
  - google web fonts
  - web development
  - weekly blog
---
### Web Fonts

In my PHP group project I have been given the role of being the designer for the interface of the website. Since we are using CSS3 I decided that using font-face will help with the design, and it did, tremendously.

Here is the first version of the interface:

[<img class="alignnone size-full wp-image-470" src="/wp-content/uploads/2013/02/phpinterfaceold.jpg" alt="Old PHP Interface " width="500" height="416" srcset="/wp-content/uploads/2013/02/phpinterfaceold.jpg 500w, /wp-content/uploads/2013/02/phpinterfaceold-300x249.jpg 300w" sizes="(max-width: 500px) 100vw, 500px" />](/wp-content/uploads/2013/02/phpinterfaceold.jpg)

Now here is the redesign using web fonts (Actual link &#8211; <a title="http://shopright.phonghuynh.ca" href="http://shopright.phonghuynh.ca" target="_blank">http://shopright.phonghuynh.ca</a>):

[<img class="alignnone size-full wp-image-471" src="/wp-content/uploads/2013/02/phpinterfacenew.jpg" alt="New PHP Interface" width="500" height="396" srcset="/wp-content/uploads/2013/02/phpinterfacenew.jpg 500w, /wp-content/uploads/2013/02/phpinterfacenew-300x237.jpg 300w" sizes="(max-width: 500px) 100vw, 500px" />](/wp-content/uploads/2013/02/phpinterfacenew.jpg)

&nbsp;

Also with some colour changes but we are talking about fonts here. I think most would agree that the redesign looks better and that the fonts do make a big difference. The only problem is that really old versions of browsers do not support web fonts.

The redesign uses the fonts Bebas Neue for headings/navigation and Open Sans for paragraph text.

### @font-face

To use web fonts you can use either the @font-face code or Google Web Fonts.

The @font-face code looks like this:

<pre><em>@font-face {</em>
<em> font-family: 'BebasNeueRegular';</em>
<em> src: url('../fonts/BebasNeue-webfont.eot'); /* IE9 Compatibility Modes */</em>
<em> src: url('../fonts/BebasNeue-webfont.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */</em>
<em> url('../fonts/BebasNeue-webfont.woff') format('woff'), /* Modern Browsers */</em>
<em> url('../fonts/BebasNeue-webfont.ttf') format('truetype'), /* Safari, Android, iOS */</em>
<em> url('../fonts/BebasNeue-webfont.svg#BebasNeueRegular') format('svg'); /* Legacy iOS */</em>
<em> font-weight: normal;</em>
<em> font-style: normal;</em>
<em>}</em></pre>

and to use the font

<pre><em>p {
     font-family: 'BebasNeueRegular';
}</em></pre>

you would simply copy this  line into wherever you want to use the font. The code is kind of tedious to write but you will most likely never type it out yourself because there are generators and websites like <a title="Font Squirrel" href="http://www.fontsquirrel.com" target="_blank">FontSquirrel </a>where you can download the webfont kit that includes the code.

##### Google Web Fonts

Another way to use web fonts is with Google Web Fonts. Their way is much easier because the font is stored on their server. In addition, <a title="Google Web Fonts" href="http://www.google.com/webfonts/#" target="_blank">Google Web Fonts </a>is open source and has an awesome API.

There are three different ways to add the font using Google Web Fonts, the most common is @import.

```
@import url(http://fonts.googleapis.com/css?family=Open+Sans);
p {
  font-family: 'Open Sans', sans-serif;
}
```

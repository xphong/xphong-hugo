---
id: 215
title: Java Servlet
date: 2012-04-14T10:14:45+00:00
author: Phong Huynh
layout: post
guid: http://www.phonghuynh.ca/?p=215
permalink: /java-servlet/
dsq_thread_id:
  - "3111045110"
image: /wp-content/uploads/2012/04/Java-363x270.png
categories:
  - Programming
tags:
  - blog
  - servlet
---
This is an error I had while working with a java servlet assignment for my Distributed Computing using Java class. I had to receive parameters entered by a user and then output the receipt. However, I was unable to receive the parameters correctly.

<img class="alignnone" title="Pizza Order" src="http://3.bp.blogspot.com/-4KJyZBA6C7w/T3vhMY8WX3I/AAAAAAAAAGk/bkcY8MYunzY/s320/lab5.jpg" alt="Pizza Order" width="143" height="320" />
  
<span style="text-decoration: underline;">Problem:</span>
  
Not receiving parameters entered by a user on a webpage.

Code:
  
_String sz = req.getParameter(&#8220;size&#8221;);_
  
 _String[] tops = req.getParameterValues(&#8220;top&#8221;);_
  
 _String ids = req.getParameter(&#8220;ID&#8221;);_
  
 _int id = Integer.parseInt(ids);_
  
 _String name = req.getParameter(&#8220;Name&#8221;);_
  
 _String address = req.getParameter(&#8220;Shipping Address&#8221;);_

_res.setContentType(&#8220;text/html&#8221;);_
  
 _out.println(&#8220;<html><head><title>Order Confirmation</title></head><body>&#8221;);_
  
 _out.println(&#8220;Your order for a &#8220;);_
  
 _out.println(sz + &#8221; inch with &#8220;);_
  
 _for(int i = 0; i < tops.length; i++)_
  
 _{_
  
 _out.println(tops[i] + &#8221; &#8220;);_
  
 _}_
  
 _out.println(&#8220;<br>is on the way!<br>&#8221;);_
  
 _out.println(&#8220;Shipping Address: &#8220;+ address);_
  
 _out.println(&#8220;<p></p>Click <a href=&#8217;orderform.html&#8217;>here</a> to order another&#8221;);_
  
 _out.println(&#8220;</body></html>&#8221;);_
  
 _out.close();_

_}_
  
<span style="text-decoration: underline;">Impact:</span>
  
_Unable to perform operations or calculations when using user-entered values._

<span style="text-decoration: underline;">Solution:</span>
  
Have to put the parameters you want to receive inside form tags inside the java servlet page.

_<form name=&#8221;form1&#8243; action=&#8221;order.html&#8221;>_
  
 _<P>size:</p>_

_<input type=&#8221;radio&#8221; name=&#8221;size&#8221; value=&#8221;9&#8243; checked=&#8221;checked&#8221; />9_
  
 _<input type=&#8221;radio&#8221; name=&#8221;size&#8221; value=&#8221;12&#8243; />12_

_<p> Topping</P>_
  
 _<select name=&#8221;top&#8221; multiple=&#8221;multiple&#8221;>_
  
 _<option value=&#8221;Mushroom&#8221;>Mushroom</option>_
  
 _<option value=&#8221;Green Pepper&#8221;>Green Pepper</option>_
  
 _<option value=&#8221;Tomato&#8221;>Tomato</option>_
  
 _</select>_
  
 _<p></p>_
  
 _<p>Customer ID:</p>_
  
 _<input type=&#8221;text&#8221; name=&#8221;ID&#8221; value=&#8221;&#8221; />_
  
 _<p>Customer Name:</p>_
  
 _<input type=&#8221;text&#8221; name=&#8221;Name&#8221; value=&#8221;&#8221; />_
  
 _<p>Customer Address:</p>_
  
 _<input type=&#8221;text&#8221; name=&#8221;Shipping Address&#8221; value=&#8221;&#8221; />_

 _<p></p><input type=&#8221;submit&#8221; value=&#8221;Submit Order&#8221; name=&#8221;Submit&#8221; />_
  
 _</form>_

&nbsp;
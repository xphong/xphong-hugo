---
id: 215
title: Java Servlet
date: 2012-04-14T10:14:45+00:00
author: Phong Huynh
layout: post

permalink: /java-servlet/
dsq_thread_id:
  - "3111045110"
image: /wp-content/uploads/2012/04/Java-363x270.png
categories:
  - Programming
tags:
  - blog
  - servlet
  - school
---
This is an error I had while working with a java servlet assignment for my Distributed Computing using Java class. I had to receive parameters entered by a user and then output the receipt. However, I was unable to receive the parameters correctly.

<img class="alignnone" title="Pizza Order" src="http://3.bp.blogspot.com/-4KJyZBA6C7w/T3vhMY8WX3I/AAAAAAAAAGk/bkcY8MYunzY/s320/lab5.jpg" alt="Pizza Order" width="143" height="320" />

<span style="text-decoration: underline;">Problem:</span>

Not receiving parameters entered by a user on a webpage.

Code:

```
String sz = req.getParameter(“size”);
String[] tops = req.getParameterValues(“top”);
String ids = req.getParameter(“ID”);
int id = Integer.parseInt(ids);
String name = req.getParameter(“Name”);
String address = req.getParameter(“Shipping Address”);

res.setContentType(“text/html”);
out.println(“<html><head><title>Order Confirmation</title></head><body>”);
out.println(“Your order for a “);
out.println(sz + ” inch with “);
for(int i = 0; i < tops.length; i++) {
  out.println(tops[i] + ” “);
}
out.println(“<br>is on the way!<br>”);
out.println(“Shipping Address: “+ address);
out.println(“<p></p>Click <a href=’orderform.html’>here</a> to order another”);
out.println(“</body></html>”);
out.close();
}
```

<span style="text-decoration: underline;">Impact:</span>

_Unable to perform operations or calculations when using user-entered values._

<span style="text-decoration: underline;">Solution:</span>

Have to put the parameters you want to receive inside form tags inside the java servlet page.

```
<form name=”form1″ action=”order.html”>
<P>size:</p>

<input type=”radio” name=”size” value=”9″ checked=”checked” />9
<input type=”radio” name=”size” value=”12″ />12

<p> Topping</P>
<select name=”top” multiple=”multiple”>
<option value=”Mushroom”>Mushroom</option>
<option value=”Green Pepper”>Green Pepper</option>
<option value=”Tomato”>Tomato</option>
</select>
<p></p>
<p>Customer ID:</p>
<input type=”text” name=”ID” value=”” />
<p>Customer Name:</p>
<input type=”text” name=”Name” value=”” />
<p>Customer Address:</p>
<input type=”text” name=”Shipping Address” value=”” />

<p></p><input type=”submit” value=”Submit Order” name=”Submit” />
</form>
```

---
id: 211
title: Web Application Deployment Descriptor
date: 2012-04-10T22:27:27+00:00
author: Phong Huynh
layout: post

permalink: /web-application-deployment-descriptor/
dsq_thread_id:
  - "4504853719"
image: /wp-content/uploads/2012/04/overview-applicationModule-455x261.gif
categories:
  - Programming
tags:
  - blog
  - jsp
  - school
---
![](/wp-content/uploads/2012/04/overview-applicationModule-455x261.gif)
When working with servlets and java server pages, you need a web application deployment descriptor.

It is basically an XML file (usually called web.xml or application.xml) that tells the container about the web application.

It contains:

ServletContext initialization parameters

Servlet/JSP definitions

Servlet/JSP mappings

Welcome file list

Error pages

<span style="text-decoration: underline;">Problem:</span>

JSP/Servlet page outputs a descriptor error.

<span style="text-decoration: underline;">Impact:</span>

Your webpage will not run without a deployment descriptor

<span style="text-decoration: underline;">Solution:</span>

Add the deployment descriptor to the project. Usually it is automatically generated, if it is not then manually input the descriptor yourself.

```
<?xml version=“1.0” encoding=“ISO-8859-1” ?>
<!DOCTYPE web-app PUBLIC
“-//Sun Microsystems, Inc.//DTD Web Application 2.3//EN”
“http://java.sun.com/dtd/web-app_2_3.dtd”>
<web-app>
<Servlet>
<Servlet-name>Info</Servlet-name>
<Servlet-class>InfoServlet</Servlet-name>
<load-on-startup>1</load-on-startup>
</Servlet>
<Servlet-mapping>
<Servlet-name>Info</Servlet-name>
<url-pattern>/info.html</url-pattern>
</Servlet-mapping>
</web-app>
```

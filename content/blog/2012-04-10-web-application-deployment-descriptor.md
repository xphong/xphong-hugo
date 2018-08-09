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
---
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

_<?xml version=“1.0” encoding=“ISO-8859-1” ?>_

_<!DOCTYPE web-app PUBLIC_

_&#8220;-//Sun Microsystems, Inc.//DTD Web Application 2.3//EN&#8221;_

_&#8220;http://java.sun.com/dtd/web-app\_2\_3.dtd&#8221;>_

_<web-app>_

_<Servlet>_

_<Servlet-name>Info</Servlet-name>_

_<Servlet-class>InfoServlet</Servlet-name>_

_<load-on-startup>1</load-on-startup>_

_</Servlet>_

_<Servlet-mapping>_

_<Servlet-name>Info</Servlet-name>_

_<url-pattern>/info.html</url-pattern>_

_</Servlet-mapping>_

_</web-app>_
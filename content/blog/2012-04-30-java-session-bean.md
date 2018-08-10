---
id: 213
title: Java Session Bean
date: 2012-04-30T19:39:44+00:00
author: Phong Huynh
layout: post

permalink: /java-session-bean/
dsq_thread_id:
  - "3445293156"
image: /wp-content/uploads/2012/04/Coffee_beans_macro-455x270.jpg
categories:
  - Programming
tags:
  - blog
  - jsp
  - session beans
  - school
---
Lab Question:

A company has asked you to develop a mortgage payment calculator web site. This application which is created using Enterprise Java Beans, takes some parameters such as interest rate, mortgage amount and the interest term from the user and calculates the mortgage monthly payments. The result is back to the client. All of the business logics are implemented using Enterprise Java Bean.

In more details, your application has the following components:

&#8211; Client tier which is a servlet or jsp

In client tier, you take the following parameters from the user:

&#8211; Enterprise tier: in this tier, you implement a session bean and its required interfaces.

For this lab, only implement the following parts:

&#8211; Implement a Session Bean. Decide whether it should be stateless or stateful. Explain the reason.

&#8211; Implement the required interface and the business methods.

&nbsp;

<span style="text-decoration: underline;">Problem:</span>

The remote method and class for the session bean is not automatically created in the newer version of Java.

<span style="text-decoration: underline;">Impact:</span>

The method that calculates the monthly mortgage payments will not work because there is no remote method.

<span style="text-decoration: underline;">Solution:</span>

Manually create the remote class and implement the method inside of the class.

```
import javax.ejb.Remote;

@Remote
public interface SayHelloRemote {
Double HelloMethod(double amount, double rate, int year, int month);
}

Then call the method inside of the java server page.

Context ctx = new InitialContext();
SayHelloRemote sb = (SayHelloRemote) ctx.lookup(SayHelloRemote.class.getName());

Double payment = sb.HelloMethod(amount, rate, term, monthterm);
```

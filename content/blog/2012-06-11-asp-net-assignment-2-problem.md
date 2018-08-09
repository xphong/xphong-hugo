---
id: 201
title: ASP.NET Assignment 2 Problem
date: 2012-06-11T21:22:52+00:00
author: Phong Huynh
layout: post

permalink: /asp-net-assignment-2-problem/
dsq_thread_id:
  - "3449428368"
categories:
  - Programming
  - Web Development
tags:
  - ASP.NET
  - blog
---
Had an error while working on my second assignment for ASP.NET class. For this assignment I had to make a web page that shows a drop down list of car model, which when selected shows a list of checkbox items for car packages. It will output what they selected once the user selects the car packages and presses submit.

&nbsp;

<span style="text-decoration: underline;">Problem:</span>

Car model website does not receive check box list items for drop down list items other than the first item. For example: it will only show for the options for Nissan Maxima because it is the first car model in the list, if the user selects any other car models it does not work.

&nbsp;

[<img class="aligncenter" src="http://1.bp.blogspot.com/-wkM2_LbkGSg/T3s_GDqKPnI/AAAAAAAAAFk/2_0NGsJ_2uQ/s320/aspnissan.jpg" alt="" width="320" height="298" border="0" />](http://1.bp.blogspot.com/-wkM2_LbkGSg/T3s_GDqKPnI/AAAAAAAAAFk/2_0NGsJ_2uQ/s1600/aspnissan.jpg)

&nbsp;

&nbsp;

<span style="text-decoration: underline;">Impact:</span> User cannot see the specific options for each car model when they select it.

<span style="text-decoration: underline;"><br /> Solution:</span>_

if (!Page.IsPostBack)

{

ddlModels.DataSource = ModelsList;

ddlModels.DataBind();

}_

This code makes it so that the data source does not reset to the first item if the page does not

refresh, therefore allowing the correct options to be displayed.
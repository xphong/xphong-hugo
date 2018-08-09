---
id: 219
title: Mediator Design Pattern
date: 2012-07-17T13:16:48+00:00
author: Phong Huynh
layout: post
guid: http://www.phonghuynh.ca/?p=219
permalink: /mediator-design-pattern/
dsq_thread_id:
  - "3222397035"
image: /wp-content/uploads/2012/07/Mediator-Pattern_2.gif
categories:
  - Programming
tags:
  - blog
  - mediator design pattern
---
This is an assignment question I had for my Design Patterns and Software Testing class. It is an important question to answer because it deals with a real life situation. The question is also very detailed and will help me understand this certain design pattern.

<span style="text-decoration: underline;">Problem:</span>
  
In this question, you are requested to design a representation for the “Department” in this company. There are currently four departments in this company as follow:
  
o Procurement: This department provides the parts for this company. The parts could have been existed in the inventory list of the company before or could be newly-arrived products that had never been existed in the inventory list before, e.g. a record has to be created for such a part inside the inventory list.
  
o Sales: This department is in charge of orders from customers as well as selling the products customers.
  
o Technical: This department provides technical information about the parts that are provided by procurement department. For example, this department advises the procurement department about the brand of the parts as well as advising the sales department about the technical and marketing aspects of such part, e.g. it may justify that which brand is more economical to buy considering also a fair quality for that part.
  
o Advertisement: As it comes from the name, this department advertises the products that this company provides.
  
Your task in this question is to represent the department hierarchy for such company.
  
Obviously, if one of the departments performs a transaction, such a transaction may change the state of other departments as well. For example, if procurement department provide a new part for this company, this will affect the sales department since the sales department may now is sell this new product. Also, the advertisement department will have to create some TV or radio advertisement for such a new part and correspondingly, the technical department has to provide the corresponding technical information about this new part. The same scenario applies for technical, sales and departments, e.g. when technical department performs a research about a new product, procurement department will have to provide the item, sales department will add the new part to inventory list, etc. All in all, any change to one or many of the departments will affect the state of other departments.
  
Draw a UML diagram with correct relationship representation and some explanations to justify your design.

<span style="text-decoration: underline;">Impact:</span>
  
To determine which design pattern should be used for this certain situation. Using the wrong design pattern will cause the software to be incorrectly implemented because it will be implemented based on the pattern.

<span style="text-decoration: underline;">Solution:</span>
  
Design Pattern
  
<< Mediator >>

The mediator pattern is used for the departments because it defines an object which controls the interactions between a group of objects. Since any changes to one or more of these departments will affect the state of other departments, it is best to use the mediator pattern because the mediator centralizes this by creating an object which will mark down the changes and apply it to the other departments.
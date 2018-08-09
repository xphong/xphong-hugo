---
id: 207
title: Java Entity Bean
date: 2012-04-26T15:28:45+00:00
author: Phong Huynh
layout: post
guid: http://www.phonghuynh.ca/?p=207
permalink: /java-entity-bean/
dsq_thread_id:
  - "3222396698"
image: /wp-content/uploads/2012/04/Image1-455x270.gif
categories:
  - Programming
tags:
  - beans
  - blog
  - EJB
---
Entity Bean lab for Distributed Computing using Java class. The purpose of this lab is to develop an EJB application that uses the entity bean which is used for accessing data inside of a database.

<span style="text-decoration: underline;">Problem:</span>
  
Wrong type is entered for customer id.
  
The code given in the lab is old and uses string as customer id.
  
_<% InitialContext ic = new InitialContext();_
  
 _Object o = ic.lookup(CustomerSessionRemote.class.getName());_
  
 _CustomerSessionRemote custSession = (CustomerSessionRemote) o;_

_Customerinfo customer = custSession.searchForCustomerRemote(&#8220;120&#8221;);_
  
 _if(customer!=null){_
  
 _out.print(customer.getCustomername());_
  
 _}_
  
 _%>_
  
<span style="text-decoration: underline;">Impact:</span>
  
Unable to receive customer information from the database table.

&nbsp;

<span style="text-decoration: underline;">Solution:</span>
  
Change the id to an integer.
  
_Customerinfo customer = custSession.searchForCustomerRemote(120);_
  
_Also have to change the methods to receive an integer for it to work._
  
_@Remote_
  
_public interface CustomerSessionRemote {_

_Customerinfo searchForCustomerRemote(Integer id);_

_}_

_@TransactionManagement(value=TransactionManagementType.CONTAINER)_

_public class CustomerSessionBean implements CustomerSessionRemote, CustomerSessionLocal {_

_@javax.persistence.PersistenceContext(unitName=&#8221;persistence_sample&#8221;)_
  
 _private EntityManager em ;_

_public Customerinfo searchForCustomerLocal(Integer id) {_
  
 _Customerinfo cust = (Customerinfo)em.find(Customerinfo.class, id);_
  
 _return cust;_
  
 _}_
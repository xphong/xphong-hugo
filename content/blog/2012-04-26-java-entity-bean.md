---
id: 207
title: Java Entity Bean
date: 2012-04-26T15:28:45+00:00
author: Phong Huynh
layout: post

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
  - school
---
![](/wp-content/uploads/2012/04/Image1-455x270.gif)
Entity Bean lab for Distributed Computing using Java class. The purpose of this lab is to develop an EJB application that uses the entity bean which is used for accessing data inside of a database.

<span style="text-decoration: underline;">Problem:</span>

Wrong type is entered for customer id.

The code given in the lab is old and uses string as customer id.

```
<% InitialContext ic = new InitialContext();
Object o = ic.lookup(CustomerSessionRemote.class.getName());
CustomerSessionRemote custSession = (CustomerSessionRemote) o;

Customerinfo customer = custSession.searchForCustomerRemote(“120”);
if(customer!=null){
out.print(customer.getCustomername());
}
%>
```


<span style="text-decoration: underline;">Impact:</span>

Unable to receive customer information from the database table.

&nbsp;

<span style="text-decoration: underline;">Solution:</span>

Change the id to an integer.


```
Customerinfo customer = custSession.searchForCustomerRemote(120);
// Also have to change the methods to receive an integer for it to work.
@Remote
public interface CustomerSessionRemote {

  Customerinfo searchForCustomerRemote(Integer id);

}

@TransactionManagement(value=TransactionManagementType.CONTAINER)

public class CustomerSessionBean implements CustomerSessionRemote, CustomerSessionLocal {

  @javax.persistence.PersistenceContext(unitName=”persistence_sample”)
  private EntityManager em ;

  public Customerinfo searchForCustomerLocal(Integer id) {
    Customerinfo cust = (Customerinfo)em.find(Customerinfo.class, id);
    return cust;
  }
}
```

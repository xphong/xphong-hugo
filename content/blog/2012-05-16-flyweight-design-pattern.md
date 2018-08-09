---
id: 205
title: Flyweight Design Pattern
date: 2012-05-16T16:00:00+00:00
author: Phong Huynh
layout: post
guid: http://www.phonghuynh.ca/?p=205
permalink: /flyweight-design-pattern/
dsq_thread_id:
  - "3632417118"
image: /wp-content/uploads/2012/05/flyweight-455x270.gif
categories:
  - Programming
---
<p class="drop-cap">
  A problem I had while implementing the “flyweight” design pattern for a lab in my design patterns class. The flyweight design pattern basically has a factory to hold different attributes for example, the attributes of a font which are: 
</p>

<div>
  <p>
    &#8211; Font: String<br /> &#8211; Size: Integer<br /> &#8211; Color: String<br /> &#8211; Italic: boolean<br /> &#8211; Bold: Boolean<br /> &#8211; Row: Integer<br /> &#8211; Column: Integer
  </p>
  
  <p>
    To implement the design pattern we must add different fonts to the factory, only if the font is not already in the factory.
  </p>
  
  <p>
    <span style="text-decoration: underline;">Problem:</span><br /> The main class was not adding fonts to the factory correctly. It is supposed to add fonts that are not already in the factory, in this case it is not and the factory size remains the same when testing.<br /> The test code:
  </p>
  
  <p>
    <em>FontFactory myFactory = new FontFactory();</em>
  </p>
  
  <p>
    <em>Font a = new Font(“Arial”, 12, “Blue”, true, true);</em><br /> <em>MyCharacter characterA = new MyCharacter(myFactory.createFont(a));</em><br /> <em>System.out.println(“Factory size: “ + myFactory.getTotalFonts());</em>
  </p>
  
  <p>
    <em>Font b = new Font(“Times new Roman”, 12, “Black”, true, true);</em><br /> <em>MyCharacter characterB = new MyCharacter(myFactory.createFont(b));</em><br /> <em>System.out.println(“Factory size: “ + myFactory.getTotalFonts());</em>
  </p>
  
  <p>
    Factory size kept returning the same value even though different fonts are being added.
  </p>
  
  <p>
    <span style="text-decoration: underline;">Impact:</span><br /> Flyweight design pattern is implemented incorrectly, therefore the concept will not be clear and the lab will not be complete.
  </p>
  
  <p>
    <span style="text-decoration: underline;">Solution:</span><br /> There was an error with the createFont method which creates the font by comparing the font being added through an arraylist of fonts that are already in the factory and then checking if the font is currently in the factory.
  </p>
  
  <p>
    <em>Public Font createFont(Font a){</em><br /> <em> For (int i = 0; I < fonts.size(); i++){ //loops through the factory list of fonts</em><br /> <em>If (a.isEqual(a,fonts.get(i)) == true) { //if the font being added is there then it will not be //added</em><br /> <em> Check = true;</em><br /> <em> }</em><br /> <em> Else { //the problem with the method was that it was missing the else statement</em><br /> <em> Check = false; //if the font is not there check is false</em><br /> <em> }</em><br /> <em> }</em>
  </p>
  
  <p>
    <em>If (check == false) { //if the font is not in the factory then it will be added</em><br /> <em> Fonts.add(a);</em><br /> <em> }</em><br /> <em> Return a;</em><br /> <em>}</em>
  </p>
  
  <p>
    The else statement which determines that the font being added is not in the factory was not there so there was no way of adding the font to the factory.
  </p>
</div>

<div>
</div>
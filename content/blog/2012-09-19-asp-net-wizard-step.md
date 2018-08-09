---
id: 280
title: ASP.NET Wizard Step
date: 2012-09-19T18:12:15+00:00
author: Phong Huynh
layout: post
guid: http://www.phonghuynh.ca/?p=280
permalink: /asp-net-wizard-step/
dsq_thread_id:
  - "3102158537"
image: /wp-content/uploads/2012/09/Microsoft_wordmark.svg_-455x91.png
categories:
  - Programming
  - Web Development
tags:
  - ASP.NET
  - blog
---
An assignment for my Web Application Development class. For this assignment I had to create two forms that both use validation groups to validate the fields. One of the forms must use either Wizard Steps or Multiview. I chose Wizard Steps.

<span style="text-decoration: underline;">Problem:</span>

Validation was not working for the wizard steps even though everything was coded perfectly.

<div>
  <em>   <%&#8211;Wizard Step 2&#8211;%></em>
</div>

<div>
  <em>                <asp:WizardStep id=&#8221;wds_2&#8243; runat=&#8221;server&#8221; title=&#8221;Account Info&#8221;></em>
</div>

<div>
  <em>                <asp:Label ID=&#8221;lbl_username&#8221; runat=&#8221;server&#8221; Text=&#8221;Username: &#8221; AssociatedControlID=&#8221;txt_</em><wbr><em>username&#8221; /></em></wbr>
</div>

<div>
  <em>                <asp:TextBox ID=&#8221;txt_username&#8221; runat=&#8221;server&#8221; /></em>
</div>

<div>
  <em>                <asp:RequiredFieldValidator ID=&#8221;rfv_username&#8221; runat=&#8221;server&#8221; ControlToValidate=&#8221;txt_</em><wbr><em>username&#8221; display=&#8221;Dynamic&#8221; Text=&#8221;Empty value&#8221; ErrorMessage=&#8221;Please enter username.&#8221; ValidationGroup=&#8221;info_form</em><em>&#8221; /></em></wbr>
</div>

<div>
</div>

<div>
  <span style="text-decoration: underline;">Impact:</span>
</div>

<div>
  No validation for the form.
</div>

<div>
</div>

<div>
  <span style="text-decoration: underline;">Solution:</span>
</div>

<div>
  In wizard step, the next and previous buttons are automatically created. Therefore there is no validation group inside the buttons. To fix this problem I had to use the StepNavigationTemplate to assign the validation group inside the buttons. What the StepNavigationTemplate does is that it lets you create your own buttons for next and previous using CommandName=MoveNext or MovePrev. Creating my own buttons for my wizard step allows me to add the validation group inside the element.
</div>

<div>
</div>

<div>
  <p>
    <em><StepNavigationTemplate></em><br /> <em> <asp:Button ID=&#8221;btn_Previous&#8221; runat=&#8221;server&#8221; Text=&#8221;Previous&#8221; CommandName=&#8221;MovePrevious&#8221; /></em><br /> <em> <asp:Button ID=&#8221;btn_Next&#8221; runat=&#8221;server&#8221; Text=&#8221;Next&#8221; CommandName=&#8221;MoveNext&#8221; <strong>ValidationGroup=&#8221;info_form&#8221;</strong>  CausesValidation=&#8221;true&#8221; /></em><br /> <em> </StepNavigationTemplate></em>
  </p>
</div>

<div>
</div>
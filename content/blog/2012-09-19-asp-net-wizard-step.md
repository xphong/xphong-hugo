---
id: 280
title: ASP.NET Wizard Step
date: 2012-09-19T18:12:15+00:00
author: Phong Huynh
layout: post

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
  - school
---
An assignment for my Web Application Development class. For this assignment I had to create two forms that both use validation groups to validate the fields. One of the forms must use either Wizard Steps or Multiview. I chose Wizard Steps.

<span style="text-decoration: underline;">Problem:</span>

Validation was not working for the wizard steps even though everything was coded perfectly.

```
<asp:WizardStep id=”wds_2″ runat=”server” title=”Account Info”>
<asp:Label ID=”lbl_username” runat=”server” Text=”Username: ” AssociatedControlID=”txt_username” />
<asp:TextBox ID=”txt_username” runat=”server” />
<asp:RequiredFieldValidator ID=”rfv_username” runat=”server” ControlToValidate=”txt_username” display=”Dynamic” Text=”Empty value” ErrorMessage=”Please enter username.” ValidationGroup=”info_form” />
```

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

```
<StepNavigationTemplate>
  <asp:Button ID=”btn_Previous” runat=”server” Text=”Previous” CommandName=”MovePrevious” />
  <asp:Button ID=”btn_Next” runat=”server” Text=”Next” CommandName=”MoveNext” ValidationGroup=”info_form”  CausesValidation=”true” />
</StepNavigationTemplate>
```

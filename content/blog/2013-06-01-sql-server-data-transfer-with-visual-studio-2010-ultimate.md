---
id: 646
title: 'SQL Server Database Transfer &#038; Compare with Visual Studio 2010 Ultimate'
date: 2013-06-01T12:33:48+00:00
author: Phong Huynh
layout: post

permalink: /sql-server-data-transfer-with-visual-studio-2010-ultimate/
dsq_thread_id:
  - "3060434908"
image: /wp-content/uploads/2013/06/data-compare1.jpg
categories:
  - Programming
  - Web Development
tags:
  - ASP.NET
  - database
  - sql server
---
This post describes how to transfer/compare data between 2 databases. Before I start, to transfer data using Visual Studio you need to have:

### VISUAL STUDIO 2010 ULTIMATE VERSION OR PREMIUM VERSION

Most articles tend to leave this part out, this is a pain because you will open up your Visual Studio and wonder where the option is. Other versions of Visual Studio (2012, professional) do not have this tool installed.

If you want to simply transfer data between databases, then this is the easiest way. It beats the import/export way because you do not need to install separate tools like SQL Server Express or third party software, it is all inside Visual Studio.

### Process

If you already have the same tables on each database, then skip the Transferring Table Schemas part and go to Transferring Data and Records part.

#### Transferring Table Schemas

**Step 1: New Schema Comparison**

After opening Visual Studio 2010, on the top tool bar go to the top tool bar and go to Data>Schema Compare>New Schema Comparison

[<img class="alignnone size-full wp-image-652" src="/wp-content/uploads/2013/06/schema-compare.jpg" alt="schema-compare" width="571" height="146" srcset="/wp-content/uploads/2013/06/schema-compare.jpg 571w, /wp-content/uploads/2013/06/schema-compare-300x76.jpg 300w" sizes="(max-width: 571px) 100vw, 571px" />](/wp-content/uploads/2013/06/schema-compare.jpg)

**Step 2: Enter the database information**

You should get a pop up like this. Here you can choose the databases to compare if they are already saved, if not then click on new connection and add it in.

<span style="text-decoration: underline;">Source Schema: the database you want to get the tables from</span>

<span style="text-decoration: underline;">Target Schema: the database you want to transfer the tables to</span>

[<img class="alignnone size-full wp-image-654" src="/wp-content/uploads/2013/06/schema-compare2.jpg" alt="schema-compare2" width="642" height="290" srcset="/wp-content/uploads/2013/06/schema-compare2.jpg 642w, /wp-content/uploads/2013/06/schema-compare2-300x135.jpg 300w" sizes="(max-width: 642px) 100vw, 642px" />](/wp-content/uploads/2013/06/schema-compare2.jpg)

After pressing OK, wait until the two databases get compared, there should be a process bar.

**Step 3: Schema Compare**

You can compare the two databases and decide whether or not you want to skip/update/create/drop the table when updating the target database.

[<img class="alignnone size-full wp-image-664" src="/wp-content/uploads/2013/06/schema-compare32.jpg" alt="schema-compare3" width="779" height="301" srcset="/wp-content/uploads/2013/06/schema-compare32.jpg 779w, /wp-content/uploads/2013/06/schema-compare32-300x115.jpg 300w" sizes="(max-width: 779px) 100vw, 779px" />](/wp-content/uploads/2013/06/schema-compare32.jpg)

When you are ready, press the Write Updates button and the target schema will be updated.

#### Transferring Data and Records

**Step 1: New Data Comparison**

After opening Visual Studio 2010, on the top tool bar go to the top tool bar and go to Data>Data Compare>New Data Comparison

[<img class="alignnone size-full wp-image-660" src="/wp-content/uploads/2013/06/data-compare1.jpg" alt="data-compare1" width="545" height="140" srcset="/wp-content/uploads/2013/06/data-compare1.jpg 545w, /wp-content/uploads/2013/06/data-compare1-300x77.jpg 300w, /wp-content/uploads/2013/06/data-compare1-150x38.jpg 150w, /wp-content/uploads/2013/06/data-compare1-400x102.jpg 400w" sizes="(max-width: 545px) 100vw, 545px" />](/wp-content/uploads/2013/06/data-compare1.jpg)

&nbsp;

**Step 2: Enter Database Information**

You should get a pop up like this. Here you can choose the databases to compare if they are already saved, if not then click on new connection and add it in.

<span style="text-decoration: underline;">Source Schema: the database you want to get the tables from</span>

<span style="text-decoration: underline;">Target Schema: the database you want to transfer the tables to</span>

[<img class="alignnone size-full wp-image-662" src="/wp-content/uploads/2013/06/data-compare2.jpg" alt="data-compare2" width="610" height="323" srcset="/wp-content/uploads/2013/06/data-compare2.jpg 610w, /wp-content/uploads/2013/06/data-compare2-300x158.jpg 300w" sizes="(max-width: 610px) 100vw, 610px" />](/wp-content/uploads/2013/06/data-compare2.jpg)

Select the options you want to compare, and then either click next or finish.

<span style="text-decoration: underline;">Next will give you a screen to select which tables and fields you want to compare.</span>

<span style="text-decoration: underline;">Finish will compare every table.</span>

**Step 3: Data Compare**

You can compare the two databases and decide whether or not you want to transfer the table data.

[<img class="alignnone size-full wp-image-667" src="/wp-content/uploads/2013/06/data-compare3.jpg" alt="data-compare3" width="763" height="256" srcset="/wp-content/uploads/2013/06/data-compare3.jpg 763w, /wp-content/uploads/2013/06/data-compare3-300x100.jpg 300w" sizes="(max-width: 763px) 100vw, 763px" />](/wp-content/uploads/2013/06/data-compare3.jpg)

When you are ready, press the Write Updates button and the target database will be updated with the records you selected.
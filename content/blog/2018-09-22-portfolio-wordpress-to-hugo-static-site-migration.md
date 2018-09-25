---
layout: post
title: WordPress to Static Site Generator (Hugo) Migration and Deployment
date: 2018-09-22T15:01:21.727Z
---
TL;DR — This article will show you how to migrate a simple
[WordPress](https://wordpress.com/) website to a static site generator
([Hugo](https://gohugo.io/)) and host it for free on either
[Netlify](https://www.netlify.com/) or [GitHub
Pages](https://pages.github.com/).

[GitHub Repository for this demo](https://github.com/xphong/hugo-demo) / [Demo
Site](https://hugo-blog-demo.netlify.com/)


### What is Hugo?

![](https://cdn-images-1.medium.com/max/1600/1*24rMpWwzXmNtbdwLzkDhWQ.png)
Hugo is a static HTML and CSS website generator written in Go. It is optimized
for speed, ease of use, and configurability. Hugo takes a directory with content
and templates and renders them into a full HTML website.

> Hugo relies on Markdown files with front matter for metadata, and you can run
> Hugo from any directory. This works well for shared hosts and other systems
> where you don’t have a privileged account.
>
> Hugo renders a typical website of moderate size in a fraction of a second. A
> good rule of thumb is that each piece of content renders in around 1
> millisecond.<br> Hugo is designed to work well for any kind of website including
> blogs, tumbles, and docs.
>
> (<https://github.com/gohugoio/hugo#overview>)

### What is GitHub Pages?

> GitHub Pages is a static site hosting service designed to host your personal,
> organization, or project pages directly from a GitHub repository.
>
> (<https://help.github.com/articles/what-is-github-pages/>)

### What is Netlify?

> Netlify is perfecting a unified platform that automates your code to create
> high-performant, easily-maintainable sites and web-apps.
>
> (<https://www.netlify.com/press/>)

### Getting Started

To get started, you will need to [create a new GitHub
repository](https://help.github.com/articles/create-a-repo/) for your Hugo
project. 

Inside the repository, we will [create a new hugo
site.](https://gohugo.io/getting-started/quick-start/) 

#### Steps:

1. Install Hugo: 
   brew install hugo
2. Create a New Site in your repository’s directory:
   hugo new site . --force
3. Add a Theme (the current theme I am using is called
   [sustain](https://github.com/nurlansu/hugo-sustain/)):
4. Update the config.toml file (depending on your theme):


```
baseurl = "https://hugo-blog-demo.netlify.com/"
languageCode = "en-US"
title = "Hugo Site"
disqusShortname = ""
googleAnalytics = ""
theme = "hugo-sustain"
[permalinks]
  post = "/:year/:month/:day/:slug"
[params]
  avatar = "profile.png"
  author = "Author Name"
  description = "Describe your website"
custom_css = []
  custom_js  = []
[params.social]
  Github        = "username"
  Email         = "email@example.com"
  Twitter       = "username"
  LinkedIn      = "username"
  Stackoverflow = "username"
  Medium        = "username"
  Telegram      = "username"
[[menu.main]]
  name = "blog"
  weight = 100
  identifier = "blog"
  url = "/blog/"
[[menu.main]]
  name = "projects"
  identifier = "projects"
  weight = 200
  url = "/projects/"
[[menu.main]]
  name = "resume"
  identifier = "resume"
  weight = 300
  url = "/resume/"
```

5. Add Content:

When you run serve your website locally, you should be able to see the Hugo site
up and running.

```
hugo server
```

![](https://cdn-images-1.medium.com/max/1600/1*QJgFEWnHx5hBoaRR1gIGPg.png)

#### Exporting the Content

We will be the [Jekyll Exporter WordPress
plugin](https://wordpress.org/plugins/jekyll-exporter/) to migrate current
WordPress content over to Hugo. This plugin converts all your posts, pages,
images, and content on WordPress into files that will work with Hugo.

Now we can copy over the converted blog post files exported from the plugin into
Hugo, inside `/content/blog` .

#### Keeping the Images

To keep any images, you can copy over the exported`wp-content` folder into the
`static` folder in your Hugo project. Anything inside the `static` folder can be
referenced relatively. Example: `/wp-content/uploads/image.jpg`

If you have any blog posts referencing these images, you can do a find a replace
inside the Hugo project to replace your WordPress website’s absolute path with a
relative path. Example:
`http://wordpress-domain.com/wp-content/uploads/image.jpg` will be changed to
`/wp-content/uploads/image.jpg`

![](https://cdn-images-1.medium.com/max/1600/1*0FpUs-a9u2TmDoXfg-8BQw.gif)

To host and deploy your Hugo website for free. You can either use
[Netlify](https://www.netlify.com/) or [GitHub
Pages](https://pages.github.com/).

#### Netlify

Steps to deploy using Netlify:

1. First [signup](https://app.netlify.com/signup) for a Netlify account.
2. [Create a new site](https://app.netlify.com/start) linked to your GitHub
   repository.
3. Select your options and deploy.

![null](https://cdn-images-1.medium.com/max/1600/1*lKuI4WdKycxnIPjDK_ZsOQ.png)

After you hit deploy, it should build and deploy to a Netlify subdomain. Netlify
also comes with Continuous Deployment, depending on how you set it up. By
default, every time you push to Github, Netlify builds the master branch of your
repository and deploys to Netlify’s Content Delivery Networks (CDNs).

Example: each time a commit is pushed to the master branch of [my
repository](https://github.com/xphong/hugo-demo) Netlify builds and deploys to
<https://hugo-blog-demo.netlify.com/>

Furthermore, you can add your own [custom
domain](https://www.netlify.com/docs/custom-domains/) to Netlify.

#### GitHub Pages

Steps to deploy using GitHub Pages:

1. Create another repository with `<username>.github.io` to host the Hugo website.
2. In your original Hugo project repository, add your `<username>.github.io` repository as a submodule:

   ```
   git submodule add -b master <username>/<username>.github.io.git public
   git push
   ```

3. Create a deploy script called `deploy.sh` in the root of your Hugo project
   repository:
   ```
   #!/bin/bash

   echo -e "\033[0;32mDeploying updates to GitHub...\033[0m"

   # Build the project.
   hugo -t hugo-sustain --baseURL="
   " # if using a theme, replace by `hugo -t <yourtheme>`

   # Go To Public folder
   cd public
   # Add changes to git.
   git add -A

   # Commit changes.
   msg="rebuilding site `date`"
   if [ $# -eq 1 ]
     then msg="$1"
   fi
   git commit -m "$msg"

   # Push source and build repos.
   git push origin master

   # Come Back
   cd ..
   ```
4. Run the deploy script:

   ```sh deploy.sh```

[More on GitHub page deploys](https://gohugo.io/hosting-and-deployment/hosting-on-github/#github-project-pages) if you want to use project pages or deploy from a different branch.

![](https://cdn-images-1.medium.com/max/1600/1*of0WbtIWj-AM5BEPyv2-pg.png)
[GitHub Repository for this demo](https://github.com/xphong/hugo-demo) / [Demo Site](https://hugo-blog-demo.netlify.com/)

- - -

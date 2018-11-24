---
id: edit-a-page
title: Edit a Page
sidebar_label: Edit a Page
---

To publish a change to this Docusaurus site, all you have to do is:

1. Edit a page in your favorite text editor
2. Create a Git commit on the production branch (`master`)
3. Push the production branch to the origin repo

Netlify will automatically detect the new commit, build the entire website, and
deploy it to a global CDN.


[Diagram showing project in Git repo, editing a page, pushing to origin,
Netlify building the site, and seeing the live changes.]



## Step 1: Edit a Page

Make sure you’ve [set up this project](/docs/getting-started) on your local
machine. Then, open up the source file for this page (`/docs/edit-a-page.md`) in
a text editor.


**Delete or edit this line so you can see that something changed.**


Docusaurus will rebuild the site locally, and you should be able to see the updated
page at <a href='http://localhost:3000/docs/edit-a-page'
target='_blank'>localhost:3000/docs/edit-a-page</a>



## Step 2: Create a Git Commit

Commit the change as you would in any static site generator:

    git commit -a -m "Edited some documentation"



## Step 3: Push the Commit

To publish changes, simply push the branch back to the origin repo that we
created for you on GitHub.

    git push origin master

In a few seconds, you should be able to see the updated page on the [live
site]().



## What’s Netlify Doing?

Behind the scenes, Netlify is taking care of all the frustating parts of
running a developer documentation site so you can focus on your code.


### Continuous Deployment

Netlify listens for changes to your Git repository and automatically deploys
changes every time you push to your production (`master`) branch. Any developer
with access to underlying Git repo can update this site on their own.



### Atomic Deploys to a CDN

Instead of deploying to individual servers, Netlify serves static content (like
this Docusaurus site) directly from a global content delivery network. It also
ensures that deploys are atomic, which means you never need to worry about
cache invalidation or getting into trouble after a failed deployment.


### Infrastructure Management

Netlify automatically manages all of your infrastructure for you. You don’t
need to provision servers, configure your CDN, or worry if you have enough
capacity when your dev docs wind up on the front page of Hacker News.



### Site Builds

Whenever you push a commit, Netlify runs a build command to generate the final
version of your website. The command for this Docusaurus project is simply `npm
run build`, but you can change it to anything you want. This means Netlify
works with virtually any developer documentation engine (e.g., <a
href='https://vuepress.vuejs.org/' target='_blank'>VuePress</a>), as well as
more general purpose static site generators like <a
href='https://jekyllrb.com/' target='_blank'>Jekyll</a> and <a
href='https://www.gatsbyjs.org/' target='_blank'>Gatsby</a>.




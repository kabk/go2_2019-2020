# Graphic Design 2rd year, 2019 - 2020, Code Examples

These are code examples used during the coding class lead by James Bryan Graves

## content

The markdown content for the website [kabk.hacker.coffee](kabk.hacker.coffee).  This content includes references from lectures, assignments, etc..

## go2bot

This is nodejs IRC bot designed to be run in a UNIX pipe scenario.  Additional README.md in folder.

## 10000.js

This is an example of how to create 10000 (not so unique 😁) files with nodejs and external (typically terminal command, `touch` in this case).

## index.js

`index.js` file from the `/myapp` nodejs server example used in class.  A take on the bare minimum expressjs "Hello world" example, this also includes an example of a link to another path `/` -> `/foo`, and demonstrates how one could, if desired, include a `10000.js` into a server context.

## vote.js

This is an example of a node js express server which tracks votes for a new "bee hive location" in the KABK.

# How to push to git(hub) 

3 steps ...

* Make a change to a file (use your favorite editor: Sublime, Brackets, Atom, etc.)

* `$ git commit -am "woohoo i made change"`

* `$ git push`

# Working w/ 80.100.106.160

* Clone your repo

`$ git clone ssh://jbg@80.100.106.160/home/jbg/archive.git`

... my user is `jbg` ... so replace that with your own user.

* Create a file, however your like in your repository folder.  I created one called `blah.html`

* Add the file with git, `*` adds all new files.

`$ git add *`

* Do a commit.

`$ git commit -am "i added a file"

* Do a push.

`$ git push`



# Resetting your password on 80.100.106.160

* `$ ssh jbg@80.100.106.160`

... FOR REAL jbg, DON'T replace you username

* $ `sudo passwd <USERNAME>`

... The user name for 80.100.106.160

* Set a password ...

* `$ exit`






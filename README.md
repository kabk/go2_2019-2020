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

# Working w/ 80.100.106.160

* Clone your repo

`$ git clone ssh://jbg@80.100.106.160/home/jbg/archive.git`

... my user is `jbg` ... *so replace that with your own user*.

* Create a file, however your like in your repository folder (use your favorite editor: Atom, Brackets, Sublime, etc.).

* Add the file with git, `*` adds all new files.

`$ git add *`

* Do a commit with a nice message `-am`, `a` is add, `m` message.

`$ git commit -am "i added a file"`

* Do a push.

`$ git push`

# Starting a python http/web server in a folder

`$ cd <NAME OF FOLDER/DIRECTORY (or just drag the folder into the Terminal)`

`$ python3 -m http.server 8000`




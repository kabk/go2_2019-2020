# Terminal Workshop

## Who am I?

On Unix based systems like Linux or Mac OS, you are a user 🙋. To find out who you are you can always ask!

    $ whoami

## Where am I?

Directories are folders 📁. When you open the terminal you are in your home 🏠 folder or directory. If you get lost you can ask!

    $ pwd

##  What is in the 📁 or directory?

    $ ls

## Navigating to a new 📁

Think of 📁 as a tree 🌲. You can climb up and down the 🌲.

To go in a 📁 up the tree. 

    $ cd Documents

To go back down the tree.

    $ cd ..

## Making a new 📁

    $ mkdir 🌞

## Putting some stuff together 🤔

    $ cd 🌞

    $ pwd

    $ cd ..

    $ pwd

## Creating files 📝

    $ cd 🌞

You can create an empty file by touching 👈 it and naming it.

    $ touch 🌏

Was the 🌏 📝 created? List the contents of 🌞. 

    $ ls

Let's add some 👯 to 🌏. You can do this by simply echoing 📣 👯, and directing it into 🌏.   

    $ echo 👯 > 🌏

To see if 🌏 now has 👯, you have to ask the cat 😺. 

    $ cat 🌏

Let's add more 👯 to 🌏, and then count 💯 them! The >> means to add/append to 🌏. 

    $ echo 👯 >> 🌏 

    $ echo 👯 >> 🌏 

    $ echo 👯 >> 🌏 

    $ wc 🌏

The `wc` shows number of 👯, number of lines and number of bytes. 

## Deleting ❌

    $ touch 🌕

    $ ls

    $ rm 🌕

## Searching 🔍

You can search through 📃 by grepping 🔍. So to 🔍 for 👯 on 🌏.

    $ grep 👯 🌏

## Pipes |

You can send output from one command into another with a pipe |. What does the following do? 

    $ cat 🌏 | wc

The Internet w/ curl 📡

    curl https://www.reddit.com

## Cut/Replace ✂️

    $ sed -i -e 's/👯/👫/g' 🌏

Putting some stuff together...

    $ curl -o 🐔 https://www.reddit.com

    $ sed -e 's/</👯/g' 🐔 > 📱

    $ cat 📱

    $ cat 📱 | sed -e 's/>/🌮/g' > 💻

    $ cat  💻

Repeat!

    $ sed -e 's/a/🌯/g' 💻 > 📱

    $ cat 📱 | sed -e 's/1/🌯/g' > 💻
    
## Hacker tools

[https://hacker-tools.github.io/](https://hacker-tools.github.io/)


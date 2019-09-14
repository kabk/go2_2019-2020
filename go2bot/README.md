# go2bot

The go2bot project is 2 nodejs scripts designed to be run in a unix pipe scenario.  I have included a runnable bash shell script as a reference.

    $ ./bot.sh

## irc.js

This file needs _minimal_ changes.  You only need to name your bot at the top of the file.

    const botname = 'jbgbot'

## bot.js

This is where the logic and "intelligence" of your bot will be written.  I've included an example where the bot responds with "foo", "bar" and "baz".  This section should be replaced with whatever your bot will do.

## Notes 

### bot

The bash script contains the command:

    $ mkfifo bot

This is a named Unix pipe, and can be removed.

    $ rm bot

If you run `bot.sh` and don't remove this file, it will report an error it exists, that doesn't really hurt anything.

### 451 Error

We are using freenode as a server.  It will report an error containing `451` and `You have not registered`.  This is okay for our purposes.  Just ignore it.

 

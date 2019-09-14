#!/bin/bash
mkfifo bot
cat bot | node irc.js | node bot.js > bot
rm bot

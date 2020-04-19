#!/usr/bin/python

from datetime import datetime
import sys

projects = {}
start = None

lines = 0
with open(sys.argv[1]) as f:
    for line in f:
        elems = line.split(',')
        project = elems[0].strip()
        state = elems[1].strip()
        date_str = elems[2].strip()
        date = datetime.strptime(date_str, '%a %d %b %Y %I:%M:%S %p %Z')

        print("{time: " + str(((date.timestamp() - 1585724408) / 1000)) + ", state: " + ("1" if state == 'start' else "0") + ", label: '" + project + "', date: '" + date_str + "'},")

        #print(line)

        if 'start' == state:
            if start != None:
                sys.stderr.write('ERROR: Double starts, line: ' + str(lines) +'.\n')
                exit()
            else:
                start = date

        elif 'stop' == state:
            delta = (date - start).total_seconds()
            hours = delta / 60 / 60
            try:
                current_sum = projects[project]
                projects[project] = current_sum + hours
            except:
                projects[project] = hours
            start = None

        lines += 1

if start != None:
    sys.stderr.write('ERROR: Never ending start, line: ' + str(lines) +'.\n')
    exit()

total = 0
for key, value in projects.items():
    print(key + ': ' + str(value))
    total += value
print('---')
print('TOTAL: ' + str(total))


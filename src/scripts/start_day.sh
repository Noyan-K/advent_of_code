#!/bin/bash

year=$1
day=$2
url="https://adventofcode.com/$year/day/$day"
templates_path="./src/templates/year_tmp/day_tmp"

content=$(curl -s $url)
task=$(echo "$content" | sed -n '/<article class="day-desc">/,/<\/article>/p' | sed 's/^<article class="day-desc">//g' | sed 's/<\/article>$//g')
path="./src/$1/day_$2"

if [ -d $path ]; then
  echo "Path $path already exists"
else
  mkdir -p $path
  cp "$templates_path"/* "$path"
  rename "s/day_tmp/day_$day/" "$path"/day_tmp.*
  echo $task > "$path/day_$day.md"

  echo "Path $path with files created"
fi
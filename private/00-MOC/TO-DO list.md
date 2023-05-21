---
cssclass: mytools
title: TO-DO list
date: 2021-11-12 14:47:49
obsidianUIMode: preview
---

> [!todo] TODO
> ```dataview
task FROM "private/01-Diary/日志存档"
WHERE file.ctime > date(today) - dur(1 week) = true
SORT file.ctime desc
>```


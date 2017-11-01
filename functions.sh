#!/bin/bash
function git_branch() {
echo "(`git branch 2> /dev/null | sed -e '/^[^*]/d' -e 's/* \(.*\)/\1/'` of `git remote -v |grep origin|head -n1|awk {'print $2'}|cut -d: -f2|cut -d. -f1`)"
}

function git_pull() {
echo "===== `basename $PWD` `git_branch` ====="; git pull; echo; echo;
}

function git_update_from_upstream() {
echo "===== `basename $PWD` `git_branch` ====="; git fetch upstream master; git stash; git pull --rebase upstream master; git stash pop; echo; echo;
}

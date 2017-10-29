#!/bin/bash
source ./functions.sh
cd workspaces
for w in *; do (cd $w; echo "===== $w `git_branch` ====="; git status; echo; echo); done

#!/bin/bash
source ./functions.sh
mkdir -p workspaces/

test -d workspaces/aframe-environment-component && (cd workspaces/aframe-environment-component; git_pull) || (
    git clone -b ground-static-body git@github.com:vincentfretin/aframe-environment-component workspaces/aframe-environment-component && \
    cd workspaces/aframe-environment-component && git remote add upstream git@github.com:feiss/aframe-environment-component.git)

test -d workspaces/super-hands && (cd workspaces/super-hands; git_pull) || (
    git clone git@github.com:vincentfretin/aframe-super-hands-component workspaces/super-hands && \
    cd workspaces/super-hands && git remote add upstream git@github.com:wmurphyrd/aframe-super-hands-component.git)

test -d workspaces/aframe-teleport-controls && (cd workspaces/aframe-teleport-controls; git_pull) || (
    git clone git@github.com:vincentfretin/aframe-teleport-controls workspaces/aframe-teleport-controls && \
    cd workspaces/aframe-teleport-controls && git remote add upstream git@github.com:fernandojsg/aframe-teleport-controls.git)

test -d workspaces/aframe && (cd workspaces/aframe; git_pull) || (
    git clone git@github.com:vincentfretin/aframe workspaces/aframe && \
    cd workspaces/aframe && git remote add upstream git@github.com:aframevr/aframe.git)

test -d workspaces/aframe-4dof-controls-component && (cd workspaces/aframe-4dof-controls-component; git_pull) || (
    git clone git@github.com:vincentfretin/aframe-4dof-controls-component workspaces/aframe-4dof-controls-component && \
    cd workspaces/aframe-4dof-controls-component && git remote add upstream git@github.com:fernandojsg/aframe-4dof-controls-component.git)

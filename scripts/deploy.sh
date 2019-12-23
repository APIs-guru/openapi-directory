#!/bin/sh
export NODE_OPTIONS="--max-old-space-size=8192"
git fetch --unshallow && node $NODE_OPTIONS scripts/deploy.js && node $NODE_OPTIONS scripts/deployRss.js && node $NODE_OPTIONS scripts/deploy_badges.js

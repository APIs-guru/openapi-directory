#!/bin/sh
set -e

export GIT_COMMITTER_NAME=APIs-GuruBot
git checkout -b gh-pages origin/gh-pages
git merge "$TRAVIS_COMMIT"
git push --force --quiet "https://${GH_TOKEN}@${GH_REF}"
git checkout master

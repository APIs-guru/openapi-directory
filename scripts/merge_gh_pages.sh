#!/bin/sh
set -e

export GIT_COMMITTER_NAME=APIs-GuruBot
git push "https://$GH_TOKEN@$GH_REF" master:gh-pages 2>&1 | sed "s/$GH_TOKEN/xxPASSxx/"

#!/bin/sh
set -pipefail
export GIT_COMMITTER_NAME=APIs-GuruBot
git push "https://${GH_TOKEN}@${GH_REF}" "${TRAVIS_COMMIT}:gh-pages" 2>&1 | sed "s/${GH_TOKEN}/xxPASSxx/"

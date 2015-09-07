#!/bin/bash
set -o pipefail
(
  set -e
  set -x
  export GIT_COMMITTER_NAME=APIs-GuruBot
  export GIT_COMMITTER_EMAIL=founders@APIs.guru
  npm install
  ./scripts/collection.js api https://apis-guru.github.io/api-models/
  git add ./api/v1/list.json
  git commit -m 'Generate API'
  git push --force "https://${GH_TOKEN}@${GH_REF}" HEAD:gh-pages 2>&1
  git clean -xd
) 2>&1 | sed "s/${GH_TOKEN}/xxPASSxx/"

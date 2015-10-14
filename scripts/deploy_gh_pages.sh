#!/bin/bash
set -o pipefail
(
  set -e
  set -x
  git config user.name "APIs-GuruBot"
  git config user.email "founders@APIs.guru"

  #FIXME: remove
  export NODE_TLS_REJECT_UNAUTHORIZED=0
  ./scripts/collection.js cache https://apis-guru.github.io/api-models/
  git add ./cache

  ./scripts/collection.js api https://apis-guru.github.io/api-models/
  git add ./api/

  git commit -m 'Generate API'

  git push --force "https://${GH_TOKEN}@${GH_REF}" HEAD:gh-pages
  git clean -xdf
) 2>&1 | sed "s/${GH_TOKEN}/xxPASSxx/"

#!/bin/bash
set -o pipefail
(
  set -e
  set -x

  mkdir deploy
  find -name swagger.json | grep -v deploy | cpio -pdm deploy
  cd deploy

  git init
  git config user.name "APIs-GuruBot"
  git config user.email "founders@APIs.guru"

  ../scripts/collection.js csv
  git add ./internal_api/list.csv

  #FIXME: remove
  export NODE_TLS_REJECT_UNAUTHORIZED=0
  ../scripts/collection.js cache https://apis-guru.github.io/api-models/
  git add ./cache

  ../scripts/collection.js api https://apis-guru.github.io/api-models/
  git add ./api/v1/list.json

  ../scripts/collection.js apisjson https://apis-guru.github.io/api-models/
  git add ./apis.json

  ../scripts/collection.js banner
  git add ./apis_in_collection_banner.svg

  git commit -m 'Deployed to Github Pages'

  git push --force "https://${GH_TOKEN}@${GH_REF}" master:gh-pages
  git clean -xdf
) 2>&1 | sed "s/${GH_TOKEN}/xxPASSxx/"

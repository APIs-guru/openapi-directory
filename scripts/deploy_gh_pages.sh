#!/bin/bash
set -o pipefail
(
  set -e
  set -x

  mkdir deploy_gh_pages
  cp -R APIs/* deploy_gh_pages
  cp -R ./branding/ deploy_gh_pages
  cd deploy_gh_pages

  git init
  git config user.name "APIs-GuruBot"
  git config user.email "founders@APIs.guru"

  ../scripts/collection.js csv
  git add ./internal_api/list.csv

  #FIXME: remove
  export NODE_TLS_REJECT_UNAUTHORIZED=0
  ../scripts/collection.js cache https://apis-guru.github.io/api-models/

  ../scripts/collection.js api https://apis-guru.github.io/api-models/

  ../scripts/collection.js apisjson https://apis-guru.github.io/api-models/

  ../scripts/collection.js html https://apis-guru.github.io/api-models/

  ../scripts/collection.js banner

  cp ../scripts/apis_guru_swagger.yaml api/v1/swagger.yaml

  git add .
  git commit -m 'Deployed to Github Pages'

  git push --force "https://${GH_TOKEN}@${GH_REF}" master:gh-pages
  git clean -xdf
) 2>&1 | sed "s/${GH_TOKEN}/xxPASSxx/"

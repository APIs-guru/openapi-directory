#!/bin/bash
set -e
set -x

mkdir deploy
cp -R APIs/* deploy
cp -R ./branding/ deploy
cd deploy

../scripts/collection.js csv

#FIXME: remove
export NODE_TLS_REJECT_UNAUTHORIZED=0
../scripts/collection.js cache https://apis-guru.github.io/api-models/

../scripts/collection.js api https://apis-guru.github.io/api-models/

../scripts/collection.js apisjson https://apis-guru.github.io/api-models/

../scripts/collection.js html https://apis-guru.github.io/api-models/

../scripts/collection.js banner

cp ../scripts/apis_guru_swagger.yaml api/v1/swagger.yaml
cp ../scripts/apis.json api/apis.json

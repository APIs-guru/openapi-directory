#!/bin/bash
set -e
set -x

mkdir deploy
cd deploy

#FIXME: remove
export NODE_TLS_REJECT_UNAUTHORIZED=0
../scripts/deploy.js

cp -R ../branding/ .
cp ../scripts/apis_guru_swagger.yaml api/v1/swagger.yaml
cp ../scripts/apis.json api/apis.json
cp ../scripts/index.html .

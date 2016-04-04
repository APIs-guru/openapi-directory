#!/bin/bash
set -e
set -x

mkdir deploy
cd deploy

../scripts/deploy.js

cp -R ../branding/ .
cp ../scripts/apis_guru_swagger.yaml api/v1/swagger.yaml
cp ../scripts/apis.json api/apis.json
cp ../scripts/index.html .

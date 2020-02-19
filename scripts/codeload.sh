#!/bin/sh
cd ../cache
wget -O octokit.tar.gz https://codeload.github.com/octokit/routes/tar.gz/master
rm -rf github
mkdir -p github
cd github
tar -xvf ../octokit.tar.gz
node ~/node/oas-kit/packages/oas-resolver/resolve routes-master/openapi/api.github.com/index.json
ls -lh resolved.yaml
cd ../../APIs

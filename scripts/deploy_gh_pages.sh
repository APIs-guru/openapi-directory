#!/bin/bash
set -o pipefail
set -x
export GIT_COMMITTER_NAME=APIs-GuruBot
./scripts/gen_apilist.sh
git add ./apilist.json
git commit -m 'Generate apilist.json'
git push --force "https://${GH_TOKEN}@${GH_REF}" HEAD:gh-pages 2>&1

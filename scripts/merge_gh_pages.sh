#!/bin/bash
set -o pipefail
export GIT_COMMITTER_NAME=APIs-GuruBot
./scripts/gen_apilist.sh
git commit -m 'Update apilist.json' ./apilist.json
git push "https://${GH_TOKEN}@${GH_REF}" HEAD:gh-pages 2>&1
#| sed "s/${GH_TOKEN}/xxPASSxx/"

#!/bin/sh
SWAGGER_TOOL="$(pwd)/node_modules/.bin/swagger-tools"
MODELS=$(find $1 -name swagger.json)
STATUS=0
for file in $MODELS
do
  echo "========================== $file =========================="
  $SWAGGER_TOOL validate "$file" || STATUS=$?
done
exit $STATUS

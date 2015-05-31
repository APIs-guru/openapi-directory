#!/bin/sh
DISCOVERY2SWAGGER="$(pwd)/node_modules/.bin/discovery2swagger"
rm -r googleapis.com
$DISCOVERY2SWAGGER googleapis.com

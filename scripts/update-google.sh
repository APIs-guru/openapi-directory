#!/bin/sh
DISCOVERY2SWAGGER="$(pwd)/node_modules/.bin/discovery2swagger"
rm -r google
$DISCOVERY2SWAGGER google

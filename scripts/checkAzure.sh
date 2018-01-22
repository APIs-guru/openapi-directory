#!/bin/sh
find azure.com -name swagger.yaml | xargs grep -l '\$ref: .\.'
find azure.com -name swagger.yaml | xargs grep -l '\$ref: .http'

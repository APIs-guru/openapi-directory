#!/bin/sh
find azure.com -name swagger.yaml | xargs grep -l '\$ref: .\.'
find azure.com -name swagger.yaml | xargs grep -l '\$ref: .\.'
find microsoft.com -name swagger.yaml | xargs grep -l '\$ref: .\.'
find microsoft.com -name swagger.yaml | xargs grep -l '\$ref: .\.'
find windows.net -name swagger.yaml | xargs grep -l '\$ref: .http'
find windows.net -name swagger.yaml | xargs grep -l '\$ref: .http'

#!/bin/sh
LIST=$(find -name swagger.json | sort | sed '
s#/swagger.json##;
s#^./#    ["#;
s#/#","#g;
s#$#"]#;
$ ! s#$#,#')
cat > apilist.json << EOF
{
  "api": [
$LIST
  ]
}
EOF

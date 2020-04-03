#!/bin/sh
sed -e s/https:..cloud.google.com._static.images.new-gcp-logo.png/https:\\/\\/twitter.com\\/googlecloud\\/profile_image\\?size=original/ $1 > bar.txt
mv bar.txt $1

#!/bin/bash

HTML_FILE="index.html"

# Extract all valid URLs from anchor tags in the HTML file (excluding those starting with #)
URLS=$(grep -oP '(?<=<a href=")[^"]*' "$HTML_FILE" | grep -v '^#')

# Loop through each URL and check its status using curl
for url in $URLS; do
    if [ "$url" != "" ]; then
        status_code=$(curl -o /dev/null --silent --head --write-out '%{http_code}' "$url")
        if [ "$status_code" -ne 200 ]; then
            echo "$url: $status_code"
        fi
    fi
done

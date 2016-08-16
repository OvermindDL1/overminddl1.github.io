#!/bin/bash

echo "$(dirname "${BASH_SOURCE[0]}")"

cd "$(dirname "${BASH_SOURCE[0]}")"

while inotifywait -e close_write,moved_to,create -r "$PWD"; do
	nikola build
	sleep 1
done

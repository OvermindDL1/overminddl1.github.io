#!/bin/bash

#nikola github_deploy && git pull

set +e

nikola clean
git add -A
git commit -m 'Automatic deployment'
git push origin
nikola build
nikola deploy
nikola github_deploy

#!/bin/bash

set -e
set -u
set -o pipefail
set -o posix

cd "$(dirname $0)/.."

export namespace=http-status
export sha=$(git rev-parse --short HEAD)
export package_name=http-status
export replicas=1
export domain=http-status.hubc.app
export domain_clean=${domain//./-}
export package_image=registry.digitalocean.com/hubcapp/static:http-status-${sha}

docker build . -f .devops/Dockerfile -t "${package_image}"
docker push "${package_image}"

for file in .devops/kube/*; do
    envsubst < "$file"
    echo
    echo ---
    echo
done | kubectl apply -f -

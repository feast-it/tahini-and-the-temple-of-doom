#!/bin/bash

service=tahini
port=3001

docker image build -f Dockerfile -t $service .

open http://localhost:$port

docker run -p $port:$port -v $(pwd):/usr/src/server --rm --init $service 
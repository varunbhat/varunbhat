#!/bin/bash


apt-get update
apt-get install ruby-full build-essential libz-dev curl -y

gem install jekyll bundler
cd /src
gem cleanup
bundle install
bundle exec jekyll serve --host 0.0.0.0




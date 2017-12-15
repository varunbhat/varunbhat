#!/bin/bash


apt-get update
apt-get install ruby-full build-essential -y

gem install jekyll bundler

bundle exec jekyll serve


#!/bin/bash

# Set the directory path
dir_path="./assets/fonts/Plus_Jakarta_Sans/static"

# Change to the directory
cd "$dir_path"

# Loop through all the files in the directory
for file in *; do
  # Check if the file name contains a hyphen
  if [[ $file == *-* ]]; then
    # Remove everything before the first hyphen and rename the file
    mv "$file" "${file#*-}"
  fi
done
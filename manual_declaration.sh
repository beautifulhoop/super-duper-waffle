#!/bin/bash

# Create a directory for custom type definitions if it doesn't exist
mkdir -p types

# Create a custom type definition for 'passport-google-oauth20'
echo "declare module 'passport-google-oauth20';" > types/passport-google-oauth20.d.ts

# Update tsconfig.json if 'typeRoots' doesn't exist
if ! grep -q "\"typeRoots\"" tsconfig.json; then
    # Use jq (a JSON processor) to update tsconfig.json
    jq '.compilerOptions += {"typeRoots": ["./types", "./node_modules/@types"]}' tsconfig.json > tsconfig.tmp.json
    mv tsconfig.tmp.json tsconfig.json
else
    echo "'typeRoots' already exists in tsconfig.json. Ensure it includes './types' directory."
fi

# Inform the user
echo "Manual declaration for 'passport-google-oauth20' added."
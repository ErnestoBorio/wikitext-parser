#!/usr/bin/env bash

GRAMMAR_FILE=$1
SRC_PATH=$2
JAVA_PATH=$3

cd $SRC_PATH && 
antlr -Dlanguage=JavaScript -o $SRC_PATH $GRAMMAR_FILE &&
antlr -Dlanguage=Java -o $JAVA_PATH $GRAMMAR_FILE && 
cd $JAVA_PATH && 
javac *.java

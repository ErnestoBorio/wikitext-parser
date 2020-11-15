#!/usr/bin/env node
const fs = require('fs');

let pageText = '';

if (process.argv[2]) {
    pageText = fs.readFileSync(process.argv[2]).toString();
}
else {
    pageText = process.stdin.read();
}

if (!pageText) {
    console.log("Please provide either a file or standard-in text to parse.");
    process.exit();
}

const antlr4 = require('antlr4/index');
const { wikitextLexer } = require('./wikitextLexer');
const { wikitextParser } = require('./wikitextParser');
const { myListener } = require('./myListener');

var chars = new antlr4.InputStream(pageText);
var lexer = new wikitextLexer(chars);
var tokens = new antlr4.CommonTokenStream(lexer);
var parser = new wikitextParser(tokens);
parser.buildParseTrees = true;
var tree = parser.page();
var wikitext = new myListener(tree);
antlr4.tree.ParseTreeWalker.DEFAULT.walk(wikitext, tree);

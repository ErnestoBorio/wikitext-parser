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
	console.log('Please provide either a file or standard-in text to parse.');
	process.exit();
}

const antlr4 = require('antlr4/index');
const { wikitextLexer: WikitextLexer } = require('./antlr/wikitextLexer');
const { wikitextParser: WikitextParser } = require('./antlr/wikitextParser');
const { MyListener } = require('./MyListener');

const chars = new antlr4.InputStream(pageText);
const lexer = new WikitextLexer(chars);
const tokens = new antlr4.CommonTokenStream(lexer);
const parser = new WikitextParser(tokens);
parser.buildParseTrees = true;
const tree = parser.page();
const wikitext = new MyListener(tree);
antlr4.tree.ParseTreeWalker.DEFAULT.walk(wikitext, tree);

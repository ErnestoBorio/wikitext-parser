import antlr4 from 'antlr4';
import { wikitextLexer, wikitextParser } from 'antlr-wiktio';
import WiktListener from './WiktListener.js';
import fs from 'fs';

function parseWikiText(wikiText) {
	const chars = new antlr4.InputStream(wikiText);
	const lexer = new wikitextLexer(chars);
	const tokens = new antlr4.CommonTokenStream(lexer);
	const parser = new wikitextParser(tokens);
	parser.buildParseTrees = true;
	const tree = parser.page();
	const wikitext = new WiktListener(tree);
	antlr4.tree.ParseTreeWalker.DEFAULT.walk(wikitext, tree);
}

const wikiText = fs.readFileSync(process.argv[2], "utf8");
console.log(`Parsing file ${process.argv[2]}`);
parseWikiText(wikiText);
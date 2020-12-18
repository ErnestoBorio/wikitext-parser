// Actions defined for target language Javascript
grammar wikitext;

/**
 Grammar
 */

page: wikitem+;

wikitem: title | template | link | text;

title:
	  '==' text '==' {localctx.titleLevel = 0; }
	| '===' text '===' {localctx.titleLevel = 1; }
	| '====' text '====' {localctx.titleLevel = 2; }
	| '=====' text '=====' {localctx.titleLevel = 3; };

template: '{{' template_name += text ('|' parameter?)* '}}';
link: '[[' template_name += text ('|' parameter?)* ']]';

parameter: text | (text | link | template)+;

text: CHAR+;

/**
 Lexicon
 */

EOL: [\f\r\n]+ -> skip;
CHAR: .;
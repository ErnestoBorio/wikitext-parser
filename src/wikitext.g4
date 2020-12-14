grammar wikitext;

/**
 Grammar
 */

page: wikitem+ EOF;

wikitem: 
	  text
	| title 
	| template
	| link
	| bullet
	;

title: title2 | title3 | title4 | title5;
title5: '=====' text '=====';
title4: '====' text '====';
title3: '===' text '===';
title2: '==' text '==';

template: '{{' parameter ('|' parameter?)* '}}';
link: '[[' parameter ('|' parameter?)* ']]';

parameter: wikitem+;

text: CHAR+;

bullet: ('*'|'#'|'#:'|'#*');


/**
 Lexicon
 */
EOL: [\r\n]+ -> skip;
CHAR: .;
WS: ' ' -> skip;